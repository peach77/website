
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import HomePage  from './src/components/HomePage';
import Products  from './src/components/Products';
import Solution from './src/components/Solution';
import Cooperation from './src/components/Cooperation';
import AboutUs from './src/components/AboutUs';
import FreshMachine from './src/components/FreshMachine';
import GetMedicine from './src/components/GetMedicine';
import Balloon from './src/components/Balloon';
import CottonCandy from './src/components/CottonCandy';
import SpaceTimeBall from './src/components/SpaceTimeBall'
import RollCar from './src/components/RollCar';
import OEM from './src/components/OEM';
import ODM from './src/components/ODM';
import Resource from './src/components/Resource';
import SupplyChains from './src/components/SupplyChains';
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/',component:HomePage},
    {path:'/Products',component:Products,
    children: [
        {
          path: '/Products/FreshMachine',
          component: FreshMachine
        },
        {
            path: '/Products/GetMedicine',
            component: GetMedicine
        },
        {
            path: '/Products/Balloon',
            component: Balloon
        },
        {
            path: '/Products/CottonCandy',
            component:CottonCandy
        },
        {
            path: '/Products/SpaceTimeBall',
            component:SpaceTimeBall
        },
        {
            path: '/Products/RollCar',
            component:RollCar
        }
      ]},
    {path:'/Solution',component:Solution,
    children: [
        {
          path: '/Solution/OEM',
          component: OEM
        },
        {
            path: '/Solution/ODM',
            component: ODM
        },
        {
            path: '/Solution/Resource',
            component: Resource
        },
        {
            path: '/Solution/SupplyChains',
            component:SupplyChains
        }
       
      ]},
    {path:'/Cooperation',component:Cooperation},
    {path:'/AboutUs',component:AboutUs}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router