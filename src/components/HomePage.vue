<template>
  <div class="wrap">
    <div class="banner">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="item in $store.state.imgList" :key="item.id">
          <img :src="item.url" class="banner-img" />
        </el-carousel-item>
      </el-carousel>
      <div class="experience" @click="goAnchor('#company')">
        <p><b>立即体验</b></p>
      </div>
    </div>
    <div class="productList-bgc">
      <div class="product-banner">
        <div class="product-display">
          <p class="circle"><img src="../assets/important.png" alt=""></p>
          <p><b>产品展示</b></p>
          <p class="line"></p>
          <p class="letter">PRODUCT DISPLAY</p>
        </div>
        <el-carousel :interval="2000" type="card" height="4.64rem">
          <el-carousel-item
            v-for="item in $store.state.productList"
            :key="item.id"
          >
            <div class="product-bgc">
              <router-link :to="item.path">
                <img :src="item.url" alt="" />
                <p class="name">
                  <b>{{ item.name }}</b>
                </p>
                <p class="sugar">{{ item.suger }}</p>
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
          <p class="circle-one"><img src="../assets/fuzhutuxing@2x.png" alt=""></p>
          <p v-bind:style="{ color: 'white' }"><b>解决方案</b></p>
          <p v-bind:style="{ color: 'white' }" class="line-one"></p>
          <p v-bind:style="{ color: 'white' }" class="letter">
            PRODUCT DISPLAY
          </p>
        </div>
      </div>
      <div class="four-box">
        <ul>
          <li class="one">
            <p class="first"><b>OEM制造方</b></p>
            <p class="last">
              趣云科技在无人设备领域拥有近二十年的制造经验，从工业自动设备到民用自动设备，不论是机器又或是专业制造人才，趣云都是不二之选。
            </p>
            <router-link to="/Solution">详情</router-link>
          </li>
          <li class="two">
            <p class="first"><b>ODM制造方</b></p>
            <p class="last">
              我司在无人设备制造行业具有多年研发经验，设计了多款产品，整体团队具有专业的能力。
            </p>
            <router-link to="/Solution">详情</router-link>
          </li>
          <li class="three">
            <p class="first"><b>资源共享-趣云共享经济</b></p>
            <p class="last">
              每一个闭环的产生都无法忽视资源的作用，线上商城平台、软件操作后台、专业设计团队等，任何一个环节趣云甘愿无偿分享。
            </p>
            <router-link to="/Solution">详情</router-link>
          </li>
          <li class="four">
            <p class="first"><b>供应链</b></p>
            <p class="last">
              我司以客户需求为导向，整合资源；实现产品设计、采购、生产、服务等全过程高效协同的组织形态。同时我司将互联网、物联网大数据进行深度融合，形成智慧供应链新阶段.
            </p>
            <router-link to="/Solution">详情</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="news">
       <div class="product-display">
        <p class="circle"><img src="../assets/important.png" alt=""></p>
        <p><b>公司动态</b></p>
        <p class="line"></p>
        <p class="letter">COMPANY NEWS</p>
      </div>
      
      <!-- <router-link to="/CompanyNews"><h1>我是新闻板块</h1></router-link> -->
      <div class="all-news">
            <div class="hotnews">
                <img src="../assets/xinwendongtai.png" alt="">
                <p><b>秦皇岛市政府扶持趣云无人设备全面落地港城</b></p>
                <p class="recently">近期，秦皇岛市杨铁林副市长、市旅游和文化广电局李文生书记、市科技局郭拥军局长等领导与趣云科技董事长韩晓虎先生针对趣云科技线下物联网无人值守设备在本市的铺设进行座谈。</p>
                <router-link to='/CompanyNews'>查看详情 &gt;</router-link>
                
            </div>
            <div class="newslist">
                <ul>
                <router-link to='/CompanyNews'>
                  <li>
                    <p class="date"><span><b>29</b></span><br><span>2020/05</span></p>
                    <p class="title"><span><b>秦皇岛市政府扶持趣云无人设备全面落地港城</b></span><br><span>近期，秦皇岛市杨铁林副市长、市旅游和文化广电局李文生书记、市科技局郭拥军局长等领导与趣云科技董事长韩晓虎先生针对趣云科技线下物联网无人值守设备在本市的铺设进行座谈。</span></p></li>
                </router-link>
                <router-link to='/CompanyNews'>
                    <li><p class="date"><span><b>14</b></span><br><span>2020/05</span></p>
                    <p class="title"><span><b>新飞跃：趣云科技受到政府扶持全速发展！</b></span><br><span>5月14日上午，秦皇岛市政府孙国胜副市长、张仕民副秘书长、秦皇岛银行张宏伟行长一行莅临秦皇岛趣云科技有限公司参观指导工作，公司董事长韩晓虎、总经理刘金国等领导热情接待，并陪同考察！</span></p></li>
                </router-link>
                <router-link to='/CompanyNews'>
                    <li><p class="date"><span><b>07</b></span><br><span>2020/05</span></p>
                    <p class="title"><span><b>智能生鲜售卖机首现廊坊小区，最新购物体验你想来试试吗？</b></span><br><span>五一小长假，有人周边游，有人家里瘫，趣云联不停歇。赶在五一小长假高峰期给予客户开业活动支持，另附一份安装后社区居民新鲜的体验报告。<br><br></span></p></li>
                </router-link>
                </ul>
            </div>
      </div>

    </div>
    <div class="partner">
      <div class="product-display">
        <p class="circle"><img src="../assets/important.png" alt=""></p>
        <p><b>合作伙伴</b></p>
        <p class="line"></p>
        <p class="letter">COOPERATION PARTNERS</p>
      </div>
      <div class="img-box">
        <img src="../assets/tuceng1.png" alt="" />
        <img src="../assets/tuceng2.png" alt="" />
        <img src="../assets/tuceng3.png" alt="" />
        <img src="../assets/tuceng4.png" alt="" />
        <img src="../assets/tuceng5.png" alt="" /><br>
        <img src="../assets/tuceng6.png" alt="" />
        <img src="../assets/tuceng7.png" alt="" />
        <img src="../assets/tuceng8.png" alt="" />
        <img src="../assets/tuceng9.png" alt="" />
        <img src="../assets/tuceng10.png" alt="" />
      </div>
    </div>
    <div class="contact" id="company">
      <div class="left">
       </div>
        <div class="form">
            <div class="product-display">
                <p class="circle"></p>
                <p><b>联系我们</b></p>
                <p class="line"></p>
                <p class="letter">CONTACT US</p>
            </div>
            
           
              <input type="text" name=""  class="text" v-model="$store.state.text" placeholder="*姓名">
            
            <input type="tel" name=""  class="tel" v-model="$store.state.tel" placeholder="*电话">
          
            <br>
            <textarea name="" cols="30" rows="10" v-model="$store.state.textarea" placeholder='请输入您的留言内容'></textarea><br>
            <input type="submit" value="提交" class="sub">
            

        </div>
      <div class="right">
        <p class="right-one"><b>秦皇岛趣云科技有限公司</b></p>
        <p class="right-two">电话：400-0235580</p>
        <p class="right-three">邮箱：Funyunion@aliyun.com</p>
        <p class="right-four">地址：秦皇岛经济技术开发区洋河道11号</p>
        <div class="small-img">
          <p class="right-five">
            <img src="../assets/quyunlian2x.png" alt="" /><br /><span
              >趣云科技</span
            >
          </p>
          <p class="right-six">
            <img src="../assets/quyunwulian2x.png" alt="" /><br /><span
              >趣云物联</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  methods: {
    goAnchor(selector, n) {
      this.$el.querySelector(selector).scrollIntoView();
      this.$store.commit("Anchor", n);
    }
  },
 updated () {
    console.log(this.$store.state.text);
    console.log(this.$store.state.tel);
    console.log(this.$store.state.textarea);
  },
};
</script>
<style scoped>
.img-wrap {
  border: 1px dotted black;
}
.banner-img {
  width: 100%;
  height: 100%;
}
div.banner {
  position: relative;
}


