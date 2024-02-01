export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("./views/HomePage.vue"),
      header: () => import("./components/headers/HeaderHome.astro")
    },
    
  },
  {
    path: "/pricing",
    name: "pricing",
    components: {
      default: () => import("./pages/PricingPage.vue"),
      header: () => import("./components/headers/HeaderPricing.astro")
    },
    
  },
  {
    path: "/features",
    name: "features",
    components: {
      default: () => import("./views/FeaturesPage.vue"),
      header: () => import("././components/headers/HeaderFeatures.vue")
    },
    
  },
  {
    path: "/faq",
    name: "faq",
    components: {
      default: () => import("./views/FaqPage.vue"),
      header: () => import("./components/headers/HeaderFaq.vue")
    },
    
  },
  {
    path: "/privacy-policy",
    name: "privacy",
    components: {
      default: () => import("./views/PrivacyPolicyPage.vue"),
      header: () => import("./components/headers/HeaderPrivacyPolicy.astro")
    },
  },
  {
    path: "/terms-and-conditions",
    name: "terms",
    components: {
      default: () => import("./views/TermsAndConditionsPage.vue"),
      header: () => import("./components/headers/HeaderTermsAndConditions.vue")
    },
    
  },
  {
    path: "/articles/group-tagging",
    name: "tags",
    components: {
      default: () => import("./views/TagsPage.vue"),
      header: () => import("./components/headers/HeaderTags.vue")
    }
  },
  {
    path: "/articles/share-single-photo",
    redirect: "/features"
  }
]
