import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).use(VueAwesomePaginate).mount('#app')