<template>
    <div class="goods">
      <goods-item  v-for="(item,index) in goods" :key="index" :goodsItem="item">
      </goods-item>
    </div>
</template>

<script>
    import GoodsItem from "./GoodsItem";
    export default {
        name: "GoodsDisp",
      components: {GoodsItem},
      props:{
          goods:{
            type:Array,
            default(){
              return []
            }
          }
      },
      mounted() {
          console.log(this.goods)
      }
    }
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
</style>
