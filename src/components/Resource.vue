<template>
  <div class="wrap" v-if="$route.path==='/Solution/Resource'" >
     <div class="bgc">
       <img src="../assets/jiejuefanganbgc.png" alt="">
     </div>
     <div class="box" >
           <div class="item-list">
        <router-link to="/Solution/OEM" 
          ><span><b>OEM</b></span></router-link
        >
        <router-link to="/Solution/ODM"
          ><span><b>ODM</b></span></router-link
        >
        <router-link to="/Solution/Resource" class="only"
          ><span><b>平台共享</b></span></router-link
        >
        <router-link to="/Solution/SupplyChains"
          ><span><b>供应链</b></span></router-link
        >
      </div>
             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"><img src="../assets/important.png" alt=""></p>
                  <p><b>共享内容</b></p>
                  <p class="line"></p>
                  <p class="letter">SHARE CONTENT</p>
                  <p class="future">将我司的现有资源通过共享的方式为投资商在运营过程中提供相对应的服务 </p>
                </div>
       
          </div>
          <div class="serve">
            <div class="img-bgc-one"><p><b>后台</b></p></div>
            <div class="img-bgc-two"><p><b>应用</b></p></div>
            <div class="img-bgc-three"><p><b>小程序</b></p></div>
            <div class="img-bgc-four"><p><b>云服务</b></p></div>
            <div class="img-bgc-five"><p><b>产品渠道</b></p></div>
       
          </div>
         <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"><img src="../assets/important.png" alt=""></p>
                  <p><b>合作方式</b></p>
                  <p class="line"></p>
                  <p class="letter">MODE OF COOPERATION</p>
                </div>
       
          </div>
            <div class="manufacturer">
                <img src="../assets/puter.png" alt="">
                <br><br>  <br><br>
                <p class="line"></p>
                <br><br>
                <p><b>投资合作</b></p>
                  <br><br>
                <p class="service">通过投资的方式可共享机器、后台、商城、小程序以及产品渠道 </p>

          </div>
      
     </div>
    
  
     
   

    
  </div>
      
<router-view  v-else></router-view>
</template>

<script>
export default {
name:'solition',
mounted () {
  console.log(this.$store.state.model);
},
methods: {
  ChangeModel(n) {
    this.$store.commit("ChangeModel", n);
  }
},
}
</script>

<style scoped>
div.wrap{
  width: 100%;
}
div.bgc img{
  max-width: 100%;
}
div.box{
  width: 62.5%;
  margin: 0 auto;
  box-sizing: border-box;
}
/* div.item-list a{
  display: inline-block;
  height: 1.2rem;
  width: 2.9rem;
  line-height: 1.2rem;
  background-color: white;
  color: black;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;

}
div.item-list a.only{
  display: inline-block;
  height: 1.2rem;
  width: 2.9rem;
  line-height: 1.2rem;
  background-color: #0063A5;
  color: white;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;
} */
div.item-list a {
  display: inline-block;
  height: 1.2rem;
  width: 25%;
  line-height: 1.2rem;
  background-color: white;
  color: black;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;
}
div.item-list a.only {
  display: inline-block;
  height: 1.2rem;
  width: 25%;
  line-height: 1.2rem;
  background-color: #0063a5;
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
  font-family: MicrosoftYaHei;
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
  margin-bottom: 0.3rem;
}
.product-display .future{
font-size: 0.18rem;
 font-family: MicrosoftYaHei;
 margin-bottom: 0.86rem;
}


div.serve{
  display: flex;
  justify-content: space-between;
  
}
div.serve div{
  text-align: center;
  color: white;
  line-height: 2.51rem;
  font-size: 0.18rem;
}
div.serve .img-bgc-one{
  width: 2rem;
    background-image: url('../assets/houtai@2x (2).png');
    height: 2.51rem;
}
div.serve .img-bgc-two{
   width: 2rem;
    background-image: url('../assets/yingyong@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-three{
   width: 2rem;
    background-image: url('../assets/xiaochengxu@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-four{
   width: 2rem;
    background-image: url('../assets/yunfuwu@2x (2).png');
    height: 2.51rem;
}
div.serve .img-bgc-five{
   width: 2rem;
    background-image: url('../assets/chanpinqudao@2x.png');
    height: 2.51rem;
}



div.manufacturer{
padding-left: 0.55rem;
  box-shadow:1px 1px 5px 5px #e2e2e2;
  background-color: white;
  margin: auto;
  position: relative;
  height: 2.49rem;
  margin-bottom: 1.5rem;


}
div.manufacturer p.line{
 
  width: 0.34rem;
  border: 1px solid #0063A5;
}
div.manufacturer b{
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
}
div.manufacturer .service{
  font-size: 0.18rem;
   font-family: MicrosoftYaHei;
}
div.manufacturer img{
 position: absolute;
 right: 0;
}


</style>