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
    <!-- <img src="../assets/bluebgc.png" alt=""> -->
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
.product-display .line
{
  display: inline-block;
width:0.5rem;
height:2px;
background:rgba(0,99,165,1);
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
    background-color: white;
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