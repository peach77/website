import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        name:'homepage'
    },
    mutations:{
        //es6语法，等同edit:funcion(){...}
        ChangeTheNavigation(state,n){
            state.name = n
        }
    }
})

export default store