import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"

import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes
})

import { createHead } from "@vueuse/head"

const app = createApp(App)

app.use(createHead())
app.use(router)
app.mount("#app")
