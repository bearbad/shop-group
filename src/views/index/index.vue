<template>
  <section class="obear-index">
    <swipe-index></swipe-index>
    <grid-index></grid-index>
    <one></one>
    <mult></mult>
    <!-- <div class="obear-index-div">
      <span class="obear-index-span">{{ msg }}</span>
    </div>
    <van-button type="warning">警告按钮</van-button> -->
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { getIndex } from "@/api/test";
import mixin from "./mixins/mixin";

import SwipeIndex from "./modules/swipe/index.vue";
import GridIndex from "./modules/grid/index.vue";
import One from "./modules/list/one.vue";
import Mult from "./modules/list/mult.vue";
@Component({
  components: {
    SwipeIndex,
    GridIndex,
    One,
    Mult
  }
})
export default class Index extends mixins(mixin) {
  @Provide() msg: string = "Welcome to Your Vue.js App";

  get computedMsg() {
    return "computed" + this.msg;
  }

  add(x: number): number {
    console.log(x);

    return x + 100;
  }

  mounted() {
    this.add(100);
    getIndex().then((res: any) => {
      console.log(res);
    });
  }
}
</script>
<style lang="stylus">
@import '~@/assets/css/comm.styl';
</style>
