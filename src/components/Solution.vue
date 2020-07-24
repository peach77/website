<template>
  <div class="wrap" v-if="$route.path === '/Solution'">
    <div class="bgc">
      <img src="../assets/jiejuefanganbgc.png" alt="" />
    </div>
    <div class="box">
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
          <img src="../assets/youshi1@2x.png" alt="" />
          <p>
            <span><b>实力强大，值得信任</b></span
            ><br /><br /><span
              >我司深耕自动化领域二十余年，在制造方面有完善的流程体系，产品易于使用获得广泛的支持。</span
            >
          </p>
        </div>
        <div class="right">
          <img src="../assets/youshi2@2x.png" alt="" />
          <p>
            <span><b>满足多样化具体需求</b></span
            ><br /><br /><span
              >食品制造行业、娱乐行业以及医药行业我司均有成功案例，可为您提供多样化参考。</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="wrap-box-one">
        <div class="product-display">
          <p class="circle"></p>
          <p><b>服务内容</b></p>
          <p class="line"></p>
          <p class="letter">SERVICE CONTENT</p>
        </div>
      </div>
      <div class="agency">
        <ul>
          <li>
            <span class="one"
              ><img src="../assets/pic1@2x.png" alt="" /><span
                ><b>代加工厂商</b></span
              ></span
            >
            <span class="two daili"
              ><b>代加工厂商</b><br /><span
                >我司拥有三大生产基地，十多条生产线可进行多种产品加工制造；</span
              ></span
            >
          </li>
          <li>
            <span class="one"
              ><img src="../assets/pic2@2x.png" alt="" /><span
                ><b>生产许可</b></span
              ></span
            >
            <span class="two shengchan"
              ><b>生产许可</b><br /><span
                >获国际CE认证、ISO9001质量认证体系；</span
              ></span
            >
          </li>
          <li>
            <span class="one"
              ><img src="../assets/pic3@2x.png" alt="" /><span
                ><b>人员实力</b></span
              ></span
            >
            <span class="two renyuan"
              ><b>人员实力</b><br /><span
                >从材料加工到安装再到成品出厂，百余名专业技术人员相互配合完成设备的生产；</span
              ></span
            >
          </li>
          <li>
            <span class="one"
              ><img src="../assets/pic4@2x.png" alt="" /><span
                ><b>硬件实力</b></span
              ></span
            >
            <span class="two yingjian"
              ><b>硬件实力</b><br /><span
                >激光贴割机、开平机、折弯机、焊接机、压膜机、转塔冲等二十余台设备，满足多种制作需求。</span
              ></span
            >
          </li>
          <li>
            <span class="one"
              ><img src="../assets/pic5@2x.png" alt="" /><span
                ><b>软件实力</b></span
              ></span
            >
            <span class="two ruanjian"
              ><b>软件实力</b><br /><span>JAVA JS HTML CSS C##语言.</span></span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="wrap-box">
      <div class="product-display">
        <p class="circle"></p>
        <p><b>合作方式</b></p>
        <p class="line"></p>
        <p class="letter">MODE OF COOPERATION</p>
      </div>
    </div>
    <div class="cooperation">
      <div class="left">
        <br />
        <br />
        <p><b>板块合作</b></p>
        <br /><br />
        <p>零件加工制造、技术开发、产品生产</p>
      </div>
      <div class="right-s">
        <br />
        <br />
        <p><b>定制合作</b></p>
        <br /><br />
        <p>我们提供一站式定制服务</p>
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
        <P class="choice"
          ><span
            @click="ChangeModel(true)"
            :class="$store.state.model ? 'active' : ''"
            >板块合作</span
          ><span class="kong"></span
          ><span
            @click="ChangeModel(false)"
            :class="$store.state.model ? '' : 'active'"
            >定制合作</span
          ></P
        >
        <div class="show" v-show="$store.state.model">
          <p class=" communication">
            <img src="../assets/model1.png" alt="" /><br />
            <span>沟通需求<br />接洽业务</span>
          </p>
          <p class=" communication">
            <img src="../assets/model2.png" alt="" /><br />
            <span>确定<br />合作需求</span>
          </p>
          <p class=" communication">
            <img src="../assets/model3.png" alt="" /><br />
            <span>确定<br />硬件软件</span>
          </p>
          <p class=" communication">
            <img src="../assets/model4.png" alt="" /><br />
            <span>确定细节</span>
          </p>
          <p class=" communication">
            <img src="../assets/model5.png" alt="" /><br />
            <span>项目开工</span>
          </p>
          <p class=" communication">
            <img src="../assets/model6.png" alt="" /><br />
            <span>完成合作</span>
          </p>
        </div>
        <div class="none" v-show="$store.state.model === false">
          <p><b>我们提供一站式定制服务</b></p>
        </div>
      </div>
    </div>
  </div>

  <router-view v-else></router-view>
</template>

<script>
export default {
  name: "solition",
  mounted() {
    console.log(this.$store.state.model);
  },
  methods: {
    ChangeModel(n) {
      this.$store.commit("ChangeModel", n);
    }
  }
};
</script>

