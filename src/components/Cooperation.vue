<template>
  <div class="wrap">
    <div class="banner">

    </div>
    <div class="wrap-box">
         <div class="product-display">
          <p class="circle"></p>
          <p><b>产品展示</b></p>
          <p class="line"></p>
          <p class="letter">PRODUCT DISPLAY</p>
        </div>
       
    </div>
  
  </div>
</template>
<script>
export default {
name:'wrap',

}
</script>

<style scoped>
div.wrap{
  width: 100%;
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
  margin-bottom: 1rem;
}
</style>