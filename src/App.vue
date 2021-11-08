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

  export default defineComponent({
    setup() {
      const route = useRoute()

      useHead({
        title: computed(() => route.meta.title),
        meta: [
          {
            name: `description`,
            content: computed(() => route.meta.description)
          },
          {
            name: "image",
            content: 'https://skedr.io/screenshot.png'
          }
        ]
      })
    }
  })
</script>
