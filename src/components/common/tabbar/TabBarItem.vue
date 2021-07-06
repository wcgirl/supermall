<template>
<div class="tab-bar-item"  @click="clickItem">
  <div v-if="!isActive">
  <slot  name="item-icon"></slot>
  </div>
  <div v-else>
  <slot name="item-icon-active"></slot>
  </div>
  <div :style="activeStyle">
  <slot  name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }

  },
  methods: {
    clickItem () {
      console.log(this.path)
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width:30px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle; /*属性设置元素的垂直对齐方式。取消默认3px*/
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>
