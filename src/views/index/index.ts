import Vue from "vue";
import App from "./index.vue";

import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
