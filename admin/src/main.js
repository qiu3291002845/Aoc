import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

Vue.config.productionTip = false;

// 导入 axios
import axios from "axios";

// 默认配置 axios
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://localhost:3000/admin/api";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
