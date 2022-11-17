import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import eslintPlugin from "vite-plugin-eslint"
import viteImagemin from "vite-plugin-imagemin"

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  ssgOptions: {
    format: "cjs"
  },
  plugins: [
    vue({
      template: {
        ssr: true,
        compilerOptions: {
          directiveTransforms: {
            lazy: ssrTransformCustomDir
          }
        }
      }
    }),
    Components({}),
    eslintPlugin(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ]
})
