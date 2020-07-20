<template>
  <div class="wrap" >
    <div class="top">
      <div class="top-box">
          <div class="name">
              <p class="first"> 
                <router-link to="/">产品中心 &gt;</router-link>
              <router-link to="/">我们的产品 &gt;</router-link>
              <router-link to="/">取药机</router-link>
              </p>
              <div class="head">
                 <div class="left"><img src="../assets/untitled.89@2x (1).png" alt=""></div>
                 <div class="right">
                   <p class="name">智慧取药机</p>
                   <p class="txt">趣云科技， 家门口的智慧药房。通过连接医院HIS系统，将趣云取药机替代传统药房，为医院、患者节省大量人工以及场地问题。 </p>
                   <div class="kong"></div>
                   <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">尺寸</span><span class="item-span">208×158×103cm</span>
                      </p>
                       <p>
                         <span class="item-span-one">恒温范围</span><span class="item-span">2℃~30℃可调</span>
                      </p>
                    </div>
                    <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">触摸屏</span><span class="item-span">32英寸</span>
                      </p>
                       <p>
                         <span class="item-span-one">出货方式</span><span class="item-span">传送带运输</span>
                      </p>
                    </div>
                       <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">恒温范围</span><span class="item-span">2℃~30℃可调</span>
                      </p>
                       <p>
                         <span class="item-span-one">工作电压</span><span class="item-span">220V 50/60hz</span>
                      </p>
                    </div>
                   
                   <div class="kong-one"></div>
                   <div class="tel">
                     <p><router-link to='/' class="getpress">获取底价</router-link>
                     <a v-bind:href="'tel:'+4000235580" class="num">
                                <span><b>400-0235580</b></span><br>
                                <span>拨打热线了解一下</span>
                       </a></p>
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
              <p @click="goAnchor('#one','parameter')" :class="$store.state.Anchor==='parameter'?'click':''">产品参数</p>
            <p @click="goAnchor('#two','details')" :class="$store.state.Anchor==='details'?'click':''">产品详情</p>
            <p @click="goAnchor('#three','ask')" :class="$store.state.Anchor==='ask'?'click':''">在线询价</p>
           </div>
        </div>
        <div class="detailed">
            <div  id="one">
                <div class="one-left">
                    <img src="../assets/untitled.87@2x.png" alt="">
                </div>
                <div class="one-right">
                    <p class="line"></p>
                    <p class="Parameter"><b>产品参数</b></p>
                   <p class="odd"><span class="setwidth">尺寸（190×105×65cm）</span><span>工作电压（220 V50hz）</span></p>
                     <p class="even"><span class="setwidth">出货方式（传送带运输）</span><span> 支付方式（支付宝、微信、刷脸、NFC）</span></p>
                     <p class="odd"><span class="setwidth"> 触摸屏（32寸）</span><span> 制冷功率（800W） </span></p>
                     <p class="even"><span class="setwidth"> 恒温范围（2℃~30℃可调）</span><span> 恒湿范围（45%~75%RH）</span></p>
                     <p class="odd"><span class="setwidth">取药方式（自动升降门）</span><span>网络通信（wifi 4g）</span></p>
                     <p class="even"><span class="setwidth"> 屏幕分辨率（1920×1080）</span><span> 视频格式（MP4）</span></p>
                </div>
            </div>
             <div  id="two">
                 <p class="line"> </p>
                <p class="Parameter"><b>功能图解</b></p>
                <div class="img">
                
                  <div class="part"><span><b>钣金机身</b></span><span class="yuan"></span><span class="dian"></span></div>
                  <div class="part-one"><span><b>32英寸高清多媒体触摸屏</b></span><span class="yuan"></span><span class="dian"></span></div>
                   <div class="part-two"><span><b>广告字帖</b></span><span class="yuan"></span><span class="dian"></span></div> 
                     <div class="part-three"><span class="dian"></span><span class="yuan right"></span><span><b>音箱</b></span></div>
                    <div class="part-four"><span class="dian"></span><span class="yuan  right"></span><span><b>摄像头</b></span></div>
                     <div class="part-five"><span class="dian"></span><span class="yuan  right"></span><span><b>操作屏</b></span></div>
                       <div class="part-six"><span class="dian"></span><span class="yuan  right"></span><span><b>扫描口</b></span></div>
                        <div class="part-seven"><span class="dian"></span><span class="yuan  right"></span><span><b>取药口</b></span></div>
                       <div class="part-eight"><span class="dian"></span><span class="yuan  right"></span><span><b>六个福马轮</b></span></div>
                </div>
            </div>
             <div class="commen">
               <p class="line"> </p>
                <p class="Parameter"><b>使用流程</b></p>
                <div class="step">
                    <p><img src="../assets/1@2x (3)me.png" alt=""><br><span>点击屏幕</span></p>
                   <p><img src="../assets/2@2xme.png" alt=""><br><span>选中药物</span></p>
                   <p><img src="../assets/3@2xme.png" alt=""><br><span>进行支付（一卡通、<br> 医保卡、二维码）</span></p>
                    <p><img src="../assets/4@2xme.png" alt=""><br><span>机器自动出药 交易完成</span></p>
                </div>
            </div>
              <div class="commen">
                <p class="line"> </p>
                <p class="Parameter"><b>工作流程</b></p>
                <div class="flow">
                  <p><img src="../assets/huanzhe@2x.png" alt=""><br><span>患者</span></p>
               
                  <p><img src="../assets/HISxitong@2x.png" alt=""><br><span>医院HIS系统</span></p>
                
                  <p><img src="../assets/chufangxinxi@2x.png" alt=""><br><span>医院联体单位处方信息</span></p>
                 
                  <p><img src="../assets/chufangjiesuan@2x.png" alt=""><br><span>处方结算</span></p>
                 
                   <p><img src="../assets/zifei@2x (1).png" alt=""><br><span>自费/医保</span></p>
                   
                   <p><img src="../assets/quyaowancheng@2x (1).png" alt=""><br><span>自行取药，交易完成</span></p>
                </div>
            </div>
            <div class="commen">
                <p class="line"> </p>
                <p class="Parameter"><b>产品特点</b></p>
                <div class="process">
                  <P><span class="bgc">1</span><span>远程监控</span></P>
                  <P><span class="bgc">2</span><span>后台系统管理</span></P>
                  <P><span class="bgc">3</span><span>药品云平台管理系统</span></P>
                  <P><span class="bgc">4</span><span>防盗系统</span></P>
                  <P><span class="bgc">5</span><span>票证打印系统</span></P>
                  <P><span class="bgc">6</span><span>占地小</span></P>
                  <P><span class="bgc">7</span><span>自助购买</span></P>
                  <P><span class="bgc">8</span><span>故障检测报警系统</span></P>
                
                </div>
            </div>
             <div class="commen">
                <p class="line"> </p>
                <p class="Parameter"><b>应用场景</b></p>
                <p class="scene"><img src="../assets/changjing@2x.png" class="shequ"><span class="hospital">
                  <span><b>医院</b></span><br><br>
                  <span>需联合医院系统目前仅支持摆放到医院</span></span></p>
                
            </div>
        </div>
    </div>
    <div class="limit">
      <!-- 我是中间一条线 -->
    </div>
    <div class="bottom">
         <div id="three">
            <h1>我是询问合作</h1>
         </div>
    </div>
  </div>
