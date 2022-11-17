export const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: () => import("./views/HomePage.vue"),
      header: () => import("./components/headers/HeaderHome.vue")
    },
    meta: {
      title: "Automated sharing and scheduling for Flickr Groups",
      description: "Skedr helps you spend less time sharing photos to Flickr groups."
    }
  },
  {
    path: "/pricing",
    name: "pricing",
    components: {
      default: () => import("./views/PricingPage.vue"),
      header: () => import("./components/headers/HeaderPricing.vue")
    },
    meta: {
      title: "Pricing for Skedr.io",
      description:
        "Skedr.io you will save hundreds of hours of sharing your photos to differents groups"
    }
  },
  {
    path: "/features",
    name: "features",
    components: {
      default: () => import("./views/FeaturesPage.vue"),
      header: () => import("././components/headers/HeaderFeatures.vue")
    },
    meta: {
      title: "Features of Skedr.io",
      description: "Learn how Skedr.io helps you share your photos more easily"
    }
  },
  {
    path: "/faq",
    name: "faq",
    components: {
      default: () => import("./views/FaqPage.vue"),
      header: () => import("./components/headers/HeaderFaq.vue")
    },
    meta: {
      title: "Frequently Asked Questions - Skedr.io",
      description: "Answers to common questions about Skedr.io for Flickr."
    }
  },
  {
    path: "/privacy-policy",
    name: "privacy",
    components: {
      default: () => import("./views/PrivacyPolicyPage.vue"),
      header: () => import("./components/headers/HeaderPrivacyPolicy.vue")
    },
    meta: { title: "Privacy Policy - Skedr.io", description: "Privacy Policy for Skedr.io" }
  },
  {
    path: "/terms-and-conditions",
    name: "terms",
    components: {
      default: () => import("./views/TermsAndConditionsPage.vue"),
      header: () => import("./components/headers/HeaderTermsAndConditions.vue")
    },
    meta: {
      title: "Terms and Conditions - Skedr.io",
      description: "Terms and Conditions for Skedr.io"
    }
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
