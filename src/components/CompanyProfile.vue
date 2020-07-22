<template>
   <div class="wrap" v-if="$route.path==='/AboutUs/CompanyProfile'">
      <div class="bgc-banner">
        <img src="../assets/gongsijieshao.png" alt="">
     </div>
     <div class="box">
        <div class="item-list">
                        <router-link to='/AboutUs/CompanyProfile' class="only" ><img src="../assets/jieshao@2x.png" alt=""><span>公司介绍</span></router-link>
                        <router-link to='/AboutUs/CorporateCulture'  ><img src="../assets/wenhua@2x.png" alt=""><span>企业文化</span></router-link>
                        <router-link to='/AboutUs/Honour' ><img src="../assets/zizhi@2x.png" alt=""><span>荣誉资质</span></router-link>
                       
            </div>

     </div>
      
      
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
div.wrap{
  width: 100%;
}
div.bgc-banner img{
  max-width: 100%;
}
div.box{
  width: 62.5%;
  margin: 0 auto;
  box-sizing: border-box;
}
div.item-list{
  display: flex;
}
div.item-list a{
  flex: auto;
  height: 1.2rem;
  line-height: 1.2rem;
  background-color: white;
  color: #0063A5;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;

}
div.item-list a img{
  margin-right: 0.15rem;
}
div.item-list a.only{
  font-weight: bold;
 
  height: 1.2rem;
   flex: auto;
  line-height: 1.2rem;
  background-color: #0063A5;
  color: white;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;
}
</style>