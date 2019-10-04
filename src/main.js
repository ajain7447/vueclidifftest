import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.put["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common.accept = "application/json";
axios.defaults.headers.post["X-Requested-With"] = "XMLHttpRequest";
const baseUrl = env => {
  if (env === "development") {
    return (axios.defaults.baseURL = "https://api.getaiwifi.com/api/v1");
  }

  if (env === "staging") {
    return (axios.defaults.baseURL = "https://api.getaiwifi.com/api/v1");
  }

  return (axios.defaults.baseURL = "https://api.getaiwifi.com/api/v1");
};
baseUrl(process.env.NODE_ENV);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
