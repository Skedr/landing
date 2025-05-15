import { test, expect, type Page } from "@playwright/test";

test("homepage", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.locator("#checkout-video")],
  });
});

test("faq page", async ({ page }) => {
  await page.goto("/faq");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("pricing page", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("features page", async ({ page }) => {
  await page.goto("/features");

  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixelRatio: 0.05,
    mask: [page.locator("#groups-video"), page.locator("#configuration-video")],
  });
});

// test('privacy policy page', async ({ page }) => {
//   await page.goto('/privacy-policy');
//   await expect(page).toHaveScreenshot({ fullPage: true });
// });

test("terms and conditions page", async ({ page }) => {
  await page.goto("/terms-and-conditions");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("blog page", async ({ page }) => {
  await page.goto("/blog");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("404 page", async ({ page }) => {
  await page.goto("/non-existent-page");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("blog post", async ({ page }) => {
  await page.goto("/blog/nature-photography-is-good-for-you");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("blog tag", async ({ page }) => {
  await page.goto("/tags/flickr");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