</template>

<script>
export default {
   name:"detailedfreshmachine",
   mounted () {
       
   },
   methods:{
      goAnchor(selector,n) {
      this.$el.querySelector(selector).scrollIntoView();
      this.$store.commit('Anchor',n)
      }
     
   }
}
</script>

<style scoped>

div.wrap{
  width: 100%;
}
div.top{
  width: 100%;
  border-top: 1px solid rgba(249,249,249,1);
}
div.top-box{
  width: 62.5%;
  margin: 0 auto;
  padding-bottom: 0.47rem;
}
 .first{
   margin-top: 0.4rem;
   margin-bottom: 0.4rem;
 }
 .first a {
  text-decoration: none;
  font-size: 0.18rem;
font-family:Microsoft YaHei;
font-weight:400;
color:rgba(33,33,33,1);

} 
div.left{
  width: auto;
  /* width: 5rem; */
  height: 4.75rem;
  background-color:rgba(238,238,238,1);
 padding-left: 0.5rem;
  line-height: 4.75rem;
  margin-right: 0.5rem;
  box-sizing: border-box;
}
div.left img{
  
  border: 1px dotted rgba(33,33,33,1);
  margin-right: 0.47rem;
}
div.head{
  display: flex;
  align-items: flex-end;
  
}
/* .right{
  margin-top: -20px;
} */
.right p.name{
  font-size: 0.36rem;
  font-family:Microsoft YaHei;
  margin-bottom: 0.2rem;
}
.right p.txt{
  font-size: 0.18rem;
   font-family:Microsoft YaHei;
   line-height: 0.32rem;
   color: #6D6D6D;
}
div.kong{
  width: 100%;
  border-top: 1px solid rgba(218,218,218,1);
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
div.kong-one{
    width: 100%;
  border-top: 1px solid rgba(218,218,218,1);
  margin-bottom: 0.3rem;
  margin-top:0;
}
.right .item{
 display: flex;
}
.right .item p{
  font-size: 0.18rem;
  font-family:Microsoft YaHei;
color:rgba(109,109,109,1);
margin-bottom: 0.34rem;
display: flex;
justify-content: space-between;
}
.item .item-p{
  width: 2.6rem;
  margin-right: 1.25rem;
  box-sizing: border-box;
  
}
.item .item-span{
  width: 1.6rem;
  text-align: start;
    box-sizing: border-box;
}
.item .item-span-one{
  width: 1rem;
   box-sizing: border-box;
     text-align: start;
}
div.tel .getpress{
  display: block;
  width: 2rem;
  line-height: 0.72rem;
  background-color: #0063A5;
  color:white;
  text-align: center;
  text-decoration: none;
  font-size: 0.18rem  ;
   font-family:Microsoft YaHei;
   border-radius: 5px;
}
div.tel p{
  display: flex;
  justify-content: space-between  ;
   font-family:Microsoft YaHei;
  
    
}
div.tel p .num{
  width: 4.36rem;
 height: 0.72rem;
  background-color: rgba(245,245,245,1);
   border-radius: 5px;
   text-decoration: none;
   font-size: 0.18rem;
    font-family:Microsoft YaHei;
    color: #212121;
   text-align: center;
   padding-top: 0.12rem;
   box-sizing: border-box;
  
   
  
}div.tel p .num span b{
   font-size: 0.18rem;
}
div.tel p .num span{
  font-size: 0.14rem;
}
div.limit{
  width: 100%;
  height: 0.2rem;
  background-color: rgba(249,249,249,1);
}
div.middle-nav{
  width: 100%;
  border-bottom: 1px solid rgba(231,231,231,1);
  margin-bottom:0.2rem;
}
div.middle-nav .p-total{
  line-height: 1.2rem;
  margin: 0 auto;
  width: 62.5%;
  display: flex;
  justify-content: space-around;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
 
}
div.middle-nav .p-total p{

    font-family:Microsoft YaHei;
  font-size: 0.24rem;
}
div.middle-nav .p-total p.click{
  border-bottom: 1px solid #0063A5;
  color: #0063A5;
}
div.detailed{
  width: 62.5%;
  margin: 0 auto;
}
div.detailed  .one-left {
  margin-right: 0.2rem;
 
   box-sizing: border-box;
}
div.detailed  .one-left img{
   border: 1px dotted rgba(33,33,33,1);
}
div.detailed #one{
  margin-top: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 2rem;
}
div.detailed .one-right{
 text-align: start;
 
}
div.detailed .one-right .line{
  width: 0.35rem;
  border: 1px solid #0063A5;
  margin-bottom: 0.24rem;
}
div.detailed .one-right .Parameter{
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.4rem;
}
div.detailed .one-right .odd,.even{
  width: 6rem;
  background-color: #F6F6F6;
  line-height: 0.6rem;
  box-sizing: border-box;
  padding-left: 0.1rem;
}
div.detailed .one-right .even{
  background-color: white;
  line-height: 0.8rem;
}
div.detailed .one-right p span{
   font-family: MicrosoftYaHei;
   font-size: 0.18rem;
}
div.detailed .one-right p span.setwidth{
  display: inline-block;
  width: 44%;
}
div.detailed #two{
  margin: 0 auto;
  text-align: center;
