<template>
  <section class="obear-index">
    <div class="obear-index-div">
      <span class="obear-index-span">{{ msg }}</span>
    </div>
    <van-button type="warning">警告按钮</van-button>
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Index extends Vue {
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
  }
}
</script>
<style lang="stylus">
.obear-index-div
  background-color red
  width 375px
  height 100px
.obear-index-span
  color white
  font-size 14px
</style>
