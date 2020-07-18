<template>
  <div class="wrap">
   
    <div class="banner">
      
        <el-carousel :interval="2000" arrow="always">    
         <el-carousel-item v-for="item in $store.state.imgList" :key="item.id">   
       <img :src="item.url"   class="banner-img">
       </el-carousel-item>
      </el-carousel>
    </div>
  <div class="productList-bgc">
      <div class="product-banner">
        <div class="product-display">
         
          <p class="circle"></p>
          <p><b>产品展示</b></p>
          <p class="line"></p>
          <p class="letter">PRODUCT DISPLAY</p>
        </div>
          <el-carousel :interval="2000" type="card" height="464px">
        <el-carousel-item v-for="item in $store.state.productList" :key="item.id">
          <div class="product-bgc">
            <router-link :to="item.path">
                 <img :src="item.url" alt="">
                 <p class="name"><b>我的名字</b></p>
               <p class="sugar">我的功能是什么呢12322222</p>
            </router-link>
          </div>
       <!-- <h3 class="medium">{{ item }}</h3> -->

      </el-carousel-item>
       </el-carousel>
    </div>
  </div>
  <div class="blue-bgc">
      <div class="blue-bgc-wrap">
          <div class="product-display">
         
          <p class="circle-one" ></p>
          <p v-bind:style="{ color: 'white'}"><b>解决方案</b></p>
          <p  v-bind:style="{ color:'white'}" class="line-one"></p>
          <p  v-bind:style="{ color:'white'}" class="letter">PRODUCT DISPLAY</p>
        </div>
      </div>
      <div class="four-box">
        <ul>
          <li class="one"><p class="first"><b>OEM制造方</b></p><p class="last">趣云科技在无人设备领域拥有近二十年的制造经验，从工业自动设备到民用自动设备，不论是机器又或是专业制造人才，趣云都是不二之选。</p><router-link to='/Solution'>详情</router-link></li>
          <li class="two"><p class="first"><b>ODM制造方</b></p><p class="last">我司在无人设备制造行业具有多年研发经验，设计了多款产品，整体团队具有专业的能力。</p><router-link to='/Solution'>详情</router-link></li>
          <li class="three"><p class="first"><b>资源共享-趣云共享经济</b></p><p class="last">每一个闭环的产生都无法忽视资源的作用，线上商城平台、软件操作后台、专业设计团队等，任何一个环节趣云甘愿无偿分享。
</p><router-link to='/Solution'>详情</router-link></li>
          <li class="four"><p class="first"><b>供应链</b></p><p class="last">我司以客户需求为导向，整合资源；实现产品设计、采购、生产、服务等全过程高效协同的组织形态。同时我司将互联网、物联网大数据进行深度融合，形成智慧供应链新阶段.</p><router-link to='/Solution'>详情</router-link></li>
        </ul>
      </div>
  </div>
      <div class="news">
        <router-link to='/CompanyNews'><h1>我是新闻板块</h1></router-link>
      </div>
   <div class="partner">
        <div class="product-display">
         
          <p class="circle"></p>
          <p><b>合作伙伴</b></p>
          <p class="line"></p>
          <p class="letter">COOPERATION PARTNERS</p>
        </div>
        <div class="img-box-one img-box" >
            <img src="../assets/tuceng1.png" alt="">
            <img src="../assets/tuceng2.png" alt="">
            <img src="../assets/tuceng3.png" alt="">
            <img src="../assets/tuceng4.png" alt="">
            <img src="../assets/tuceng5.png" alt="">
        </div>
         <div class="img-box">
            <img src="../assets/tuceng6.png" alt="">
            <img src="../assets/tuceng7.png" alt="">
            <img src="../assets/tuceng8.png" alt="">
            <img src="../assets/tuceng9.png" alt="">
            <img src="../assets/tuceng10.png" alt="">
        </div>
        
   </div>
   <div class="contact">
      <div class="left"><h2>11111111111111</h2></div>
      <div class="right">
      <p class="right-one"><b>秦皇岛趣云科技有限公司</b></p>
      <p class="right-two">电话：400-0235580</p>
      <p class="right-three">邮箱：Funyunion@aliyun.com</p>
      <p class="right-four">地址：秦皇岛经济技术开发区洋河道11号 </p>
      <div class="small-img">
          <p class="right-five">
        <img src="../assets/quyunlian2x.png" alt=""><br><span>趣云科技</span>
      </p>
       <p class="right-six">
        <img src="../assets/quyunwulian2x.png" alt=""><br><span>趣云物联</span>
      </p>
      </div>
      
      </div>

   </div>
  </div>
</template>

<script>

  export default {
    name: 'homepage',
    // mounted(){
    //   console.log(document.getElementsByClassName("el-carousel__item "));
    //   document.getElementsByClassName("is-in-stage")[2].style.transform="scale(0.5)"
    //   document.getElementsByClassName("el-carousel__item")[3].style.width="1000px"
      
    // }
   

  }

