type PaddleEnvironment = "production" | "sandbox";

type BillingFrequency = "monthly" | "annually";

type PaidTierId = "tandem" | "premium";

type ProductIdMap = Record<PaidTierId, Record<BillingFrequency, string | undefined>>;

type PriceAmountMap = Record<PaidTierId, Record<BillingFrequency, number>>;

const paddleEnvironment = (import.meta.env.PUBLIC_PADDLE_ENVIRONMENT || "sandbox") as PaddleEnvironment;

const paddleVendorId = import.meta.env.PUBLIC_PADDLE_VENDOR_ID || "";

const paddleProductIds: ProductIdMap = {
  tandem: {
    monthly: import.meta.env.PUBLIC_PADDLE_PRODUCT_ID_TANDEM_MONTHLY,
    annually: import.meta.env.PUBLIC_PADDLE_PRODUCT_ID_TANDEM_ANNUALLY,
  },
  premium: {
    monthly: import.meta.env.PUBLIC_PADDLE_PRODUCT_ID_PREMIUM_MONTHLY,
    annually: import.meta.env.PUBLIC_PADDLE_PRODUCT_ID_PREMIUM_ANNUALLY,
  },
};

const fallbackCurrency = "EUR";

const fallbackPrices: PriceAmountMap = {
  tandem: {
    monthly: 3.99,
    annually: 39.99,
  },
  premium: {
    monthly: 7.99,
    annually: 79.99,
  },
};

export const paddlePricingConfig = {
  environment: paddleEnvironment,
  vendorId: paddleVendorId,
  productIds: paddleProductIds,
  fallbackCurrency,
  fallbackPrices,
};

export const defaultPrices = fallbackPrices;

export function hasPaddlePricing(): boolean {
  if (!paddleVendorId) {
    return false;
  }

  return Object.values(paddleProductIds).every((tierProductIds) =>
    Object.values(tierProductIds).every((productId) => typeof productId === "string" && productId.length > 0),
  );
}

export type { BillingFrequency, PaidTierId, PriceAmountMap, ProductIdMap, PaddleEnvironment };

