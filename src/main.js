import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "@/App"
import router from "@/router"

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.window = window

app.use(pinia)
app.use(router)
app.mount("#app")