</script>
<style scoped>
.img-wrap {
  border:  1px dotted black;
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
p.circle-one{
    display:inline-block;
    width: 0.1rem;
  height: 0.1rem;
  background: #1b3563;
  border-radius: 50%;
  border: 4px solid #ffffff;
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
.product-display .line-one{
    display: inline-block;
width:0.5rem;
height:2px;
background:white;
 margin-top: 0.15rem;
}
.product-banner{
   width: 62.5%; 
    margin: 0 auto;
    text-align: center;
}
.product-display{
 margin: auto;
 text-align: center;
}
.product-bgc{
  border: 1px solid #e7e7e7;
  box-shadow:0 0  1px ;
 width:3rem;
  margin: 0 auto;
  height:3.8rem;
  padding-top: 0.2rem;
}
.product-bgc img{
  width: 3rem;
}
.product-bgc a{
  text-decoration: none;
  color: #212121;
}
.product-bgc .name{
  font-size: 0.24rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.productList-bgc{
  margin-bottom: 1.5rem;
}
.product-bgc .suger{
  font-size: 0.18rem;
}
.product-display .letter{
  font-size: 0.14rem;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
}
div.blue-bgc{
 height: 9.36rem;
  background-image: url(../assets/bluebgc.png);
  /* background-repeat:no-repeat;
	background-size:100% 100%;
	-moz-background-size:100% 100%; */
}
div.blue-bgc-wrap{
  width: 62.5%;
   margin: 0 auto;
  text-align: center;
}
div.four-box{
  margin: 0 auto;
  width: 62.5%;
}
div.four-box ul{
  display: flex;
  justify-content: space-between;
}
div.four-box ul li{
  display: inline-block;
  width: 2.8rem;
  height: 3.6rem;
  background-color: rgba(255,255,255,0.83);
  text-align: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  box-sizing: border-box;
  
 
}
div.four-box ul li p.first{
 font-size: 0.18rem;
 color: #0063A5;
 margin-top: 0.3rem;
 margin-bottom: 0.2rem;
  
  font-family: MicrosoftYaHei;
}
div.four-box ul li p.last{

  font-size: 0.14rem;
  color: rgba(0,99,165,1);
  line-height:0.3rem;
    font-family: MicrosoftYaHei;
}
div.four-box ul li a{
 margin: 0 auto;
  display: block;
  text-decoration: none;
  border: 1px solid white;
  width: 0.8rem;
  line-height: 0.35rem;
  display: none;

}
div.four-box ul li:hover{
  background-color:rgba(15,78,149,1);
  opacity:0.9;
  width:3rem;
height:3.8rem;
margin-top: -0.1rem;

}
div.four-box ul li:hover p{
  color: white;
}
div.four-box ul .one:hover a{
 display: block;
 color: white;
 font-size: 0.14rem;
 margin-top: 0.4rem;
}
div.four-box ul .two:hover a{
 display: block;
 color: white;
 font-size: 0.14rem;
 margin-top:1rem;
}
div.four-box ul .three:hover a{
 display: block;
 color: white;
 font-size: 0.14rem;
 margin-top: 0.7rem;
}
div.four-box ul .four:hover a{
 display: block;
 color: white;
 font-size: 0.14rem;
 margin-top: 0.1rem;
}
div.news{
  background-color: thistle;
  height: 300px;
}
div.partner{
  padding-bottom: 1rem;
}
div.img-box{
  width: 62.5%;
  margin:0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}
div.img-box-one{
  margin-bottom: 0.3rem;
}
div.img-box img{
  border: 1px dotted black;
}
div.contact{
 
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

}
div.contact .left{
  width: 50%;
 
  background-color: #F3F3F3;
  padding-left: 18.5%;
}
div.contact .right{

   width: 50%;
 
  background-color: #0063A5;
  padding-right: 18.5%;
 text-align: left;
}
div.contact  .right-one{
  font-size: 0.24rem;
  color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.63rem;
  margin-left: 2rem;
}div.contact  .right-two{
  font-size: 0.18rem;
   color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.5rem;
  margin-left: 2rem;
}
div.contact .right-three,.right-four{
  font-size: 0.18rem;
   color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.5rem;
  margin-left: 2rem;
}
div.contact .small-img{
  display: flex;
  margin-top: 0.5rem;
  margin-left: 2rem;
  margin-bottom: 1.2rem;
}
div.contact .small-img p{
  text-align: center;
}
div.contact .small-img img{
  margin-bottom: 0.1rem;
}
div.contact .small-img span{
  font-size: 0.18rem;
  margin-top: 0.12rem;
  display: block;
  color: white;
}
.small-img .right-five{
  margin-right: 0.8rem;
}
div.news{
  width: 62.5%;
  margin: 0 auto;
}
</style>
<style>
.product-banner .el-carousel__indicators {
 display: none;
}

  .banner .el-carousel__item  h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  
  }
 .banner .el-carousel__container{
    height: 8rem;
  }

  .product-banner .el-carousel__item h3 {
    color: #475669;
    color: white;
    font-size: 0.14rem;
    opacity: 0.75;
    line-height: 2rem;
    margin: 0;
  }

  .product-banner .el-carousel__item{
   width:3rem;
   height: 4rem;
   /* 颜色设置在这里，如果背景颜色变为透明，后面轮播就能看见,
   如果颜色设置为白色，后面轮播走势看不见，但是会遮挡两边小的产品，
   要求就是看不见后面的轮播，不遮挡两边小的产品 */
    
    background-color: rgba(0,0,0,0);
    padding: 0.2rem;
   
   
  
  }
  .product-banner .el-carousel__container button{
    display: block;
  }
    .product-banner .el-carousel__item--card{
  
    width:47%;
  }

</style>