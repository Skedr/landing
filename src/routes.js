//import Home from "./views/Home.vue"
const Home = () => import("./views/Home.vue")
const Pricing = () => import("./views/Pricing.vue")
const Features = () => import("./views/Features.vue")
const Faq = () => import("./views/Faq.vue")
const Privacy = () => import("./views/PrivacyPolicy.vue")
const Terms = () => import("./views/TermsAndConditions.vue")

const HeaderHome = () => import("./components/headers/HeaderHome.vue")
const HeaderPricing = () => import("./components/headers/HeaderPricing.vue")
const HeaderFeatures = () => import("././components/headers/HeaderFeatures.vue")
const HeaderFaq = () => import("./components/headers/HeaderFaq.vue")
const HeaderPrivacy = () => import("./components/headers/HeaderPrivacyPolicy.vue")
const HeaderTerms = () => import("./components/headers/HeaderTermsAndConditions.vue")

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
    meta: { title: "Pricing for Skedr.io", description: "Skedr.io you will save hundreds of hours of sharing your photos to differents groups" }
  },
  {
    path: "/features",
    name: "features",
    components: { default: Features, header: HeaderFeatures },
    meta: {
      title: "Features of Skedr.io",
      description: "Learn how Skedr.io helps you share your photos more easyly"
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
  },
  {
    path: "/privacy-policy",
    name: "privacy",
    components: { default: Privacy, header: HeaderPrivacy },
    meta: { title: "Privacy Policy - Skedr.io", description: "Privacy Policy for Skedr.io" }
  },
  {
    path: "/terms-and-conditions",
    name: "terms",
    components: { default: Terms, header: HeaderTerms },
    meta: {
      title: "Terms and Conditions - Skedr.io",
      description: "Terms and Conditions for Skedr.io"
    }
  },
  {
    path: "/articles/group-tagging",
    redirect: "/features"
  },
  {
    path: "/articles/share-single-photo",
    redirect: "/features"
  }
]
