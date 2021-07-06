<template>
<div class="good-item">
<img  :src="goodsItem.img" />
  <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <span class="price">{{goodsItem.price}}</span>
    <span class="collect">1</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "GoodsItem",
        props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      mounted() {
          console.log(this.goodsItem.img)
      }
    }
</script>

<style scoped>
.good-item{
  padding-bottom: 40px;
  width: 48%;
  text-align: center;
  position: relative;
}
.good-item img{
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left:0;
  right:0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;


}
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  /*background: url("~assets/img/common/collect.svg") 0 0/14px 14px;*/
}
</style>
