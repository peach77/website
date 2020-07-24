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
          switch:'one',
          text:'',
          tel:'',
          textarea:'',
          news:[
              {id:'asxc',date:'2020-05-29',title:'秦皇岛市政府扶持趣云无人设备全面落地港城',article:'近期，秦皇岛市杨铁林副市长、市旅游和文化广电局李文生书记、市科技局郭拥军局长等领导与趣云科技董事长韩晓虎先生针对趣云科技线下物联网无人值守设备在本市的铺设进行座谈。',url:require('../src/assets/xinwentupian.png')},
              {id:'asxsdc',date:'2020-05-29',title:'新飞跃：趣云科技受到政府扶持全速发展！',article:'5月14日上午，秦皇岛市政府孙国胜副市长、张仕民副秘书长、秦皇岛银行张宏伟行长一行莅临秦皇岛趣云科技有限公司参观指导工作，公司董事长韩晓虎、总经理刘金国等领导热情接待，并陪同考察！',url:require('../src/assets/PIC@2x.png')},
              {id:'aq5ssaxc',date:'2020-05-29',title:'智能生鲜售卖机首现廊坊小区，最新购物体验你想来试试吗？',article:'五一小长假，有人周边游，有人家里瘫，趣云联不停歇。赶在五一小长假高峰期给予客户开业活动支持，另附一份安装后社区居民新鲜的体验报告。',url:require('../src/assets/pic3x.png')},
              {id:'as535xc',date:'2020-05-29',title:'重磅：趣云科技无人新零售获政府认可支持！',article:'近期，秦皇岛市杨铁林副市长、市旅游和文化广电局李文生书记、市科技局郭拥军局长等领导与趣云科技董事长韩晓虎先生针对趣云科技线下物联网无人值守设备在本市的铺设进行座谈。',url:require('../src/assets/pic4.png')},
              {id:'a555sxc',date:'2020-05-29',title:'张瑞书市长一行考察趣云科技项目，对趣云联果蔬机、气球机、棉花糖机给予高度肯定！',article:'4月9日上午，张瑞书市长、杨铁林市长到北岛博智孵化器对企业复工复产及2020春季创投项目进行调研指导。他强调，国内新冠疫情已经得到有效控制，当下要加快全市经济全面复苏，坚定不移实现今年全市经济社会...',url:require('../src/assets/pic5.png')}
            
          ]
          ,
          ceshi:[]

      
 
    },

    mutations:{
   
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