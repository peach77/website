<template>
  <div class="wrap">
     <div class="bgc">
       <img src="../assets/jiejuefanganbgc.png" alt="">
     </div>
     <div class="box" v-if="$route.path==='/Solution'">
           <div class="item-list">
                        <router-link to='/Solution/OEM' class="only" ><span><b>OEM</b></span></router-link>
                        <router-link to='/Solution/ODM'><span><b>ODM</b></span></router-link>
                        <router-link to='/Solution/Resource'><span><b>平台共享</b></span></router-link>
                        <router-link to='/Solution/SupplyChains'><span><b>供应链</b></span></router-link>
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
                <img src="../assets/youshi1@2x.png" alt="">
                <p><span><b>实力强大，值得信任</b></span><br><br><span>我司深耕自动化领域二十余年，在制造方面有完善的流程体系，产品易于使用获得广泛的支持。</span></p>
            </div>
            <div class="right">
                 <img src="../assets/youshi2@2x.png" alt="">
                  <p><span><b>满足多样化具体需求</b></span><br><br><span>食品制造行业、娱乐行业以及医药行业我司均有成功案例，可为您提供多样化参考。</span></p>
            </div>
          </div>
      
     </div>
     <div   class="service">

      </div>
     <router-view ></router-view>
  </div>
      

</template>

<script>
export default {

}
</script>

<style scoped>
div.wrap{
  width: 100%;
}
div.box{
  width: 62.5%;
  margin: 0 auto;
  box-sizing: border-box;
}
div.item-list a{
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
  margin-bottom: 1.35rem;
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
} div.advantage  .left p b{
  font-size: 0.18rem;
}
div.advantage  .right  p{
  padding-right: 0.3rem;
  padding-left: 0.23rem;
  padding-top: 0.56rem;
   font-size: 0.14rem;
   font-family: MicrosoftYaHei;
} div.advantage  .right p b{
  font-size: 0.18rem;
}
div.service{
  background-image: url(../assets/bj@2x.png);
  height: 7.41rem;
}
</style>