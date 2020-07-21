import Vue from 'vue'
import App from './App.vue'
import router from '../router' 
import '../commen.css'
import store from '../store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel, } from 'element-ui';
Vue.use(ElementUI);
Vue.use(Carousel,)


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



  router.beforeEach((to, from, next) => {  

    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    // window.pageYOffset = 0
    next()
  })
  



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
