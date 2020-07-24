<template>
    <div class="wrap" v-if="$route.path==='/AboutUs/Honour'">
     <div class="bgc-banner">
        <img src="../assets/gongsijieshao.png" alt="">
     </div>
     <div class="box">
        <div class="item-list">
                        <router-link to='/AboutUs/CompanyProfile' ><img src="../assets/jieshao@2x.png" alt=""><span>公司介绍</span></router-link>
                        <router-link to='/AboutUs/CorporateCulture'  ><img src="../assets/wenhua@2x.png" alt=""><span>企业文化</span></router-link>
                        <router-link to='/AboutUs/Honour' class="only" ><img src="../assets/zizhi@2x.png" alt=""><span>荣誉资质</span></router-link>
                       
            </div>
            <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"><img src="../assets/important.png" alt=""></p>
                  <p><b>荣誉资质</b></p>
                  <p class="line"></p>
                  <p class="letter">HONOR AND QUALIFICATION</p>
                </div>
       
          </div>  
          <div class="jiang">
            <img src="../assets/jiangzhuang.png" alt="" class="jiangzhuang">
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
div.wrap-box{
  width: 62.5%;
  margin: 0 auto;
  text-align: center;
}
.product-display p{
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
p.circle img{

  margin-top: 1.2rem;
  margin-bottom: 0.12rem;
}
.product-display .line
{
  display: inline-block;
width:0.5rem;
height:2px;
background:rgba(0,99,165,1);
 margin-top: 0.15rem;
}
.product-display .letter{
  font-size: 0.14rem;
  margin-top: 0.1rem;
  margin-bottom: 1.34rem;
}
div.jiang{
  width: 1200px;
  margin: auto;
  margin-bottom: 0.87rem;
 
}
div.jiang img{

width: 100%;
  
}
</style>