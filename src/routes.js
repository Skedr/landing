import Home from "./views/Home.vue"
import Pricing from "./views/Pricing.vue"
import HowItWorks from "./views/HowItWorks.vue"
import Faq from "./views/Faq.vue"

import HeaderHome from "./components/headers/HeaderHome.vue"
import HeaderPricing from "./components/headers/HeaderPricing.vue"
import HeaderHowItWorks from "./components/headers/HeaderHowitWorks.vue"
import HeaderFaq from "./components/headers/HeaderFaq.vue"

export const routes = [
  {
    path: "/",
    name: "home",
    components: { default: Home, header: HeaderHome },
    meta: {
      title: "Automated sharing and scheduling for Flickr Groups",
      description: "Skedr helps you spend less time sharing photos to Flickr groups."
    }
  },
  {
    path: "/pricing",
    name: "pricing",
    components: { default: Pricing, header: HeaderPricing },
    meta: { title: "Pricing", description: '' }
  },
  {
    path: "/how-it-works",
    name: "HowItWorks",
    components: { default: HowItWorks, header: HeaderHowItWorks },
    meta: {
      title: "Group tagging",
      description: "Sharing images into your prefered groups from Flickr is really easy."
    }
  },
  {
    path: "/faq",
    name: "faq",
    components: { default: Faq, header: HeaderFaq },
    meta: {
      title: "Frequently Asked Questions - Skedr.io",
      description: "Answers to common questions about Skedr.io for Flickr."
    }
  }
]
