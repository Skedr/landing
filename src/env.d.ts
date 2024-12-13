/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_GTM: string;
  readonly PUBLIC_FLICKR_KEY: string;
  readonly VITE_POSTHOG_KEY: string;
}