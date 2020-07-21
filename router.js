
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import HomePage from './src/components/HomePage';
import Products from './src/components/Products';
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
import CompanyNews from './src/components/CompanyNews';
import CompanyProfile from './src/components/CompanyProfile';
import CorporateCulture from './src/components/CorporateCulture';
import Honour from './src/components/Honour';
import DetailedFreshMachine from './src/components/DetailedFreshMachine'
import DetailedGetMedicine from './src/components/DetailedGetMedicine'
import DetailedBalloon from './src/components/DetailedBalloon'
import DetailedCotton from './src/components/DetailedCotton'
import DetailedSpaceBall from './src/components/DetailedSpaceBall'
import DetailedRollCar from './src/components/DetailedRollCar'
// import BigNews from './src/components/BigNews'

const routes = [

    //单个路由均为对象类型，path代表的是路径，component代表组件
    { path: '/', component: HomePage, },
    {
        path: '/CompanyNews', component: CompanyNews,
        // children:[{
        //     path:'/CompanyNews/BigNews',
        //     component:BigNews,
        //     name:'BigNews'
        // }]
    },
    {
        path: '/Products', component: Products, name: 'Products',
        children: [
            {
                path: '/Products/FreshMachine',
                component: FreshMachine,
                name: 'FreshMachine',
                children: [
                    {
                        path: 'DetailedFreshMachine',
                        component: DetailedFreshMachine
                    }

                ]
            },
            {
                path: 'GetMedicine',
                component: GetMedicine,
                children: [
                    {
                        path: 'DetailedGetMedicine',
                        component: DetailedGetMedicine
                    }

                ]
            },
            {
                path: 'Balloon',
                component: Balloon,
                children: [
                    {
                        path: 'DetailedBalloon',
                        component: DetailedBalloon
                    }

                ]
            },
            {
                path: 'CottonCandy',
                component: CottonCandy,
                children: [
                    {
                        path: 'DetailedCotton',
                        component: DetailedCotton
                    }

                ]
            },
            {
                path: 'SpaceTimeBall',
                component: SpaceTimeBall,
                children: [
                    {
                        path: 'DetailedSpaceBall',
                        component: DetailedSpaceBall
                    }

                ]
            },
            {
                path: 'RollCar',
                component: RollCar,
                children: [
                    {
                        path: 'DetailedRollCar',
                        component: DetailedRollCar
                    }

                ]
            }
        ]
    },
    {
        path: '/Solution', component: Solution,
        children: [
            {
                path: 'OEM',
                component: OEM
            },
            {
                path: 'ODM',
                component: ODM
            },
            {
                path: 'Resource',
                component: Resource
            },
            {
                path: 'SupplyChains',
                component: SupplyChains
            }

        ]
    },
    { path: '/Cooperation', component: Cooperation },
    {
        path: '/AboutUs', component: AboutUs,
        children: [
            {
                path: 'CompanyProfile',
                component: CompanyProfile
            },
            {
                path: 'CorporateCulture',
                component: CorporateCulture
            },
            {
                path: 'Honour',
                component: Honour
            }

        ]
    }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes
});

router.beforeEach((to, from, next) => {
    // chrome
    // document.body.scrollTop = 0
    // firefox
    // document.documentElement.scrollTop = 0
    // safari
    // window.pageYOffset = 0
    next()
})

//抛出这个这个实例对象方便外部读取以及访问
export default router