import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import base from "../astro.config.mjs";

// Separate output/cache trees: never serve the other flag state's artifact.
const variant = process.env.ENABLE_CONVERSATIONAL_SKEDR === "true" ? "on" : "off";
export default defineConfig({
  ...base,
  vite: { ...base.vite, resolve: { ...base.vite?.resolve, alias: { ...base.vite?.resolve?.alias, "flickr-sdk": fileURLToPath(new URL("./conversational-flickr.mjs", import.meta.url)) } } },
  outDir: fileURLToPath(new URL(`../.conversational-builds/${variant}/dist/`, import.meta.url)),
  cacheDir: fileURLToPath(new URL(`../.conversational-builds/${variant}/cache/`, import.meta.url)),
});
