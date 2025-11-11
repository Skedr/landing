import { paddlePricingConfig, hasPaddlePricing, type PaidTierId, type BillingFrequency } from "../config/paddle";
import { currencySymbolToCode } from "./currency";

declare global {
  interface Window {
    Paddle?: {
      Setup: (options: { vendor: number | string }) => void;
      Environment: {
        set: (env: "production" | "sandbox") => void;
        get: () => string;
      };
      Product: {
        Prices: (
          productId: number | string,
          quantity: number,
          callback: (priceData: PaddleClassicPriceData) => void,
        ) => void;
      };
    };
  }
}

type PaddleClassicPriceData = {
  price: {
    gross: string;
    net: string;
    tax: string;
    tax_included: boolean;
  };
  quantity: number;
  country: string;
  recurring?: {
    price: {
      gross: string;
      net: string;
      tax: string;
    };
    subscription: {
      interval: string;
      interval_count: number;
    };
  };
};

type LocalizedPrice = {
  amount: number;
  formatted: string;
  currencyCode: string;
};

type LocalizedPrices = Record<PaidTierId, Record<BillingFrequency, LocalizedPrice>>;

let paddleScriptLoaded = false;
let paddleInitialized = false;

const SCRIPT_LOAD_DELAY = 100;
const PADDLE_READY_TIMEOUT = 5000;
const SETUP_DELAY = 1000;
const PRICE_FETCH_TIMEOUT = 10000;

async function loadPaddleScript(): Promise<void> {
  if (paddleScriptLoaded) {
    return;
  }

  return new Promise((resolve, reject) => {
    if (window.Paddle) {
      paddleScriptLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/paddle.js";
    script.async = false;
    script.onload = () => {
      setTimeout(() => {
        paddleScriptLoaded = true;
        resolve();
      }, SCRIPT_LOAD_DELAY);
    };
    script.onerror = () => {
      reject(new Error("Failed to load Paddle.js"));
    };
    document.head.appendChild(script);
  });
}

async function waitForPaddleReady(maxWait: number = PADDLE_READY_TIMEOUT): Promise<void> {
  const startTime = Date.now();
  while (Date.now() - startTime < maxWait) {
    if (
      window.Paddle &&
      typeof window.Paddle.Setup === "function" &&
      window.Paddle.Product &&
      typeof window.Paddle.Product.Prices === "function"
    ) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Paddle.js not ready after waiting");
}

async function initializePaddle(): Promise<void> {
  if (!hasPaddlePricing()) {
    throw new Error("Paddle configuration is incomplete");
  }

  if (paddleInitialized) {
    return;
  }

  await loadPaddleScript();
  await waitForPaddleReady();

  if (!window.Paddle) {
    throw new Error("Paddle.js not available after loading");
  }

  const environment = paddlePricingConfig.environment === "sandbox" ? "sandbox" : "production";
  window.Paddle.Environment.set(environment);

  const vendorId = paddlePricingConfig.vendorId;
  const vendorIdNumber = parseInt(vendorId, 10);

  if (isNaN(vendorIdNumber)) {
    throw new Error(`Invalid vendor ID: ${vendorId} (must be numeric)`);
  }

  try {
    window.Paddle.Setup({ vendor: vendorIdNumber });
  } catch (error) {
    console.error("Error calling Paddle.Setup:", error);
    throw error;
  }

  await new Promise((resolve) => setTimeout(resolve, SETUP_DELAY));
  paddleInitialized = true;
}

function parsePriceString(priceStr: string): { amount: number; currencyCode: string } {
  // Try format with currency symbol first: "R$18.75", "€54.00", "£45.00", "US$70.00"
  for (const [symbol, code] of Object.entries(currencySymbolToCode)) {
    if (priceStr.startsWith(symbol)) {
      const amountStr = priceStr.substring(symbol.length).trim();
      const numericMatch = amountStr.match(/([\d,]+\.?\d*)/);
      if (numericMatch) {
        const amount = parseFloat(numericMatch[1].replace(/,/g, ""));
        return { amount, currencyCode: code };
      }
    }
  }

  // Try format: "USD 70.00" or "EUR 54.00" (currency code followed by space and amount)
  const currencyCodeMatch = priceStr.match(/^([A-Z]{3})\s+([\d,]+\.?\d*)$/);
  if (currencyCodeMatch) {
    const currencyCode = currencyCodeMatch[1];
    const amount = parseFloat(currencyCodeMatch[2].replace(/,/g, ""));
    return { amount, currencyCode };
  }

  // Try format: "US$70.00" (currency code + symbol)
  const currencyCodeSymbolMatch = priceStr.match(/^([A-Z]{2,3})\$?\s*([\d,]+\.?\d*)$/);
  if (currencyCodeSymbolMatch) {
    const currencyCode = currencyCodeSymbolMatch[1];
    const amount = parseFloat(currencyCodeSymbolMatch[2].replace(/,/g, ""));
    return { amount, currencyCode };
  }

  // Fallback: extract just the number
  const numericMatch = priceStr.match(/([\d,]+\.?\d*)/);
  if (numericMatch) {
    const amount = parseFloat(numericMatch[1].replace(/,/g, ""));
    return { amount, currencyCode: "USD" };
  }

  console.error("Could not parse price string:", priceStr);
  return { amount: 0, currencyCode: "USD" };
}

function fetchProductPrice(
  productId: string,
  quantity: number = 1,
): Promise<{ amount: number; formatted: string; currencyCode: string }> {
  return new Promise((resolve, reject) => {
    if (!window.Paddle?.Product?.Prices) {
      reject(new Error("Paddle.Product.Prices not available"));
      return;
    }

    const productIdNumber = parseInt(productId, 10);
    if (isNaN(productIdNumber)) {
      reject(new Error(`Invalid product ID: ${productId} (must be numeric)`));
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error(`Timeout waiting for Paddle price for product ${productIdNumber}`));
    }, PRICE_FETCH_TIMEOUT);

    try {
      window.Paddle.Product.Prices(productIdNumber, quantity, (priceData: PaddleClassicPriceData) => {
        clearTimeout(timeout);
        try {
          if (!priceData?.price?.gross) {
            throw new Error("Invalid price data received from Paddle");
          }
          const { amount, currencyCode } = parsePriceString(priceData.price.gross);
          resolve({
            amount,
            formatted: priceData.price.gross,
            currencyCode,
          });
        } catch (error) {
          console.error("Error parsing product price:", error);
          reject(error);
        }
      });
    } catch (error) {
      clearTimeout(timeout);
      console.error("Error calling Paddle.Product.Prices:", error);
      reject(error);
    }
  });
}