position: relative;

}
div.detailed #two  .line{
  margin: 0 auto; 
 text-align: center;
  width: 0.35rem;
  border: 1px solid #0063A5;
  margin-bottom: 0.24rem;
  
}
div.detailed #two .Parameter{
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 1rem;
}
div.detailed #two .img{
  background-image: url(../assets/yaoji@22x.png);
  background-position: center;
  background-repeat: no-repeat;
  width: 5.91rem;
  height: 6.1rem;
  border: 1px dotted #0063A5;
  margin: auto;
    background-size: cover;
    font-family: MicrosoftYaHei;
}
div.detailed #two .img div{
  display: flex;
  align-items: center;
}

div.detailed #two .img .part{
     position: absolute;
  top:2rem;
  left: 2rem;
}
div.detailed #two .img .part-one{
  position: absolute;
  top:4rem;
  left: 0.4rem;
}
div.detailed #two .img .part-two{
  position: absolute;
  top:5.8rem;
  left: 2rem;
}
div.detailed #two .img .part-three{
  position: absolute;
 top:2.25rem;
  left:7.5rem;
}
div.detailed #two .img .part-four{
  position: absolute;
 top:3.2rem;
  left:6.4rem;
}
div.detailed #two .img .part-five{
  position: absolute;
  top:3.9rem;
  left:7.2rem;
}
div.detailed #two .img .part-six{
  position: absolute;
   top:4.4rem;
  left:7.3rem;
}
div.detailed #two .img .part-seven{
  position: absolute;
  top:5.4rem;
 left:7rem;
}
div.detailed #two .img .part-eight{
   position: absolute;
  top:7.2rem;
  left:7.5rem;
}
div.detailed #two .img b{
  font-size: 0.18rem;
  margin-right: 0.05rem;
}
div.detailed #two .img span.yuan{
  display: inline-block;
  width: 0.12rem;height: 0.12rem;
  border-radius: 50%;
  background-color: #0063A5;
}
div.detailed #two .img span.dian{
   display: inline-block;
   border: 1px dotted #0063A5;
  width: 1.5rem;
   
}

