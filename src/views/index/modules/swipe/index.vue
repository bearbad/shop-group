<template>
  <section class="gm-swipe">
    <van-swipe :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
  </section>
</template>
<script>
export default {
  data () {
    return {
      images: [
        "http://gfs16.gomein.net.cn/T1HRKyBbL_1RCvBVdK.jpg",
        "http://gfs14.gomein.net.cn/T1_YVXBg_T1RCvBVdK.jpg",
        "http://gfs16.gomein.net.cn/T14FJyBvbT1RCvBVdK.jpg",
        "http://gfs16.gomein.net.cn/T1_YWXBKWv1RCvBVdK.jpg"
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.gm-swipe
  height 280px
  img
    display block
    width 750px
</style>