async function fetchProductPriceWithFallback(
  productId: string | undefined,
  tier: PaidTierId,
  frequency: BillingFrequency,
): Promise<LocalizedPrice> {
  if (!productId) {
    return getFallbackPrice(tier, frequency);
  }

  try {
    return await fetchProductPrice(productId, 1);
  } catch (error) {
    console.error(`Failed to fetch ${tier} ${frequency} price:`, error);
    return getFallbackPrice(tier, frequency);
  }
}

export async function fetchLocalizedPrices(): Promise<LocalizedPrices> {
  if (!hasPaddlePricing()) {
    return getFallbackPrices();
  }

  try {
    await initializePaddle();

    if (!window.Paddle) {
      throw new Error("Paddle.js not available");
    }

    const [tandemMonthly, tandemAnnually, premiumMonthly, premiumAnnually] = await Promise.all([
      fetchProductPriceWithFallback(
        paddlePricingConfig.productIds.tandem.monthly,
        "tandem",
        "monthly",
      ),
      fetchProductPriceWithFallback(
        paddlePricingConfig.productIds.tandem.annually,
        "tandem",
        "annually",
      ),
      fetchProductPriceWithFallback(
        paddlePricingConfig.productIds.premium.monthly,
        "premium",
        "monthly",
      ),
      fetchProductPriceWithFallback(
        paddlePricingConfig.productIds.premium.annually,
        "premium",
        "annually",
      ),
    ]);

    return {
      tandem: {
        monthly: tandemMonthly,
        annually: tandemAnnually,
      },
      premium: {
        monthly: premiumMonthly,
        annually: premiumAnnually,
      },
    };
  } catch (error) {
    console.error("Failed to fetch localized prices from Paddle:", error);
    return getFallbackPrices();
  }
}

function getFallbackPrice(tier: PaidTierId, frequency: BillingFrequency): LocalizedPrice {
  const amount = paddlePricingConfig.fallbackPrices[tier][frequency];
  return {
    amount,
    formatted: `${paddlePricingConfig.fallbackCurrency} ${amount.toFixed(2)}`,
    currencyCode: paddlePricingConfig.fallbackCurrency,
  };
}

function getFallbackPrices(): LocalizedPrices {
  return {
    tandem: {
      monthly: getFallbackPrice("tandem", "monthly"),
      annually: getFallbackPrice("tandem", "annually"),
    },
    premium: {
      monthly: getFallbackPrice("premium", "monthly"),
      annually: getFallbackPrice("premium", "annually"),
    },
  };
}
