<template>
  <section>
    <div class="item" v-for="item in list" :key="item.label"> 
      <span class="label">{{item.label}}</span>:
      <span class="value">{{item.value}}</span>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({})
export default class example extends Vue {
  list: Array<any> = [{
    label: '姓名',
    value: '张三'
  }, {
    label: '出生日期',
    value: '1997-1-1' 
  }, {
    label: '爱好',
    value: '唱歌'
  }];
}
</script>
<style lang="stylus" scoped>
.item
  height 32px
  line-height 32px
  margin-bottom 8px
  .label
    display inline-block
    height 100%
    width 150px
    text-align justify
    vertical-align top
    text-align-last justify
    // &::after
    //  display inline-block
    //  width 100%
    //  content ''
    //  height 0
  .value
    padding-right 10px
</style>