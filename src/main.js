import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "./index.css"
import { routes } from "./routes"
import VueGtag from "vue-gtag"
import { createGtm } from "@gtm-support/vue-gtm"
//import VueHotjar from "vue-hotjar-next"

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    }
  },
  ({ app, router }) => {
    app.use(
      VueGtag,
      {
        config: {
          id: import.meta.env.VITE_GTAG
        }
      },
      router
    )

    app.use(
      createGtm({
        id: import.meta.env.VITE_GTM,
        defer: true,
        compatibility: false,
        enabled: true,
        debug: import.meta.env.DEV,
        loadScript: import.meta.env.PROD,
        vueRouter: router,
        trackOnNextTick: false
      })
    )

    // app.use(VueHotjar, {
    //   id: import.meta.env.VITE_HOTJAR_ID,
    //   isProduction: import.meta.env.PROD
    // })
  }
)
