/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_GTM: string;
  readonly PUBLIC_FLICKR_KEY: string;
  readonly VITE_POSTHOG_KEY: string;
  readonly PUBLIC_PADDLE_VENDOR_ID: string;
  readonly PUBLIC_PADDLE_ENVIRONMENT: string;
  readonly PUBLIC_PADDLE_PRODUCT_ID_TANDEM_MONTHLY: string;
  readonly PUBLIC_PADDLE_PRODUCT_ID_TANDEM_ANNUALLY: string;
  readonly PUBLIC_PADDLE_PRODUCT_ID_PREMIUM_MONTHLY: string;
  readonly PUBLIC_PADDLE_PRODUCT_ID_PREMIUM_ANNUALLY: string;
}