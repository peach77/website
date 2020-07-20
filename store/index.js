import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    
    state:{
        name:'homepage',
        Anchor:'parameter',
        imgList: [
            {id: 0,url:require('../src/assets/shoutu1.jpg')},
            {id: 1,url:require('../src/assets/shoutu2.jpg')},
            {id: 2,url:require('../src/assets/shoutu3.jpg')}
          ],
          productList:[
              {id:10,url:require('../src/assets/fangunche.png'),path:'/Products/GetMedicine'},
              {id:12,url:require('../src/assets/qiqiu.png'),path:'/Products/GetMedicine'},
              {id:13,url:require('../src/assets/shengxianji.png'),path:'/Products/GetMedicine'},
              {id:14,url:require('../src/assets/yao.png'),path:'/Products/GetMedicine'},
              {id:15,url:require('../src/assets/shikongqiu.png'),path:'/Products/GetMedicine'},
              {id:11,url:require('../src/assets/mianhuatang.png'),path:'/Products/GetMedicine'},

          ]
      
 
    },
    mutations:{
        //es6语法，等同edit:funcion(){...}
        ChangeTheNavigation(state,n){
            state.name = n
        },
        Anchor(state,n){
            console.log(123);
            state.Anchor=n
        }
    }
})

export default store