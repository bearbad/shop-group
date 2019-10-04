import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "mixin"
})
export default class extends Vue {

  mounted () {
    console.log("this is mixin in mounted");
  }

  beforeDestory () {
    console.log("this is mixin in beforeDestory"); 
  }
}