import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route(/psthg\.skedr\.io|googletagmanager\.com/, route => route.abort());
});

test("build gate, metadata and curated signup contract", async ({ page }, info) => {
  await page.goto("/");
  const on = info.project.metadata.conversationalPreview;
  if (!on) {
    const html = await (await page.request.get("/")).text();
    expect(html).not.toContain("data-conversational-home");
    expect(html).not.toContain("assistant_starter");
    // Works for both HEAD's manual homepage and the preserved user refresh.
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('a[href*="app.skedr.io"]').first()).toBeVisible();
    return;
  }
  await expect(page.locator("h1")).toHaveText("More photography.Less sharing admin.");
  await expect(page).toHaveTitle("More photography. Less sharing admin. | Skedr");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Connect Flickr, describe your photography goal/);
  await expect(page.locator('[data-conversation-cta][data-placement="hero"]')).toHaveText("Set up with Skedr");
  const ids = ["bird-sharing", "landscape-groups", "existing-groups"];
  await expect(page.locator("a[data-starter]")).toHaveCount(3);
  for (const link of await page.locator("a[data-conversation-cta]").all()) {
    const url = new URL((await link.getAttribute("href"))!);
    expect(url.origin).toBe("https://app.skedr.io");
    expect(url.pathname).toBe("/auth/create-account");
    expect(url.searchParams.get("utm_source")).toBe("skedr_landing");
    expect(url.searchParams.get("utm_medium")).toBe("website");
    expect(url.searchParams.get("utm_campaign")).toBe("conversational_skedr");
    if (url.searchParams.has("assistant_starter")) expect(ids).toContain(url.searchParams.get("assistant_starter"));
    expect([...url.searchParams.keys()].every(k => k.startsWith("utm_") || k === "assistant_starter")).toBe(true);
  }
});

test("honest illustrative flow, keyboard navigation and fail-open analytics", async ({ page }, info) => {
  test.skip(!info.project.metadata.conversationalPreview, "Enabled build only");
  await page.goto("/");
  const home = page.locator("[data-conversational-home]");
  await expect(home.locator("ol h3")).toHaveText(["Connect Flickr", "Describe your goal", "Review your setup", "Share and follow progress"]);
  await expect(home).toContainText("not a live bot or user screenshot");
  await expect(home).toContainText("Some groups require approval");
  await expect(home).toContainText("Request queued ≠ accepted by every Flickr group");
  await expect(home).toContainText("AI messages have their own allowance, separate from sharing credits");
  await expect(home.locator("input, textarea, form, button, [contenteditable], [role=log]")).toHaveCount(0);
  await page.evaluate(() => Object.assign(window, { posthog: { capture() { throw new Error("optional analytics unavailable"); } } }));
  await page.route("https://app.skedr.io/**", route => route.fulfill({ contentType: "text/html", body: "<h1>Signup destination</h1>" }));
  const starter = home.locator('[data-starter="bird-sharing"]');
  await starter.focus();
  await expect(starter).toBeFocused();
  expect(await starter.evaluate(link => getComputedStyle(link).outlineStyle)).toBe("solid");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/auth\/create-account\?.*assistant_starter=bird-sharing/);
});

for (const width of [320, 390, 768, 1440]) test(`responsive flow at ${width}px`, async ({ page }, info) => {
  test.skip(!info.project.metadata.conversationalPreview, "Enabled build only");
  await page.setViewportSize({ width, height: 900 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  const home = page.locator("[data-conversational-home]");
  await expect(home.getByRole("list", { name: "Sharing flow" }).getByRole("listitem")).toHaveCount(4);
  const overflow = await page.evaluate(() => [...document.querySelectorAll("body *")].filter(element => element.getBoundingClientRect().right > innerWidth + 1).slice(0, 12).map(element => ({ tag: element.tagName, class: element.getAttribute("class"), right: element.getBoundingClientRect().right })));
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), JSON.stringify(overflow)).toBe(true);
  const clipped = await home.locator("h1, h2, h3, p, li, a, figcaption").evaluateAll(elements => elements.filter(element => {
    const rect = element.getBoundingClientRect();
    return rect.left < 0 || rect.right > innerWidth || getComputedStyle(element).display !== "inline" && element.scrollWidth > element.clientWidth + 1;
  }).map(element => element.textContent));
  expect(clipped).toEqual([]);
  await home.screenshot({ path: info.outputPath(`phase5-${width}.png`) });
});
