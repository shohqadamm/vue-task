import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/tailwind.css";
import "./assets/animate.css";
const app = createApp(App);
app.use(router, Icon);
app.use(VueApexCharts);
app.mount("#app");
app.use(VueAxios, axios);
