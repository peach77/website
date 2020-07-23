<template>
  <div class="wrap" v-if="$route.path==='/Solution/ODM'" >
     <div class="bgc">
       <img src="../assets/jiejuefanganbgc.png" alt="">
     </div>
     <div class="box" >
           <!-- <div class="item-list">
                          <router-link to='/Solution/OEM' ><span><b>OEM</b></span></router-link>
                        <router-link to='/Solution/ODM'  class="only"><span><b>ODM</b></span></router-link>
                        <router-link to='/Solution/Resource' ><span><b>平台共享</b></span></router-link>
                        <router-link to='/Solution/SupplyChains' ><span><b>供应链</b></span></router-link>
            </div> -->
               <div class="item-list">
        <router-link to="/Solution/OEM" class="only"
          ><span><b>OEM</b></span></router-link
        >
        <router-link to="/Solution/ODM"
          ><span><b>ODM</b></span></router-link
        >
        <router-link to="/Solution/Resource"
          ><span><b>平台共享</b></span></router-link
        >
        <router-link to="/Solution/SupplyChains"
          ><span><b>供应链</b></span></router-link
        >
      </div>
             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>服务内容</b></p>
                  <p class="line"></p>
                  <p class="letter">SERVICE CONTENT</p>
                </div>
       
          </div>
          <div class="serve">
            <div class="img-bgc-one"><p><b>商城</b></p></div>
            <div class="img-bgc-two"><p><b>后台</b></p></div>
            <div class="img-bgc-three"><p><b>设计</b></p></div>
            <div class="img-bgc-four"><p><b>开发</b></p></div>
            <div class="img-bgc-five"><p><b>云服务</b></p></div>
       
          </div>
         
      
     </div>
     <div class="ways">
         <div class="wrap-box-one">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>合作方式</b></p>
                  <p class="line"></p>
                  <p class="letter">MODE OF COOPERATION</p>
                </div>
       
          </div>
          <div class="manufacturer">
            <img src="../assets/pen.png" alt="">
             <br><br> <br><br> <br><br>
             <p class="line"></p>
             <br><br>
             <p><b>设计制造商</b></p>
               <br><br>
            <p class="service">我司可对研发、生产、设计、后期维护全部环节为您提供服务 </p>

          </div>
     </div>
  
     
   
    <div class="flow">
          <div class="wrap-box-one">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>合作流程</b></p>
                  <p class="line"></p>
                  <p class="letter">COOPERATION PROCESS</p>
                </div>
       
          </div>
          <div class="model">
             
              <div class="show" >
                  <p class=" communication">  <img src="../assets/model1.png" alt=""><br>
                          <span>沟通需求<br>接洽业务</span></p>
                  <p class=" communication"> <img src="../assets/model2.png" alt=""><br>
                      <span>确定<br>合作需求</span></p>
                  <p class=" communication">  <img src="../assets/model3.png" alt=""><br>
                          <span>确定<br>硬件软件</span></p>
                  <p class=" communication"> <img src="../assets/model4.png" alt=""><br>
                         <span>确定细节</span></p>
                  <p class=" communication"> <img src="../assets/model5.png" alt=""><br>
                        <span>项目开工</span></p>
                  <p class=" communication">  <img src="../assets/model6.png" alt=""><br>
                          <span>完成合作</span></p>
         
             
              </div>
             
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
div.wrap-box{
  width: 62.5%;
  margin: 0 auto;
  text-align: center;
}
.product-display p{
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
p.circle{
  display:inline-block;
    width: 0.1rem;
  height: 0.1rem;
  background: #ffffff;
  border-radius: 50%;
  border: 4px solid #0063A5;
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
  margin-bottom: 0.9rem;
}


div.wrap-box-one{
  width: 62.5%;
  margin: 0 auto;
  text-align: center;
  color: white;
}
 .wrap-box-one .product-display p{
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
 .wrap-box-one p.circle{
  display:inline-block;
    width: 0.1rem;
  height: 0.1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  border: 4px solid #ffffff;
  margin-top: 1.2rem;
  margin-bottom: 0.12rem;
}
  .wrap-box-one .product-display .line
{
  display: inline-block;
width:0.5rem;
height:2px;
background:white;
 margin-top: 0.15rem;
}
 .wrap-box-one .product-display .letter{
  font-size: 0.14rem;
  margin-top: 0.1rem;

} 

div.serve{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
}
div.serve div{
  text-align: center;
  color: white;
  line-height: 2.51rem;
  font-size: 0.18rem;
}
div.serve .img-bgc-one{
  width: 2rem;
    background-image: url('../assets/shangcheng@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-two{
   width: 2rem;
    background-image: url('../assets/houtai@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-three{
   width: 2rem;
    background-image: url('../assets/sheji@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-four{
   width: 2rem;
    background-image: url('../assets/kaifa@2x.png');
    height: 2.51rem;
}
div.serve .img-bgc-five{
   width: 2rem;
    background-image: url('../assets/yunfuwu@2x.png');
    height: 2.51rem;
}

div.ways{
   background-image: url('../assets/hezuofangshi@2x.png');
  background-repeat: no-repeat;
}
div.ways p.letter{
  margin-bottom: 0.48rem;
}
div.manufacturer{
  padding-left: 0.8rem;
  width: 62.5%;
  background-color: white;
  margin: auto;
  position: relative;
  height: 3.55rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
 

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
div.flow{
    background-image: url('../assets/bj2@2x.png');
    height: 7.1rem;
}
div.model{
 
  margin: 0 auto;
  text-align: center;



}
div.model .choice{
  margin: auto;
    width: 62.5%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.6rem;
}
div.model .choice span{
  display: inline-block;
  color: white;
  width: 0.8rem;
  text-align: center;
  padding-top: 0.26rem;

  font-size: 0.18rem;
  font-family: MicrosoftYaHei;

}

div.model .choice .kong{
   display: inline-block;
    width: 1rem;
    border: none;
}
div.model .choice .active{
  border-top: 2px solid white;
}
div.model .show{
  margin: auto;
    width: 62.5%; 
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 0.18rem;
  align-items: flex-start;
  line-height: 0.3rem;
}

div.model .show img{
  margin-bottom: 0.36rem;
}
div.none{
  
  font-size: 0.24rem;
  text-align: center;
  color: white;
  font-family: MicrosoftYaHei;
}
</style>