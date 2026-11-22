import { test, expect } from "@playwright/test";

// Keep local checks deterministic and avoid sending preview traffic to analytics.
test.beforeEach(async ({ page }) => {
  await page.route(/psthg\.skedr\.io|googletagmanager\.com/, (route) =>
    route.abort(),
  );
});

for (const width of [320, 390, 768, 1440]) {
  test(`homepage layout and setup path at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const mediaRequests: string[] = [];
    page.on("request", (request) => {
      if (request.resourceType() === "media") mediaRequests.push(request.url());
    });
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText(
      "Spend less time sharing to Flickr groups.",
    );
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".home-steps h3")).toHaveText([
      "Connect Flickr",
      "Configure a group with tags",
      "Sync a matching photo",
    ]);
    await expect(page.locator(".try-it-for-free")).toHaveCount(2);
    for (const link of await page.locator(".try-it-for-free").all()) {
      const url = new URL((await link.getAttribute("href"))!);
      expect(url.origin + url.pathname).toBe(
        "https://app.skedr.io/auth/create-account",
      );
      expect(url.searchParams.get("utm_campaign")).toBe("flickr_first_group");
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const video = page.locator("#checkout-video");
    await expect(video).toHaveAttribute("preload", "none");
    await expect(video).not.toHaveAttribute("autoplay", "");
    expect(mediaRequests).toEqual([]);
    await page.getByRole("link", { name: "See how it works" }).click();
    await expect(page).toHaveURL(/#how-it-works$/);
    await page.locator(".home-demo summary").click();
    await expect(video).toBeVisible();
    await expect(page.locator(".home-demo img")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width < 1024) {
      await page.getByRole("button", { name: "Open main menu" }).click();
      const signIn = page
        .getByRole("dialog")
        .getByRole("link", { name: "Log in" });
      await expect(signIn).toHaveAttribute("href", /\/auth\/sign-in\?/);
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog")).not.toBeVisible();
    } else {
      await expect(page.getByRole("link", { name: "Log in" })).toHaveAttribute(
        "href",
        /\/auth\/sign-in\?/,
      );
    }
  });
}

test("CTA attribution survives unavailable and throwing analytics", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => {
    (window as any).posthog = {
      capture: (event: string, properties: unknown) => {
        (window as any).__cta = { event, properties };
      },
    };
  });
  // Prevent this one navigation so we can inspect the captured payload.
  await page.evaluate(() => {
    document.addEventListener("click", (event) => event.preventDefault(), {
      once: true,
    });
  });
  await page.locator('[data-placement="hero"]').click();
  expect(await page.evaluate(() => (window as any).__cta)).toMatchObject({
    event: "homepage_cta_clicked",
    properties: {
      page: "/",
      placement: "hero",
      audience: "flickr_photographers",
    },
  });
  for (const throws of [false, true]) {
    await page.goto("/");
    await page.evaluate((throws) => {
      (window as any).posthog = throws
        ? {
            capture: () => {
              throw new Error("offline");
            },
          }
        : undefined;
    }, throws);
    await page.route("https://app.skedr.io/**", (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<h1>Signup destination</h1>",
      }),
    );
    await page.locator('[data-placement="hero"]').click();
    await expect(page).toHaveURL(
      /https:\/\/app\.skedr\.io\/auth\/create-account\?/,
    );
  }
});

test("homepage metadata, keyboard action and pricing navigation", async ({
  page,
  browserName,
}) => {
  await page.goto("/");
  await expect(page).toHaveTitle(
    "Spend less time sharing to Flickr groups | Skedr",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://skedr.io/",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    await page.title(),
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /configure a group with tags/,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /^https:\/\/skedr\.io\/_astro\//,
  );
  const heroImage = page.locator(".home-example-photo img");
  await expect(heroImage).toHaveAttribute("loading", "eager");
  expect(
    await heroImage.evaluate(
      (image: HTMLImageElement) => image.complete && image.naturalWidth > 0,
    ),
  ).toBe(true);
  const signup = page.locator('[data-placement="hero"]');
  await signup.focus();
  await expect(signup).toBeFocused();
  // Safari on macOS uses Option-Tab to include links in keyboard navigation.
  await page.keyboard.press(browserName === "webkit" ? "Alt+Tab" : "Tab");
  await expect(
    page.getByRole("link", { name: "See how it works" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#how-it-works$/);
  await page.getByRole("link", { name: "Compare plans and credits" }).click();
  await expect(page).toHaveURL(/\/pricing$/);
  await expect(page.locator("h1")).toHaveText(
    "How much do you value your time?",
  );
});

for (const path of ["/faq", "/features"]) {
  test(`shared navigation and CTA remain available on ${path}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto(path);
    await expect(page.locator("h1")).toBeVisible();
    const cta = page.locator(".try-it-for-free");
    await expect(cta).toHaveText("Get started");
    await expect(cta).toHaveAttribute("href", "https://app.skedr.io");
    await page.getByRole("button", { name: "Open main menu" }).click();
    await expect(
      page.getByRole("dialog").getByRole("link", { name: "Log in" }),
    ).toHaveAttribute("href", "https://app.skedr.io/");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });
}
