<template>
  <div class="wrap">
    <div class="top">
      <div class="top-box">
        <div class="name">
          <p class="first">
            <router-link to="/Products">产品中心 &gt;</router-link>
            <router-link to="/Products/FreshMachine">我们的产品 &gt;</router-link>
            <router-link to="/Products/FreshMachine/DetailedFreshMachine">生鲜机</router-link>
          </p>
          <div class="head">
            <div class="left">
              <img src="../assets/shengxianji1@2x.png" alt="" />
            </div>
            <div class="right">
              <p class="name">生鲜机</p>
              <p class="txt">
                我们存储生鲜，你来传递美好。无人自助生鲜机将大数据与人们日常生活结合，为人们提供便捷、健康、新鲜的时蔬储存地，为人们美好生活不断努力奋进。
              </p>
              <div class="kong"></div>
              <div class="item">
                <p class="item-p">
                  <span class="item-span-one">型号</span
                  ><span class="item-span">MHT-20A</span>
                </p>
                <p>
                  <span class="item-span-one">尺寸</span
                  ><span class="item-span">190×105×65cm</span>
                </p>
              </div>
              <div class="item">
                <p class="item-p">
                  <span class="item-span-one">屏幕尺寸</span
                  ><span class="item-span">32英寸</span>
                </p>
                <p>
                  <span class="item-span-one">材质</span
                  ><span class="item-span">五金机箱钢化玻璃</span>
                </p>
              </div>
              <div class="item">
                <p class="item-p">
                  <span class="item-span-one">净重</span
                  ><span class="item-span">190kg</span>
                </p>
                <p>
                  <span class="item-span-one">管理后台</span
                  ><span class="item-span">手机、电脑</span>
                </p>
              </div>

              <div class="kong-one"></div>
              <div class="tel">
                <p>
                  <span class="getpress" @click="goAnchor('#three')"
                    >获取底价</span
                  >
                  <a v-bind:href="'tel:' + 4000235580" class="num">
                    <span><b>400-0235580</b></span
                    ><br />
                    <span>拨打热线了解一下</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="limit">
      <!-- 我是中间一条线 -->
    </div>
    <div class="middle">
      <div class="middle-nav">
        <div class="p-total">
          <p
            @click="goAnchor('#one', 'parameter')"
            :class="$store.state.Anchor === 'parameter' ? 'click' : ''"
          >
            产品参数
          </p>
          <p
            @click="goAnchor('#two', 'details')"
            :class="$store.state.Anchor === 'details' ? 'click' : ''"
          >
            产品详情
          </p>
          <p
            @click="goAnchor('#three', 'ask')"
            :class="$store.state.Anchor === 'ask' ? 'click' : ''"
          >
            在线询价
          </p>
        </div>
      </div>
      <div class="detailed">
        <div id="one">
          <div class="one-left">
            <img src="../assets/shenxgian2@2x.png" alt="" />
          </div>
          <div class="one-right">
            <p class="line"></p>
            <p class="Parameter"><b>产品参数</b></p>
            <p class="odd">
              <span class="setwidth">型号（MHT-20A）</span
              ><span>材质（五金机箱钢化玻璃）</span>
            </p>
            <p class="even">
              <span class="setwidth">最大功率（2500瓦）</span
              ><span>电压（AC220 V50hz）</span>
            </p>
            <p class="odd">
              <span class="setwidth">尺寸（190×105×65cm）</span
              ><span>净重（190kg）</span>
            </p>
            <p class="even">
              <span class="setwidth"> 管理后台（手机，电脑）</span
              ><span>网络通信（wifi 4g）</span>
            </p>
            <p class="odd">
              <span class="setwidth">温控设置（10 40）</span
              ><span>屏幕尺寸（32英寸）</span>
            </p>
            <p class="even">
              <span class="setwidth"> 屏幕分辨率（1920×1080）</span
              ><span> 视频格式（MP4）</span>
            </p>
          </div>
        </div>
        <div id="two">
          <p class="line"></p>
          <p class="Parameter"><b>功能图解</b></p>
          <div class="img">
            <div class="part">
              <span><b>摄像头</b></span
              ><span class="yuan"></span><span class="dian"></span>
            </div>
            <div class="part-one">
              <span><b>钢化玻璃门</b></span
              ><span class="yuan"></span><span class="dian"></span>
            </div>
            <div class="part-two">
              <span><b>IC卡贴卡</b></span
              ><span class="yuan"></span><span class="dian"></span>
            </div>
            <div class="part-three">
              <span><b>门把手</b></span
              ><span class="yuan"></span><span class="dian"></span>
            </div>
            <div class="part-four">
              <span><b>电子价签</b></span
              ><span class="yuan"></span><span class="dian"></span>
            </div>
            <div class="part-five">
              <span class="dian"></span><span class="yuan right"></span
              ><span><b>双屏广告灯箱</b></span>
            </div>
            <div class="part-six">
              <span class="dian"></span><span class="yuan right"></span
              ><span><b>金属钣金机身</b></span>
            </div>
            <div class="part-seven">
              <span class="dian"></span><span class="yuan right"></span
              ><span><b>广告贴</b></span>
            </div>
            <div class="part-eight">
              <span class="dian"></span><span class="yuan right"></span
              ><span><b>四个万向轮</b></span>
            </div>
          </div>
        </div>
        <div class="commen">
          <p class="line"></p>
          <p class="Parameter"><b>使用流程</b></p>
          <div class="step">
            <p>
              <img src="../assets/buzhou1.png" alt="" /><br /><span
                >扫描屏幕二维码<br />同意免密支付</span
              >
            </p>
            <p>
              <img src="../assets/buzhou2.png" alt="" /><br /><span
                >机器门自动开启</span
              >
            </p>
            <p>
              <img src="../assets/buzhou3.png" alt="" /><br /><span
                >拿取产品</span
              >
            </p>
            <p>
              <img src="../assets/buzhou4.png" alt="" /><br /><span
                >关门，自动支付<br />交易完成</span
              >
            </p>
          </div>
        </div>
        <div class="commen">
          <p class="line"></p>
          <p class="Parameter"><b>产品特点</b></p>
          <div class="process">
            <P><span class="bgc">1</span><span>安全智能无接触生活产物</span></P>
            <P><span class="bgc">2</span><span>远程监控</span></P>
            <P><span class="bgc">3</span><span>后天管理系统</span></P>
            <P><span class="bgc">4</span><span>24小时营业</span></P>
            <P><span class="bgc">5</span><span>占地小</span></P>
            <P><span class="bgc">6</span><span>无人工</span></P>
            <P><span class="bgc">7</span><span>移动广告位</span></P>
            <P><span class="bgc">8</span><span>自助购买</span></P>
            <P
              ><span class="bgc">9</span><span>设备故障<br />自助报警</span></P
            >
          </div>
        </div>
        <div class="commen">
          <p class="line"></p>
          <p class="Parameter"><b>应用场景</b></p>
          <p class="scene">
            <img src="../assets/shequ (1).png" class="shequ" /><img
              src="../assets/shequ (2).png"
              alt=""
            />
          </p>
          <p class="scene mg-b">
            <img src="../assets/shequ (3).png" class="shequ" /><img
              src="../assets/shequ (4).png"
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
    <div class="limit">
      <!-- 我是中间一条线 -->
    </div>
    <div class="bottom">
      <div id="three">
         <div class="ask">
           <input type="text" placeholder="*姓名">
           <input type="tel" placeholder="*电话">
           <input type="text" placeholder="*公司名称">
         </div>
          <textarea placeholder="请输入您的留言内容..."></textarea>
           <input type="submit" value="提交" class="sub">
            
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "detailedfreshmachine",
  mounted() {},
  methods: {
    goAnchor(selector, n) {
      this.$el.querySelector(selector).scrollIntoView();
      this.$store.commit("Anchor", n);
    },
  },
};
</script>

