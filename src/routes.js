import Home from "./views/Home.vue"
import Pricing from "./views/Pricing.vue"
import HowItWorks from "./views/HowItWorks.vue"

import HeaderHome from "./components/headers/HeaderHome.vue"
import HeaderPricing from "./components/headers/HeaderPricing.vue"
import HeaderHowItWorks from "./components/headers/HeaderHowitWorks.vue"

export const routes = [
  { path: "/", name: "home", components: { default: Home, header: HeaderHome } },
  { path: "/pricing", name: "pricing", components: { default: Pricing, header: HeaderPricing } },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    components: { default: HowItWorks, header: HeaderHowItWorks }
  }
  // { path: "/faq", name: "faq", components: { default: Home, main } }
]
