import { createApp } from "vue"
import { createPinia } from "pinia"
import router from "./router"
import App from "./App.vue"
import "@/assets/css/style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount("#app")
AOS.init({
  duration: 800,
  easing: 'ease-in-out', 
  once: false,
});