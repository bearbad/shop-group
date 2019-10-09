<template>
  <section class="obear-one flex-row">
    <div class="obear-one-img">
      <img src="https://gfs17.gomein.net.cn/T1_gLsB5WT1RCvBVdK_240_240.jpg" />
    </div>
    <div class="obear-one-content flex-column">
      <div class="obear-one-content__top">
        <span>万和(Vanward) JSQ25-13L3 13升 零冷水 咖啡棕 燃气热水器 花洒一开 热水即来</span>
      </div>
      <div class="obear-one-content__center flex-row">
        <div>国美价￥3299</div>
        <div>已团180件</div>
      </div>
      <div class="obear-one-content__bottom flex-row">
        <div>
          <span>2人团</span>
        </div>
        <div>
          <span>￥3299</span> 
        </div>
        <div>
          <span>马上抢</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/css/comm.styl';
.obear-one
  height $goods-cell-height
  padding $goods-cell-padding
  background-color $goods-background-color
  .obear-one-img
    width $goods-cell-left
    padding-left 20px
    background-color red
    img
      display block
      width 200px
      height 200px
  .obear-one-content
    flex 1
    padding 0 20px
    background-color blue
    &__top
      flex 1
      background-color red
      span
        display block
        font-size 14px
    &__center
      flex 1
      background-color green 
      align-items center
      justify-content flex-start
      div
        background-color orange
        font-size 14px
      div:last-child
        flex 1
        text-align right 
    &__bottom
      background-color red
      flex 1
      div
        background-color orange
        font-size 14px
      div:not(:last-child)
        width 100px
      div:last-child
        flex 1
        text-align right 
</style>