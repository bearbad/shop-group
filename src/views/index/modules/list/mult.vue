<template>
  <section class="obear-mult flex-row">
    <div class="m-column" v-for="item in list" :key="item">
      <div class="m-column-item">
        <div class="m-column-item__content">1</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({})
export default class mult extends Vue {
  list: Array<any> = [{}, {}, {}, {}]
}
</script>
<style lang="stylus" scoped>
.m-column
  width calc(100%/2)
  height 300px
  background-color red
</style>