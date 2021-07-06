<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide v-for="(img,i) in imgs" :key="i">
          <img :src="img"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </swiper>
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-contol" @tabClick="tabClick"></tab-control>
      <goods-disp :goods="showGooods"></goods-disp>
      <ul>
        <li>测试1</li>
        <li>测试2</li>
        <li>测试3</li>
        <li>测试4</li>
        <li>测试5</li>
        <li>测试6</li>
        <li>测试7</li>
        <li>测试8</li>
        <li>测试9</li>
        <li>测试10</li>
        <li>测试11</li>
        <li>测试12</li>
        <li>测试13</li>
        <li>测试14</li>
        <li>测试15</li>
        <li>测试16</li>
        <li>测试17</li>
        <li>测试18</li>
        <li>测试19</li>
        <li>测试20</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from "@components/common/navbar/NavBar";
  // import {getHomeMultidata} from '@api/home'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import FeatureView from "./comps/FeatureView";
  import TabControl from "@components/content/tabControl/TabControl";
  import GoodsDisp from "../../components/content/goods/GoodsDisp";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  export default {
    name: 'Home',
    components: {
      GoodsDisp,
      TabControl,
      FeatureView,
      NavBar,
      swiper,
      swiperSlide,
      BackTop,
      Scroll
    },
    computed: {
      showGooods() {
        return this.goods[this.currentType].list
      }
    },
    data() {
      return {
        result: null,
        titles: ['流行', '新款', '精选'],
        currentType: 'pop',
        isShowBackTop: false,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          }
        },
        imgs: [
          "https://hbimg.huabanimg.com/a84ec58661bc95efb974e2eebea2b3fd880a8fb12870a-ksYmbV_fw658",
          "https://cli.clewm.net/file/2015/01/20/81b71bc509d09368d4602a4b5b05d093.jpg",
          "https://hbimg.huabanimg.com/a84ec58661bc95efb974e2eebea2b3fd880a8fb12870a-ksYmbV_fw658",
          "https://cli.clewm.net/file/2015/01/20/81b71bc509d09368d4602a4b5b05d093.jpg",
        ],
        goods: {
          'pop': {
            page: 0,
            list: [{
              img: require('@assets/img/home/1.png'),
              title: '女士美装1',
              price: 129.00
            }, {
              img: require('@assets/img/home/2.png'),
              title: '女士美装2',
              price: 129.00
            }, {
              img: require('@assets/img/home/3.png'),
              title: '女士美装3',
              price: 129.00
            }, {
              img: require('@assets/img/home/4.png'),
              title: '女士美装4',
              price: 129.00
            }, {
              img: require('@assets/img/home/3.png'),
              title: '女士美装3',
              price: 129.00
            }, {img: require('@assets/img/home/4.png'), title: '女士美装4', price: 129.00}]
          },
          'news': {
            page: 1,
            list: [{img: require('@assets/img/home/2.png'), title: '女士美装1'}, {
              img: '@assets/img/home/1.png',
              title: '女士美装2'
            }, {img: '@assets/img/home/3.png', title: '女士美装3'}, {img: '@assets/img/home/4.png', title: '女士美装4'}]
          },
          'sells': {
            page: 2,
            list: [{img: require('@assets/img/home/3.png'), title: '女士美装1'}, {
              img: '@assets/img/home/2.png',
              title: '女士美装2'
            }, {img: '@assets/img/home/1.png', title: '女士美装3'}, {img: '@assets/img/home/4.png', title: '女士美装4'}]
          },
        }
      }
    },
    created() {
      // getHomeMultidata.then(res=>{
      //   this.result=res.data
      //
      // })
    },
    methods: {
      callback() {

      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 500
      },
      tabClick(index) {
        console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'news';
            break;
          case 2: {
            this.currentType = 'sells';
            break;
          }
        }

        console.log(this.currentType)
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh; /*视口高度*/
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
  }

  .swiper-container {
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33; /* 两种都可以 */
  }

  img {
    width: 100%;
    height: 200px;
  }

  .tab-contol {
    position: sticky; /*使用bettersroller后不起作用了*/
    top: 44px;
    z-index: 9;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
