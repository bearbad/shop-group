import Vue from "vue";
import App from "./index.vue";

import "normalize.css";

import { Button, Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
