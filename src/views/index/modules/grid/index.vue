<template>
  <section>
    <van-grid :column-num="columnNumber">
      <van-grid-item
        v-for="item in list"
        :key="item.text"
        :icon="item.icon"
        :text="item.text"
      />
    </van-grid>
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({})
export default class GridIndex extends Vue {
  splitNum: number = 5;
  list: Array<any> = [{
      icon: "https://gfs14.gomein.net.cn/T1BRVyByL_1RCvBVdK.gif",
      text: "爆款秒杀"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1NXEyBsbT1RCvBVdK.png",
      text: "9.9包邮"
    },
    {
      icon: "https://gfs16.gomein.net.cn/T1bfCXB7ET1RCvBVdK.png",
      text: "签到"
    },
    {
      icon: "https://gfs16.gomein.net.cn/T1YQYXBQVT1RCvBVdK.png",
      text: "家电服务"
    },
    {
      icon: "https://gfs16.gomein.net.cn/T1YqdXB4Ev1RCvBVdK.png",
      text: "家电甄选"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1l1AXB4Yg1RCvBVdK.png",
      text: "3C数码"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1l1AXB4Yg1RCvBVdK.png",
      text: "3C数码"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1l1AXB4Yg1RCvBVdK.png",
      text: "3C数码"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1l1AXB4Yg1RCvBVdK.png",
      text: "3C数码"
    },
    {
      icon: "https://gfs15.gomein.net.cn/T1l1AXB4Yg1RCvBVdK.png",
      text: "3C数码"
    }
  ];
  
  get columnNumber() {
    let arrCount = this.list.length;
    if (arrCount <= this.splitNum) {
      return arrCount;
    } else {
      return Math.ceil(arrCount / Math.ceil(this.list.length / this.splitNum));
    }
  }

}
</script>
<style lang="stylus" scoped>

</style>