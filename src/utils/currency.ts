// ISO code to currency symbol mapping (single source of truth)
export const currencyCodeToSymbol: Record<string, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  BRL: "R$",
  JPY: "¥",
  INR: "₹",
  RUB: "₽",
  KRW: "₩",
  ILS: "₪",
  NGN: "₦",
  PKR: "₨",
  VND: "₫",
  CRC: "₡",
  PHP: "₱",
  UAH: "₴",
  KZT: "₸",
  TRY: "₺",
  AZN: "₼",
  GEL: "₾",
  CAD: "C$",
  AUD: "A$",
  NZD: "NZ$",
  SGD: "S$",
  HKD: "HK$",
  CHF: "CHF",
  SEK: "kr",
  NOK: "kr",
  DKK: "kr",
  PLN: "zł",
  CZK: "Kč",
  HUF: "Ft",
  MXN: "$",
  ARS: "$",
  COP: "$",
  CLP: "$",
  THB: "฿",
  TWD: "NT$",
  CNY: "¥",
};

/**
 * Get currency symbol to code mapping (derived from currencyCodeToSymbol)
 * Symbols are sorted by length (longest first) to handle ambiguous symbols like "$"
 */
export const currencySymbolToCode: Record<string, string> = (() => {
  const map: Record<string, string> = {};
  
  // Sort entries by symbol length (longest first) to prioritize specific symbols
  const entries = Object.entries(currencyCodeToSymbol).sort(
    (a, b) => b[1].length - a[1].length
  );
  
  for (const [code, symbol] of entries) {
    // Only add if not already mapped (prioritize first occurrence for ambiguous symbols)
    if (!map[symbol]) {
      map[symbol] = code;
    }
  }
  
  // Add special cases for common ambiguous symbols
  // "$" defaults to USD, but we keep it for backward compatibility
  if (!map["$"]) {
    map["$"] = "USD";
  }
  
  return map;
})();

/**
 * Get currency symbol from ISO currency code
 * @param currencyCode - ISO 4217 currency code (e.g., "USD", "EUR", "BRL")
 * @returns Currency symbol (e.g., "$", "€", "R$") or the code itself if not found
 */
export function getCurrencySymbol(currencyCode: string): string {
  return currencyCodeToSymbol[currencyCode] || currencyCode;
}
