<template>
  <div class="wrap">
    <div class="wrap-box">
          <div class="logo">
              <img src="../assets/LOGO@2x.png" alt="">
          </div>
         <div class="nav">
             <ul>
                    <li @click="ChangeTheNavigation('homepage')"   @mouseover="mouseOver"> <router-link to="/"  active-class="active" exact>首页</router-link></li>
                    <li @click="ChangeTheNavigation('products')"><router-link to="/Products" active-class="active" >产品中心</router-link>
                        <ul>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/FreshMachine"  >无人生鲜机</router-link></li>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/GetMedicine" >智能取药机</router-link></li>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/Balloon" >无人气球机</router-link></li>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/CottonCandy">全自动棉花糖机</router-link></li>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/SpaceTimeBall" >时空球</router-link></li>
                            <li @click="ChangeTheNavigation('products')"><router-link to="/Products/RollCar">翻滚车</router-link></li>
                        </ul>
                    </li>
                    <li @click="ChangeTheNavigation('solution')"><router-link to="/Solution" active-class="active">解决方案</router-link>
                     <ul>
                            <li @click="ChangeTheNavigation('solution')"><router-link to="/Solution/OEM"  >OEM制造方</router-link></li>
                            <li @click="ChangeTheNavigation('solution')"><router-link to="/Solution/ODM" >ODM制造方</router-link></li>
                            <li @click="ChangeTheNavigation('solution')"><router-link to="/Solution/Resource" >资源共享</router-link></li>
                            <li @click="ChangeTheNavigation('solution')"><router-link to="/Solution/SupplyChains">供应链</router-link></li>
                        </ul>
                        </li>
                    <li @click="ChangeTheNavigation('cooperation')"><router-link to="/Cooperation" active-class="active" >合作支持</router-link></li>
                    <li @click="ChangeTheNavigation('aboutus')"><router-link to="/AboutUs" active-class="active" >关于我们</router-link>
                      <ul>
                            <li @click="ChangeTheNavigation('aboutus')"><router-link to="/AboutUs"  >公司介绍</router-link></li>
                            <li ><router-link to="/AboutUs" >企业文化</router-link></li>
                            <li ><router-link to="/AboutUs" >荣誉资质</router-link></li>
                        </ul>
                    </li>
             </ul>
         </div>
    </div>

  </div>
</template>

<script>
export default {
name:'header1',
mounted() {
    console.log(this.$store.state.name)
},
methods:{
ChangeTheNavigation(n){
    this.$store.commit('ChangeTheNavigation',n)
},
mouseOver(){
    console.log(123);
}
}
}
</script>

<style scoped>
div.wrap{
    width: 100%;
    background-color: rgb(255, 255, 255);
}
div.wrap-box{
    width: 62.5%; 
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
   height:1.28rem;
    background-color: rgb(255, 255, 255);
}

div.nav ul{
    display: flex;

}
div.nav ul a{
 
    font-size: 0.18rem;
    font-family: MicrosoftYaHei;
    color: #212121;
    margin-left: 0.5rem;
      font-weight:bold;
    text-decoration: none;

}


div.nav li .active{
       color: #297CB3;
         font-weight:bold;
    
}


div.nav li{
    position: relative;
    line-height: 1.28rem;
    box-sizing: border-box;
}
div.nav li>ul{
    background-color: rgb(255, 255, 255);
    position: absolute;
    display: none;
    top: 1.28rem; 
}
div.nav li>ul li{
      text-align:left;
     color: #212121;
      width: 2rem;
      line-height: 0.6rem;
        box-sizing: border-box;
}
div.nav li:hover ul{
    display: block;
}
div.nav li>ul>li:hover a{
    color: #297CB3;
}

</style>  