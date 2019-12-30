import Vue from "vue";
import App from "./App.vue";
import store from "./store/store.js";

Vue.config.productionTip = false;

Vue.filter("preetyBool", value => {
  return value ? "Yes" : "No"
});

new Vue({
  store,
  render: h => h(App),
}).$mount("#app");
