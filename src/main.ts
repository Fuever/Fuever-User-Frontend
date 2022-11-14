import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/element/index.scss";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// 引入element组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
  console.log(key);
}

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