<style scoped>
div.wrap {
  width: 100%;
}
div.top {
  width: 100%;
  border-top: 1px solid rgba(249, 249, 249, 1);
}
div.top-box {
  width: 62.5%;
  min-width: 1200px;
  margin: 0 auto;
  padding-bottom: 0.47rem;
}
.first {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.first a {
  text-decoration: none;
  font-size: 0.18rem;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(33, 33, 33, 1);
}

div.left img {
 
  margin-right: 0.47rem;
}
div.head {
  display: flex;
  align-items: flex-end;
}
/* .right{
  margin-top: -20px;
} */
.right p.name {
  font-size: 0.36rem;
  font-family: Microsoft YaHei;
  margin-bottom: 0.2rem;
}
.right p.txt {
  font-size: 0.18rem;
  font-family: Microsoft YaHei;
  line-height: 0.32rem;
  color: #6d6d6d;
}
div.kong {
  width: 100%;
  border-top: 1px solid rgba(218, 218, 218, 1);
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
div.kong-one {
  width: 100%;
  border-top: 1px solid rgba(218, 218, 218, 1);
  margin-bottom: 0.3rem;
  margin-top: 0;
}
.right .item {
  display: flex;
}
.right .item p {
  font-size: 0.18rem;
  font-family: Microsoft YaHei;
  color: rgba(109, 109, 109, 1);
  margin-bottom: 0.34rem;
  display: flex;
  justify-content: space-between;
}
.item .item-p {
  width: 2.6rem;
  margin-right: 1.25rem;
  box-sizing: border-box;
}
.item .item-span {
  width: 1.6rem;
  text-align: start;
  box-sizing: border-box;
}
.item .item-span-one {
  width: 1rem;
  box-sizing: border-box;
  text-align: start;
}
div.tel .getpress {
  display: block;
  width: 2rem;
  line-height: 0.72rem;
  background-color: #0063a5;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 0.18rem;
  font-family: Microsoft YaHei;
  border-radius: 5px;
}
div.tel p {
  display: flex;
  justify-content: space-between;
  font-family: Microsoft YaHei;
}
div.tel p .num {
  width: 4.36rem;
  height: 0.72rem;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.18rem;
  font-family: Microsoft YaHei;
  color: #212121;
  text-align: center;
  padding-top: 0.12rem;
  box-sizing: border-box;
}
div.tel p .num span b {
  font-size: 0.18rem;
}
div.tel p .num span {
  font-size: 0.14rem;
}
div.limit {
  width: 100%;
  height: 0.2rem;
  background-color: rgba(249, 249, 249, 1);
}
div.middle-nav {
  width: 100%;
  border-bottom: 1px solid rgba(231, 231, 231, 1);
  margin-bottom: 0.2rem;
}
div.middle-nav .p-total {
  line-height: 1.2rem;
  margin: 0 auto;
  width: 62.5%;
  min-width: 1200px;
  display: flex;
  justify-content: space-around;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
}
div.middle-nav .p-total p {
  font-family: Microsoft YaHei;
  font-size: 0.24rem;
}
div.middle-nav .p-total p.click {
  border-bottom: 1px solid #0063a5;
  color: #0063a5;
}
div.detailed {
  width: 62.5%;
  min-width: 1200px;
  margin: 0 auto;
}
div.detailed .one-left {
  /* margin-right: 1.5rem; */
  /* padding-left: 1.5rem; */
  box-sizing: border-box;
}
div.detailed .one-left img {
 
}
div.detailed #one {
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
}
div.detailed .one-right {
  text-align: start;
}
div.detailed .one-right .line {
  width: 0.35rem;
  border: 1px solid #0063a5;
  margin-bottom: 0.24rem;
}
div.detailed .one-right .Parameter {
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.4rem;
}
div.detailed .one-right .odd,
.even {
  width: 6rem;
  background-color: #f6f6f6;
  line-height: 0.6rem;
  box-sizing: border-box;
  padding-left: 0.1rem;
}
div.detailed .one-right .even {
  background-color: white;
  line-height: 0.8rem;
}
div.detailed .one-right p span {
  font-family: MicrosoftYaHei;
  font-size: 0.18rem;
}
div.detailed .one-right p span.setwidth {
  display: inline-block;
  width: 50%;
}
div.detailed #two {
  margin: 0 auto;
  text-align: center;
  position: relative;
}
div.detailed #two .line {
  margin: 0 auto;
  text-align: center;
  width: 0.35rem;
  border: 1px solid #0063a5;
  margin-bottom: 0.24rem;
}
div.detailed #two .Parameter {
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.3rem;
}
div.detailed #two .img {
  background-image: url(../assets/shengxian3@2x.png);
  background-position: center;
  background-repeat: no-repeat;
  width: 4.26rem;
  height: 7.6rem;

  margin: auto;
  background-size: cover;
  font-family: MicrosoftYaHei;
}
div.detailed #two .img div {
  display: flex;
  align-items: center;
}
div.detailed #two .img .part {
  position: absolute;
  left: 1.7rem;
  top: 1.1rem;
}
div.detailed #two .img .part-one {
  position: absolute;
  left: 2rem;
  top: 3.2rem;
}
div.detailed #two .img .part-two {
  position: absolute;
  left: 1.8rem;
  top: 4.2rem;
}
div.detailed #two .img .part-three {
  position: absolute;
  left: 3.3rem;
  top: 4.7rem;
}
div.detailed #two .img .part-four {
  position: absolute;
  left: 3rem;
  top: 5.8rem;
}
div.detailed #two .img .part-five {
  position: absolute;
  left: 7rem;
  top: 2rem;
}
div.detailed #two .img .part-six {
  position: absolute;
  left: 7.6rem;
  top: 3rem;
}
div.detailed #two .img .part-seven {
  position: absolute;
  left: 7.8rem;
  top: 4rem;
}
div.detailed #two .img .part-eight {
  position: absolute;
  left: 7.4rem;
  top: 8.3rem;
}
div.detailed #two .img b {
  font-size: 0.18rem;
  margin-right: 0.05rem;
}
div.detailed #two .img span.yuan {
  display: inline-block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background-color: #0063a5;
}
div.detailed #two .img span.dian {
  display: inline-block;
  border: 1px dotted #0063a5;
  width: 1.5rem;
}

