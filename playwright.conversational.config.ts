import { defineConfig, devices } from "@playwright/test";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const astroPackage = require.resolve("astro/package.json");
const astroCli = path.resolve(path.dirname(astroPackage), require(astroPackage).bin.astro);

const config = "tests/conversational.astro.config.mjs";
const variants = [
  { name: "off", port: 4545, env: "env -u ENABLE_CONVERSATIONAL_SKEDR" },
  { name: "on", port: 4546, env: "env ENABLE_CONVERSATIONAL_SKEDR=true" },
];
const browsers = [
  { name: "chromium", device: devices["Desktop Chrome"] },
  { name: "firefox", device: devices["Desktop Firefox"] },
  { name: "webkit", device: devices["Desktop Safari"] },
];

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 3,
  reporter: "list",
  outputDir: "test-results/conversational",
  use: { trace: "retain-on-failure" },
  projects: variants.flatMap((variant) =>
    browsers.map((browser) => ({
      name: `${variant.name}-${browser.name}`,
      metadata: { conversationalPreview: variant.name === "on" },
      testMatch: ["conversational.spec.ts"],
      use: {
        ...browser.device,
        baseURL: `http://127.0.0.1:${variant.port}`,
      },
    })),
  ),
  webServer: variants.map((variant) => ({
    // Astro 7 auto-backgrounds agent-launched previews unless lock tracking is
    // disabled. Keep this child in the foreground so Playwright owns shutdown.
    command: `${variant.env} pnpm run build --config ${config} && ${variant.env} ${JSON.stringify(process.execPath)} ${JSON.stringify(astroCli)} preview --ignore-lock --config ${config} --host 127.0.0.1 --port ${variant.port}`,
    url: `http://127.0.0.1:${variant.port}`,
    timeout: 180_000,
    reuseExistingServer: false,
  })),
});
