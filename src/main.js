import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import router from "./router";
Vue.config.productionTip = false
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  render: h => h(App),router,
}).$mount('#app')
