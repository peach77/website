import Vue from 'vue'
import App from './App.vue'
import router from '../router' 
import '../commen.css'
import store from '../store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/swiper.css'
import '../node_modules/swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
