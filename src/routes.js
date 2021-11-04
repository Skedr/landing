import Home from "./Views/Home.vue"
import Pricing from "./Views/Pricing.vue"

import HomeMain from "./components/HomeMain.vue"
import PricingMain from "./components/PricingMain.vue"

export const routes = [
  { path: "/", name: "home", components: { default: Home, main: HomeMain } },
  { path: "/pricing", name: "pricing", components: { default: Pricing, main: PricingMain } }
  // { path: "/how-it-works", name: "howitworks", components: { default: Home, main } },
  // { path: "/faq", name: "faq", components: { default: Home, main } }
]
