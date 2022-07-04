import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // github pages uses docs dir from the root of the repository
    outDir: "docs"
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconResolver({
          prefix: false,
          enabledCollections: ["mdi"]
        })
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    extensions: [".vue", ".js", ".scss"]
  }
})
