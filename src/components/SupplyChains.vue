<template>
  <div class="wrap" v-if="$route.path==='/Solution/SupplyChains'" >
     <div class="bgc">
       <img src="../assets/jiejuefanganbgc.png" alt="">
     </div>
     <div class="box" >
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
                  <p><b>方案优势</b></p>
                  <p class="line"></p>
                  <p class="letter">PROGRAM ADVANTAGES</p>
                </div>
       
          </div>
          <div class="advantage">
            <div class="left">
                <img src="../assets/youshi4.png" alt="">
                <p><span><b>涉猎广，种类多</b></span><br><br><span>公司自从事无人设备以来，与多方产品供应商进行合作，满足公司多产品的需求。</span></p>
            </div>
            <div class="right">
                 <img src="../assets/youshi3.png" alt="">
                  <p><span><b>懂营销，会维护</b></span><br><br><span>与我司合作的供应商从娱乐版块到医药板块，都有专业的社群人员去进行维护，可为您提供便捷的渠道。</span></p>
            </div>
          </div>
             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>供应链内容</b></p>
                  <p class="line"></p>
                  <p class="letter">SUPPLY CHAIN CONTENT</p>
                </div>
       
          </div>
          <div class="content">
            <div>
              <br><br>
              <p><img src="../assets/yuan1.png" alt=""></p><br>
              <p>气球</p><br>
              <p class="xian">
              </p>
            </div>
            <div>  <br><br><p><img src="../assets/yuan2.png" alt=""></p><br>
            <p>棉花糖原材料</p><br>
            <p class="xian"></p></div>
            <div> <br><br>  <p><img src="../assets/yuan3.png" alt=""></p><br>
            <p>品牌食品</p><br>
            <p class="xian"></p></div>
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
  margin-bottom: 1.34rem;
}
div.advantage{
  display: flex;
  justify-content: space-between;
 
}
div.advantage div{
  width: 5.8rem;
  height: 2.38rem;
  border:3px solid rgb(238, 237, 237);
  
}
div.advantage  .left,.right{
  display: flex;
  justify-content: space-between;
  
}
div.advantage  .left  p{
  padding-right: 0.3rem;
  padding-left: 0.23rem;
  padding-top: 0.56rem;
   font-size: 0.14rem;
   font-family: MicrosoftYaHei;
   overflow: auto;
} div.advantage  .left p b{
  font-size: 0.18rem;
}
div.advantage  .right  p{
  padding-right: 0.3rem;
  padding-left: 0.23rem;
  padding-top: 0.56rem;
   font-size: 0.14rem;
   font-family: MicrosoftYaHei;
    overflow: auto;
} div.advantage  .right p b{
  font-size: 0.18rem;
}
div.content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
 
  
}
div.content div{
   font-family: MicrosoftYaHei;
 font-size: 0.18rem;
 text-align: center;
  width: 3.26rem;
  height: 2.58rem;
  border:1px solid rgb(238, 237, 237);
}
div.content div .xian{
  display: inline-block;
  width: 0.5rem;border: 1px solid #0063A5;
 
}
</style>