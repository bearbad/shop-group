import Vue from "vue";
import App from "./index.vue";

import "normalize.css";

import { Button, Swipe, SwipeItem, Lazyload, Grid, GridItem } from "vant";
Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload).use(Grid).use(GridItem);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
