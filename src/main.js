import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "./index.css"
import { routes } from "./routes"

export const createApp = ViteSSG(App, { routes })
