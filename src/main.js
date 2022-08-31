import moment from "moment"
import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "@/App"
import router from "@/router"

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.window = window
app.config.globalProperties.$moment = moment

app.use(pinia)
app.use(router)
app.mount("#app")
