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
              {id:10,url:require('../src/assets/fangunche.png'),path:'/Products/GetMedicine',name:'智能翻滚车',suger:'让快乐，翻来覆去！'},
              {id:12,url:require('../src/assets/qiqiu.png'),path:'/Products/GetMedicine',name:'无人气球机',suger:'把烦恼，都吹进气球里吧'},
              {id:13,url:require('../src/assets/shengxianji.png'),path:'/Products/GetMedicine',name:'无人生鲜机',suger:'储存生鲜，传递美好'},
              {id:14,url:require('../src/assets/yao.png'),path:'/Products/GetMedicine',name:'智能取药机',suger:'智慧医药，让生活有更多可能'},
              {id:15,url:require('../src/assets/shikongqiu.png'),path:'/Products/GetMedicine',name:'智能时空球',suger:'趣云，带你穿越时空'},
              {id:11,url:require('../src/assets/mianhuatang.png'),path:'/Products/GetMedicine',name:'无人棉花糖机',suger:'吃糖，不分年纪！'},

          ],
          model:true,
          switch:'one'
      
 
    },
    mutations:{
        //es6语法，等同edit:funcion(){...}
        ChangeTheNavigation(state,n){
            state.name = n
        },
        Anchor(state,n){
            
            state.Anchor=n
        },
        ChangeModel(state,n){
            console.log(n);
            state.model=n
        },
        BtnSwitch(state,n){
            state.switch=n
        }
    }
})

export default store