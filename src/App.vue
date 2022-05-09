<template>
  <the-header>
    <router-view name="header" />
  </the-header>
  <router-view />
  <the-footer />
</template>

<script>
  import { defineComponent, computed } from "vue"
  import { useHead } from "@vueuse/head"
  import { useRoute } from "vue-router"
  import loadHelpScout from "./lib/helpScout"

  export default defineComponent({
    setup() {
      const route = useRoute()

      loadHelpScout()

      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: `description`,
            content: computed(() => route.meta.description)
          },
          {
            name: "image",
            content: "https://skedr.io/screenshot.png"
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            property: "og:url",
            content: computed(() => "https://skedr.io" + route.path)
          },
          {
            property: "og:title",
            content: computed(() => route.meta.title)
          },
          {
            property: "og:description",
            content: computed(() => route.meta.description)
          },
          {
            property: "og:image",
            content: "https://skedr.io/screenshot.png"
          },
          {
            property: "twitter:card",
            content: "summary_large_image"
          }
        ]
      })
    }
  })
</script>
