<template>
  <div class="wrap" v-if="$route.path === '/Products'">
    <div class="page">
      <img class="bannerImg" src="../assets/wurenshengxianji.png" alt="" />
      <div class="list">
        <div class="item-list">
          <router-link to="/Products/FreshMachine" class="only"
            ><img src="../assets/1@2x.png" alt="" /><br /><span
              >无人生鲜机</span
            ></router-link
          >
          <router-link to="/Products/GetMedicine"
            ><img src="../assets/2@2x.png" alt="" /><br /><span
              >智慧取药机</span
            ></router-link
          >
          <router-link to="/Products/Balloon"
            ><img src="../assets/3@2x.png" alt="" /><br /><span
              >无人气球机</span
            ></router-link
          >
          <router-link to="/Products/CottonCandy"
            ><img src="../assets/4@2x.png" alt="" /><br /><span
              >全自动棉花糖机</span
            ></router-link
          >
          <router-link to="/Products/SpaceTimeBall"
            ><img src="../assets/5@2x.png" alt="" /><br /><span
              >时空球</span
            ></router-link
          >
          <router-link to="/Products/RollCar"
            ><img src="../assets/6@2x.png" alt="" /><br /><span
              >翻滚车</span
            ></router-link
          >
        </div>
      </div>
      <div class="our-products">
        <div class="product-display">
          <p class="circle"><img src="../assets/important.png" alt=""></p>
          <p><b>我们的产品</b></p>
          <p class="line"></p>
          <p class="letter">OUR PRODUCTS</p>
        </div>
      </div>
      <div class="show">
        <div class="show-box">
          <router-link to="/Products/FreshMachine/DetailedFreshMachine"
            ><img src="../assets/tuceng2x.png" alt=""
          /></router-link>
          <p><b>无人自助生鲜机</b></p>
        </div>
        <div class="show-box">
          <router-link to="/Products/FreshMachine/DetailedFreshMachine"
            ><img src="../assets/shengxianji@2x.png" alt=""
          /></router-link>
          <p><b>无人自助生鲜机</b></p>
        </div>
        <div class="show-box">
          <router-link to="/Products/FreshMachine/DetailedFreshMachine"
            ><img src="../assets/xiaoshuangmen1.png" alt=""
          /></router-link>
          <p><b>无人自助生鲜机</b></p>
        </div>
      </div>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  name: "products",
  mounted() {
    console.log(this.$route.path);
  }
};
</script>

<style  scoped>
div.wrap {
  width: 100%;
}
div.list {
  width: 100%;
  background: rgba(251, 251, 251, 1);
}
div.item-list {
  width: 62.5%;
  margin: 0 auto;
  display: flex;
  text-align: center;
}
div.item-list a {
  flex: auto;
  height: 2rem;
  color: #0063a5;
  font-family: MicrosoftYaHei;
  font-size: 0.18rem;
  text-decoration: none;
}
.bannerImg {
  width: 100%;
  height: 31vw;
  min-height: 3.71rem;
}
div.products {
  height: 500px;
  background-color: white;
}
div.item-list img {
  margin-top: 0.5rem;
  margin-bottom: 0.2rem;
}
div.our-products {
  width: 62.5%;
  text-align: center;
  margin: 0 auto;
}
div.show {
  width: 82.5%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
div.show-box {
  display: block;
  width: 30%;
  flex-grow: 1;
  margin-right: 0.25rem;
  text-align: center;
  margin-bottom: 0.4rem;
}
div.show-box p {
  line-height: 1rem;
  font-family: MicrosoftYaHei;
  font-size: 0.18rem;
  background-color: #ffffff;
  border: 1px solid rgba(246, 246, 246, 1);
}
div.show-box a {
  display: block;
  background-color: rgba(246, 246, 246, 1);
  padding: 0.18rem 0;
  height: 2.68rem;
}
/* 公共部分 */
.product-display p {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
p.circle img{
  
  margin-top: 1.2rem;
  margin-bottom: 0.12rem;
}
.product-display .line {
  display: inline-block;
  width: 0.5rem;
  height: 2px;
  background: rgba(0, 99, 165, 1);
  margin-top: 0.15rem;
}
.product-display .letter {
  font-size: 0.14rem;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
}
/* 特殊的 */
div.item-list a.only {
  background-color: #0063a5;
  color: white;
}
div.item-list a.only img {
  border: 1px dotted #88898b;
}
</style>