div.detailed .commen{
  margin: 0 auto;
  text-align: center;
  margin-top: 1.5rem;

}
div.detailed .commen .line{
  margin: 0 auto; 
 text-align: center;
  width: 0.35rem;
  border: 1px solid #0063A5;
  margin-bottom: 0.24rem;
}
div.detailed .commen .Parameter{
  font-size: 0.28rem;
  color: #212121;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.3rem;
}
div.bottom #three{

  width: 62.5%;
  height: 500px;
  background-color: red;
  margin: 0 auto;
}
div.detailed .commen{
  margin-top:0.8rem;
}
div.detailed .commen .step{
  display: flex;
  justify-content: space-between;
}
div.detailed .commen .step p{
  color: #212121;
  font-family: MicrosoftYaHei;
  text-align: center;
  font-size: 0.18rem;
}
div.detailed .commen .step p img{
 margin-bottom: 0.25rem;
 margin-top: 0.5rem;
}
div.commen span.bgc{
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
  margin-bottom: 0.25rem;
}
div.commen .process{
   display: flex;
   justify-content: space-around;
}
div.commen .process p{
font-size: 0.18rem;
  width: 1.3rem;
  text-align: center;
    font-family: MicrosoftYaHei;  
    color: #212121;
    font-size: 0.14rem;
}div.commen p.scene .shequ{
   z-index: 10;
 
}
div.commen p.scene {
  display: flex;
  margin-bottom: 1rem;
  
  align-items: flex-end;
}div.commen p.scene .hospital{
 
  width: 4.5rem;
  height: 5.2rem;
  background-color: #EEEEEE;
  padding: 0 0.6rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  text-align: left;
  padding-top: 1.5rem;
  
}
div.commen .flow{
align-items: baseline;

  display: flex;
  justify-content: space-around;
  text-align: center;

}
div.commen .flow img{
  border:1px dotted rgba(0,99,165,1);
  margin-bottom: 0.5rem;
}
/* div.commen .flow p.line{
 
height: 0;
width: 0.9rem;
 border-top:1px dotted rgba(0,99,165,1); 
 border-bottom:1px dotted rgba(0,99,165,1);
 margin: 0;
} */
div.commen .flow p span{
  font-size: 0.18rem;
    font-family: MicrosoftYaHei;  
    color: #212121;
}
</style>

