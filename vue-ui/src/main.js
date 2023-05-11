import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Button from "@/components/Button/button";
const app = createApp(App);
app.component("Button", Button);
app.use(store).use(router).mount("#app");
