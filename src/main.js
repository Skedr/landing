import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "./index.css"
import { routes } from "./routes"
import VueGtag from "vue-gtag"

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
  }
)
