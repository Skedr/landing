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

  const loadHelpScout = () => {
    !(function (e, t, n) {
      function a() {
        var e = t.getElementsByTagName("script")[0],
          n = t.createElement("script")
        ;(n.type = "text/javascript"),
          (n.async = !0),
          (n.src = "https://beacon-v2.helpscout.net"),
          e.parentNode.insertBefore(n, e)
      }
      if (
        ((e.Beacon = n =
          function (t, n, a) {
            e.Beacon.readyQueue.push({ method: t, options: n, data: a })
          }),
        (n.readyQueue = []),
        "complete" === t.readyState)
      )
        return a()
      e.attachEvent ? e.attachEvent("onload", a) : e.addEventListener("load", a, !1)
    })(window, document, window.Beacon || function () {})
  }

  export default defineComponent({
    setup() {
      const route = useRoute()
      loadHelpScout()
      window.Beacon("init", "9d640825-f226-46b1-9a92-dbed14392554")
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
          }
        ]
      })
    }
  })
</script>