div.detailed .commen {
  margin: 0 auto;
  text-align: center;
  margin-top: 1.5rem;
}
div.detailed .commen .line {
  margin: 0 auto;
  text-align: center;
  width: 0.35rem;
  border: 1px solid #0063a5;
  margin-bottom: 0.24rem;
}
div.detailed .commen .Parameter {
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.3rem;
}
div.bottom #three {
  width: 62.5%;
  min-width: 1200px;
  height: 500px;
  padding-top: 1rem;
  margin: 0 auto;
}
div.bottom #three .ask{
  display: flex;
  justify-content: space-between;
}
div.bottom #three .ask input{
  width: 30%;
    height: 0.5rem;
  background-color:rgba(243,243,243,1);
  border: none;
  outline: none;
  height: 0.72rem;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  padding-left: 0.18rem;
  box-sizing: border-box;
}
div.bottom  #three textarea{
  margin: auto;
   width: 100%;
  padding-top: 0.18rem;
    padding-left: 0.18rem;
  box-sizing: border-box;
  background-color:rgba(243,243,243,1);
   border: none;
  outline: none;
min-height: 2rem;
  margin-top: 0.18rem;
  resize: none;
   font-size: 0.18rem;
   overflow: hidden;
   font-family: MicrosoftYaHei;
}
div.bottom  #three .sub{
  width: 100%;
  background-color: rgba(0,99,165,1);
  line-height: 0.54rem;
  color: white;
  margin-top: 0.18rem;
  border: none;
  outline: none;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
}
div.detailed .commen {
  margin-top: 0.8rem;
}
div.detailed .commen .step {
  display: flex;
  justify-content: space-between;
}
div.detailed .commen .step p {
  color: #212121;
  font-family: MicrosoftYaHei;
  text-align: center;
  font-size: 0.18rem;
}
div.detailed .commen .step p img {
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
}
div.commen span.bgc {
  display: block;
  background-repeat: no-repeat;
  background-image: url("../assets/tedian@2x.png");
  height: 0.66rem;
  text-align: center;
  background-position: center;
  background-size: auto;
  line-height: 0.66rem;
  color: white;
  font-size: 0.24rem;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.45rem;
}
div.commen .process {
  display: flex;
  justify-content: space-around;
}
div.commen .process p {
  font-size: 0.18rem;
  width: 1.26rem;
  text-align: center;
  font-family: MicrosoftYaHei;
  color: #212121;
}
div.commen p.scene .shequ {
  margin-right: 0.23rem;
  margin-bottom: 0.18rem;
}
div.commen p.scene {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
div.commen p.mg-b {
  margin-bottom: 1rem;
}
</style>

