import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/stores/counter'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/router'
import './assets/main.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
const app = createApp(App)

// 引入element组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
    console.log(key)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(mavonEditor)
app.mount('#app')