div.experience {
  font-family: MicrosoftYaHei;
  position: absolute;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 0.6rem;
  background-color: #0063a5;
  z-index: 20;
  text-align: center;
  line-height: 0.6rem;
  color: white;
  font-size: 0.18rem;
}
div.experience:hover {
  cursor: pointer;
}
.product-display p {
  font-family: MicrosoftYaHei;
  font-size: 0.28rem;
}

p.circle img {
 
  margin-top: 1.2rem;
  margin-bottom: 0.12rem;
}
p.circle-one img {
 
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
.product-display .line-one {
  display: inline-block;
  width: 0.5rem;
  height: 2px;
  background: white;
  margin-top: 0.15rem;
}
.product-banner {
  width:12rem;
  margin: 0 auto;
  text-align: center;
}
.product-display {
  margin: auto;
  text-align: center;
}
.product-bgc {

 box-shadow:1px 1px 5px 5px #e2e2e2;
 
  width: 3rem;
  margin: 0 auto;
  height: 3.8rem;
  padding-top: 0.2rem;
}
.product-bgc img {
  width: 3rem;
}
.product-bgc a {
  text-decoration: none;
  color: #212121;
}
.product-bgc .name {
  font-size: 0.24rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.productList-bgc {
  margin-bottom: 1.5rem;
}
.product-bgc .suger {
  font-size: 0.18rem;
}

.product-display .letter {
  font-size: 0.14rem;
  margin-top: 0.1rem;
  margin-bottom: 1rem;
}
div.blue-bgc {
  height: 9.36rem;
  background-image: url(../assets/bluebgc.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* background-repeat:no-repeat;
	background-size:100% 100%;
	-moz-background-size:100% 100%; */
}
div.blue-bgc-wrap {
  width: 12rem;
  margin: 0 auto;
  text-align: center;
}
div.four-box {
  margin: 0 auto;
  /* width: 62.5%; */
  width: 1200px;
  min-width: 688px;
}

@media screen and (max-width:1200px){
div.four-box {
  margin: 0 auto;
  width: 100%;
 
}
}
div.four-box ul {
  display: flex;
  /* height: 5.4rem; */
  justify-content: space-between;
}

div.four-box ul li {
  display: inline-block;
  width: 2.8rem;
  height: 3.6rem;
  background-color: rgba(255, 255, 255, 0.83);
  text-align: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.6rem;
  box-sizing: border-box;
}
@media screen and (max-width:1200px){
div.four-box {
  margin: 0 auto;
  width: 100%;
 
}

}
div.four-box ul li p.first {
  font-size: 0.18rem;
  color: #0063a5;
  
  margin-bottom: 0.2rem;

  font-family: MicrosoftYaHei;
}
div.four-box ul li p.last {
  font-size: 0.14rem;
  color: rgba(0, 99, 165, 1);
  line-height: 0.3rem;
  font-family: MicrosoftYaHei;
}
div.four-box ul li a {
  margin: 0 auto;
  display: block;
  text-decoration: none;
  border: 1px solid white;
  width: 0.8rem;
  line-height: 0.35rem;
  display: none;
}
div.four-box ul li:hover {
  background-color: rgba(15, 78, 149, 1);
  opacity: 0.9;
  transform: scale(1.1);
  position: relative;
  /* width: 3rem; */
  /* height: 3.8rem; */
  /* margin-top: -0.1rem; */
  
}
div.four-box ul li:hover p {
  color: white;
}
div.four-box ul .one:hover a {
  display: block;
  color: white;
  font-size: 0.14rem;
  margin-top: 0.4rem;
}
div.four-box ul .two:hover a {
  display: block;
  color: white;
  font-size: 0.14rem;
  margin-top: 1rem;
}
div.four-box ul .three:hover a {
  display: block;
  color: white;
  font-size: 0.14rem;
  margin-top: 0.7rem;
}
div.four-box ul .four:hover a {
  display: block;
  color: white;
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
div.news {
 
  /* width: 62.5%; */
  margin: auto;
}
div.all-news{
  /* min-width: 1200px; */
  display: flex;
 
}
div.hotnews{
  font-family:MicrosoftYaHei;
  margin-right: 0.8rem;
}
div.hotnews .recently{
  width: 4.8rem;
  font-size: 0.14rem;
  line-height: 0.3rem;
  margin-bottom: 0.4rem;
}
div.hotnews b{
  font-size: 0.18rem;
  margin-top: 0.6rem;
  display: block;
  margin-bottom: 0.28rem;
}
div.hotnews a{
  text-decoration: none;
  color: white;
  line-height: 0.58rem;
  text-align: center;
  background-color: rgba(0, 99, 165, 1);
  display: block;
  width: 2rem;
  font-size: 0.18rem;
  border-radius: 5px;
}
div.newslist li{
display: flex;
justify-content: flex-start;
margin-bottom: 0.75rem;
font-family: MicrosoftYaHei;
font-size: 0.14rem;
align-items: center;

}
div.newslist a{
  color: black;
  text-decoration: none;
}
div.newslist span b{
  font-size: 0.18rem;
 
}
div.newslist li .date{
  text-align: right;
  border-right: 1px solid rgba(185, 185, 185, 1);
  padding-right: 0.2rem;
  margin-right: 0.26rem;
  height: 0.9rem;
  font-size: 0.14rem;
 
}
div.newslist li .date b{
  font-size: 0.24rem;
}
div.newslist li .title{
  line-height: 0.3rem;
}
div.partner {
  padding-bottom: 1rem;
}
div.img-box {
  width:12rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  flex-wrap: wrap;
  
}
div.img-box-one {
  margin-bottom: 0.3rem;
}
div.img-box img {
 
  margin-right: 0.3rem;
}
div.contact {
 max-width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin: auto;
  position: relative;
  max-height: 7.2rem;
}
div.contact .left {
  width: 50%;

  background-color: #f3f3f3;
 
 text-align: right;

 
}

div.form{
  position: absolute;
width: 7rem;
height: 5.5rem;
 top:0.66rem;
 right: 45%;
  background-color: white;
  z-index: 10;
  padding: 0.55rem;
  box-sizing: border-box;
}
div.form .product-display{
  text-align: left;
 
}
div.form .product-display .circle{
 margin-top: 0;
}
div.form .product-display .letter{
  margin-bottom: 0.47rem;
}
div.form  .text{
 width: 45%;
  height: 0.5rem;
  background-color:rgba(243,243,243,1);;
  border: none;
  outline: none;
  margin-right: 4%;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  padding-left: 0.18rem;
  box-sizing: border-box;

}
div.form  .tel{
    box-sizing: border-box;
   padding-left: 0.18rem;
 width: 45%;
  height: 0.5rem;
  background-color:rgba(243,243,243,1);
  border: none;
  outline: none;
   font-size: 0.18rem;
font-family: MicrosoftYaHei;
}
div.form ::-webkit-input-placeholder{
  color: rgba(153, 153, 153, 1)
}
div.form ::-webkit-input-placeholder::before{
  content: "*";
  color: red;
}

div.form textarea{
  padding-top: 0.18rem;
    padding-left: 0.18rem;
  box-sizing: border-box;
  background-color:rgba(243,243,243,1);;
   border: none;
  outline: none;
  width: 94%;
  margin-top: 0.18rem;
  resize: none;
   font-size: 0.18rem;
   max-height: 1.4rem;
   font-family: MicrosoftYaHei;
   overflow: hidden;
}
div.form .sub{
  width: 94%;
  background-color: rgba(0,99,165,1);
  line-height: 0.54rem;
  color: white;
  margin-top: 0.18rem;
  border: none;
  outline: none;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
}
div.contact .right {
  width: 50%;

  background-color: #0063a5;
  padding-right: 18.5%;
  text-align: left;
  padding-left:2rem;
  box-sizing: border-box;
}
div.contact .right-one {
  font-size: 0.24rem;
  color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.63rem;
 
}
div.contact .right-two {
  font-size: 0.18rem;
  color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.5rem;
 
}
div.contact .right-three,
.right-four {
  font-size: 0.18rem;
  color: white;
  font-family: MicrosoftYaHei;
  margin-top: 0.5rem;
 
}
div.contact .small-img {
  display: flex;
  margin-top: 0.5rem;

  margin-bottom: 1.2rem;
}
div.contact .small-img p {
  text-align: center;
}
div.contact .small-img img {
  margin-bottom: 0.1rem;
}
div.contact .small-img span {
  font-size: 0.18rem;
  margin-top: 0.12rem;
  display: block;
  color: white;
}
.small-img .right-five {
  margin-right: 0.8rem;
}
div.news {
  width: 62.5%;
  margin: 0 auto;
}
</style>
<style>
.product-banner .el-carousel__indicators {
  display: none;
}

.banner .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
.banner .el-carousel__container {
  height: 41.6vw;
  min-height: 4.58rem;
}

.product-banner .el-carousel__item h3 {
  color: #475669;
  color: white;
  font-size: 0.14rem;
  opacity: 0.75;
  line-height: 2rem;
  margin: 0;
}

.product-banner .el-carousel__item {
  width: 3rem;
  height: 4rem;
  /* 颜色设置在这里，如果背景颜色变为透明，后面轮播就能看见,
   如果颜色设置为白色，后面轮播走势看不见，但是会遮挡两边小的产品，
   要求就是看不见后面的轮播，不遮挡两边小的产品 */

  background-color: rgba(0, 0, 0, 0);
  padding: 0.2rem;
}
.product-banner .el-carousel__container button {
  display: block;
}
.product-banner .el-carousel__item--card {
  width: 47%;
}
</style>