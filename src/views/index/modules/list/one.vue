<template>
  <section class="obear-one flex-row">
    <div class="obear-one-img">
      <img src="https://gfs17.gomein.net.cn/T1_gLsB5WT1RCvBVdK_240_240.jpg" class="dis-block"/>
    </div>
    <div class="obear-one-content flex-column flex-1">
      <div class="obear-one-content__top flex-1">
        <span class="dis-block">万和(Vanward) JSQ25-13L3 13升 零冷水 咖啡棕 燃气热水器 花洒一开</span>
      </div>
      <div class="obear-one-content__center flex-row flex-1 flex-left flex-middle">
        <div>国美价￥3299</div>
        <div class="flex-1 t-a-right">已团180件</div>
      </div>
      <div class="obear-one-content__bottom flex-row flex-1">
        <div>
          <span>2人团</span>
        </div>
        <div>
          <span>￥3299</span> 
        </div>
        <div class="flex-1 t-a-right">
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
.obear-one
  height $goods-cell-height
  padding $goods-cell-padding
  .obear-one-img
    width $goods-cell-left
    padding-left 20px
    img
      width 200px
      height 200px
  .obear-one-content
    padding 0 20px
    &__top
      span
        font-size $font-size-md * 2
    &__center
      div
        font-size $font-size-md
    &__bottom
      div
        font-size $font-size-md
      div:not(:last-child)
        width 100px
</style>