<style scoped>
div.wrap {
  width: 100%;
}
div.bgc img {
  width: 100%;
}
div.box {
  width: 62.5%;
  /* min-width: 970px; */
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
div.wrap-box {
  width: 62.5%;
  margin: 0 auto;
  text-align: center;
}
.product-display p {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
p.circle {
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  background: #ffffff;
  border-radius: 50%;
  border: 4px solid #0063a5;
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
  margin-bottom: 1.34rem;
}
div.advantage {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.35rem;
}
div.advantage div {
  width: 5.8rem;
  height: 2.38rem;
 box-shadow:1px 1px 5px 5px #e2e2e2;
}
div.advantage .left,
.right {
  display: flex;
  justify-content: space-between;
}
div.advantage .left p {
  padding-right: 0.3rem;
  padding-left: 0.23rem;
  padding-top: 0.56rem;
  font-size: 0.14rem;
  font-family: MicrosoftYaHei;
}
div.advantage .left p b {
  font-size: 0.18rem;
}
div.advantage .right p {
  padding-right: 0.3rem;
  padding-left: 0.23rem;
  padding-top: 0.56rem;
  font-size: 0.14rem;
  font-family: MicrosoftYaHei;
}
div.advantage .right p b {
  font-size: 0.18rem;
}
div.service {
  background-image: url("../assets/bj@2x (1).png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 7.41rem;
  max-width: 100%;
}
div.wrap-box-one {
  width: 62.5%;
  margin: 0 auto;
  text-align: center;
  color: white;
}
.wrap-box-one .product-display p {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
}
.wrap-box-one p.circle {
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border: 4px solid #ffffff;
  margin-top: 1.2rem;
  margin-bottom: 0.12rem;
}
.wrap-box-one .product-display .line {
  display: inline-block;
  width: 0.5rem;
  height: 2px;
  background: white;
  margin-top: 0.15rem;
}
.wrap-box-one .product-display .letter {
  font-size: 0.14rem;
  margin-top: 0.1rem;
  margin-bottom: 1.34rem;
}
div.service .agency {
  width: 62.5%;
  /* width: 85.5%; */
  margin: 0 auto;
  box-sizing: border-box;
}
div.service .agency ul {
  display: flex;
  justify-content: space-between;
}
div.service .agency li:hover .one {
  display: none;
}
div.service .agency li:hover span.two {
  display: block;
}
div.service .agency .one {
  display: block;
}
div.service .agency span.two {
  display: none;
}
div.service .agency b {
  text-align: center;
  display: block;
  height: 0.72rem;
  line-height: 0.72rem;
  background-color: white;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
}
div.service .agency .two {
  text-align: center;
  display: block;
  width: 2.2rem;
  height: 3.09rem;
  padding: 0.4rem 0.28rem 0 0.28rem;
  box-sizing: border-box;
  font-family: MicrosoftYaHei;
  font-size: 0.18rem;
  color: white;
}
div.service .agency .daili {
  background-image: url("../assets/dailijiagongshang.png");
}
div.service .agency .shengchan {
  background-image: url("../assets/xuke@2x.png");
}
div.service .agency .renyuan {
  background-image: url("../assets/rencaishili.png");
}
div.service .agency .yingjian {
  background-image: url("../assets/yingjianshili@2x.png");
}
div.service .agency .ruanjian {
  background-image: url("../assets/ruanjianshili.png");
}

div.service .agency .two b {
  font-size: 0.24rem;
  background-color: none;
  background-color: rgba(0, 0, 0, 0);
}
div.cooperation {
  width: 62.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.36rem;
}
div.cooperation .left {
  background-image: url("../assets/bankuaihezuo@2x.png");
  width: 5.8rem;
  height: 2.38rem;
}
div.cooperation .right-s {
  background-image: url("../assets/dingzhihezuo@2x.png");
  height: 2.38rem;
  width: 5.8rem;
}
div.cooperation div {
  font-family: MicrosoftYaHei;
  text-align: center;
  color: white;
  font-size: 0.18rem;
}
div.cooperation div b {
  font-size: 0.24rem;
}
div.flow {
  background-image: url("../assets/bj2@2x.png");
  height: 7.1rem;
}
div.model {
  border-top: 1px solid white;
  margin: 0 auto;
  text-align: center;
}
div.model .choice {
  margin: auto;
  width: 62.5%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.6rem;
}
div.model .choice span {
  display: inline-block;
  color: white;
  width: 0.8rem;
  text-align: center;
  padding-top: 0.26rem;

  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
}

div.model .choice .kong {
  display: inline-block;
  width: 1rem;
  border: none;
}
div.model .choice .active {
  border-top: 2px solid white;
}
div.model .show {
  margin: auto;
  width: 62.5%;
  display: flex;
  justify-content: space-around;
  color: white;
  font-size: 0.18rem;
  align-items: flex-start;
  line-height: 0.3rem;
}

div.model .show img {
  margin-bottom: 0.36rem;
}
div.none {
  font-size: 0.24rem;
  text-align: center;
  color: white;
  font-family: MicrosoftYaHei;
}
</style>