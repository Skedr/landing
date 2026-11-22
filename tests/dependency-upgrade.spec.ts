import { expect, test } from "@playwright/test";
import { readdirSync } from "node:fs";
import path from "node:path";
import type Swiper from "swiper";

const blogPaths = [
  "/blog/meet-skedr-your-new-assistant/",
  "/blog/tag-game/",
  "/blog/living-my-best-second-life/",
  "/blog/on-the-road-for-world-photography-day/",
  "/blog/word-photography-day/",
  "/blog/water-photography/",
  "/blog/nature-photography-is-good-for-you/",
];

test.beforeEach(async ({ page }) => {
  // No analytics, billing or third-party image services are needed to verify
  // the built site. Galleries must now work using local, bundled assets.
  await page.route("**/*", (route) =>
    new URL(route.request().url()).hostname === "localhost"
      ? route.continue()
      : route.abort(),
  );
});

test("all generated pages load without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const pages: string[] = [];
  function visit(directory: string) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(filename);
      else if (entry.name === "index.html")
        pages.push(
          `/${path.relative("dist", filename).replace(/index.html$/, "")}`,
        );
    }
  }
  visit("dist");
  expect(pages).toHaveLength(35);
  for (const pathname of pages) {
    const response = await page.goto(pathname);
    expect(response?.status(), pathname).toBe(200);
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://skedr.io${encodeURI(pathname)}`,
    );
  }
  expect((await page.goto("/no-such-page/"))?.status()).toBe(404);
  expect(errors).toEqual([]);
});

test("content collection preserves all published blog URLs and MDX", async ({
  page,
}) => {
  await page.goto("/blog/");
  const links = await page
    .locator("article h2 a")
    .evaluateAll((elements) =>
      elements.map((element) =>
        new URL((element as HTMLAnchorElement).href).pathname.replace(
          /\/?$/,
          "/",
        ),
      ),
    );
  expect(links.sort()).toEqual([...blogPaths].sort());
  for (const pathname of blogPaths) {
    expect((await page.goto(pathname))?.status()).toBe(200);
    await expect(page.locator(".prose")).toBeVisible();
    expect((await page.locator(".prose").innerText()).length).toBeGreaterThan(
      500,
    );
  }
  await page.goto("/privacy-policy/");
  await expect(page.locator(".prose")).toContainText(
    "This Privacy Policy describes Our policies and procedures",
  );
  await expect(
    page.getByRole("heading", { name: "Interpretation and Definitions" }),
  ).toBeVisible();
});

test("bundled galleries navigate independently and respond to thumbnails", async ({
  page,
}) => {
  await page.goto("/blog/on-the-road-for-world-photography-day/");
  const galleries = page.locator("[data-gallery-main]");
  await expect(galleries).toHaveCount(2);
  for (const gallery of await galleries.all())
    await expect(gallery).toHaveClass(/swiper-initialized/);

  const index = (position: number) =>
    galleries
      .nth(position)
      .evaluate(
        (element) =>
          (element as HTMLElement & { swiper: Swiper }).swiper.realIndex,
      );
  const secondIndex = await index(1);
  const firstIndex = await index(0);
  await galleries.first().locator(".swiper-button-next").click();
  await expect.poll(() => index(0)).not.toBe(firstIndex);
  expect(await index(1)).toBe(secondIndex);

  const thumbs = page.locator("[data-gallery-thumbs]").first();
  await thumbs.locator(".swiper-slide").first().click();
  await expect.poll(() => index(0)).toBe(firstIndex);
  expect(await index(1)).toBe(secondIndex);
  expect(
    await page.locator('script[src*="cdn.jsdelivr.net/npm/swiper"]').count(),
  ).toBe(0);
});

test("Vue FAQ and pricing controls still hydrate", async ({ page }) => {
  await page.goto("/faq/");
  await expect(
    page.locator('astro-island[component-url*="/FaqPage."]'),
  ).not.toHaveAttribute("ssr", "");
  const question = page.getByRole("button", {
    name: "What is the aim of Skedr?",
  });
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await question.click();
  await expect(question).toHaveAttribute("aria-expanded", "false");

  await page.goto("/pricing/");
  await expect(
    page.locator('astro-island[component-url*="/Pricing."]'),
  ).not.toHaveAttribute("ssr", "");
  const choices = page.getByRole("radio");
  await expect(choices).toHaveCount(2);
  await choices.nth(1).click();
  await expect(choices.nth(1)).toHaveAttribute("aria-checked", "true");
  await choices.nth(0).click();
  await expect(choices.nth(0)).toHaveAttribute("aria-checked", "true");
});
