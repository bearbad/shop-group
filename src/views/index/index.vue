<template>
  <section>
    {{ msg }} - {{ computedMsg }}
  </section>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})

export default class Index extends Vue {
  @Provide() msg: string = 'Welcome to Your Vue.js App'

  get computedMsg () {
    return 'computed' + this.msg
  }

  add (x: number): number {
    console.log(x)

    return x + 100
  }

  mounted () {
    this.add(100)
  }
}
</script>
<style lang="stylus">
</style>
