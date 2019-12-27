import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

Vue.filter("preetyBool", value => {
  return value ? "Yes" : "No";
})

new Vue({
  render: h => h(App),
}).$mount("#app")
