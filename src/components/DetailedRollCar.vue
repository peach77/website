<template>
  <div class="wrap" >
    <div class="top">
      <div class="top-box">
          <div class="name">
              <p class="first"> 
                <router-link to="/">产品中心 &gt;</router-link>
              <router-link to="/">我们的产品 &gt;</router-link>
              <router-link to="/">翻滚车</router-link>
              </p>
              <div class="head">
                 <div class="left"><img src="../assets/fangunche@2x.png" alt=""></div>
                 <div class="right">
                   <p class="name">翻滚车双人版</p>
                   <p class="txt">将车的体验感升级加入了过山车的元素，设计出可供娱乐性质的翻滚球体 <br><br></p>
                   <div class="kong"></div>
                   <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">尺寸                          </span><span class="item-span">140×175×140cm</span>
                      </p>
                       <p>
                         <span class="item-span-one">电池电压      </span><span class="item-span"> 超威电池48V20AH</span>
                      </p>
                    </div>
                    <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">充电时长      </span><span class="item-span"> 6H</span>
                      </p>
                       <p>
                         <span class="item-span-one">续航       </span><span class="item-span">        5H</span>
                      </p>
                    </div>
                       <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">启动方式      </span><span class="item-span"> 遥控启动 </span>
                      </p>
                       <p>
                         <span class="item-span-one">适载人群      </span><span class="item-span">  1.2M-1.85M,200KG以下</span>
                      </p>
                    </div>
                   
                   <div class="kong-one"></div>
                   <div class="tel">
                     <p><span class="getpress" @click="goAnchor('#three')">获取底价</span>
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
                    <img src="../assets/fangunche2@2x.png" alt="">
                </div>
                <div class="one-right">
                    <p class="line"></p>
                    <p class="Parameter"><b>产品参数</b></p>
                    <p class="odd"><span class="setwidth"> 尺寸（140×175×140cm）</span><span>电池电压（超威电48V20AH）</span></p>
                     <p class="even"><span class="setwidth">动力系统（300W双电机）</span><span>充电时长（充电6H）</span></p>
                     <p class="odd"><span class="setwidth"> 续航时长（续航5H）</span><span>启动方式（遥控启动）</span></p>
                     <p class="even"><span class="setwidth"> 灯光音乐（LED炫彩灯光 智能语音音乐）</span><span>适载人群（1.2M-1.85M，100KG以下）</span></p>
                
                </div>
            </div>
             <div  id="two">
                 <p class="line"> </p>
                <p class="Parameter"><b>功能图解</b></p>
                <div class="img">
                  <div class="part"><span><b>顶棚</b></span><span class="yuan"></span><span class="dian"></span></div>
                  <div class="part-one"><span><b>控制面板</b></span><span class="yuan"></span><span class="dian special"></span></div>
                   <div class="part-two"><span><b>安全护栏</b></span><span class="yuan"></span><span class="dian special"></span></div>
                    <div class="part-three"><span><b>中控盒</b></span><span class="yuan"></span><span class="dian special"></span></div>
                     <div class="part-four"><span class="dian"></span><span class="yuan right"></span><span><b>双人安全座椅</b></span></div>
                      <div class="part-five"><span class="dian"></span><span class="yuan right"></span><span><b>防撞横梁</b></span></div>
                       <div class="part-six"><span class="dian special"></span><span class="yuan right"></span><span><b>彩灯</b></span></div>
                      
                   
                     
                </div>
            </div>
        
            <div class="commen ">
                <p class="line"> </p>
                <p class="Parameter"><b>产品特点</b></p>
                <div class="process">
                  <P><span class="bgc">1</span><span>全球首创</span></P>
                  <P><span class="bgc">2</span><span>可自行设置<br>设备运行时间</span></P>
                  <P><span class="bgc">3</span><span>360°无死角遥控</span></P>
                  <P><span class="bgc">4</span><span>人体工程学<br>结构赛车真皮座椅</span></P>
                   <P><span class="bgc">5</span><span>四点式安全带</span></P>
                  <P><span class="bgc">6</span><span>一键停止</span></P>
                  <P><span class="bgc">7</span><span>适应多个游乐场合</span></P>
                  <P><span class="bgc">8</span><span>美观结实</span></P>
                </div>
            </div>
             <div class="commen">
                <p class="line"> </p>
                <p class="Parameter mg-b"><b>应用场景</b></p>
                <p class="scene"><img src="../assets/rollcar1.png" class="shequ"><img src="../assets/rollcar2.png" alt=""></p>
                <p class="scene mg-b"><img src="../assets/rollcar3.png" class="shequ"><img src="../assets/rollcar4.png" alt=""></p>
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
  margin-right: 0.8rem;
  box-sizing: border-box;
  
}
.item .item-span{
  width: 2.2rem;
  text-align: start;
  box-sizing: border-box;
}
.item .item-span-one{
  width:1.2rem;
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
  margin-bottom: 1rem;
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
  margin-right:0.5rem;
 
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
  margin-bottom: 1rem;
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
  width: 7rem;
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
  width: 50%;
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
  margin-bottom: 0.3rem;
}
div.detailed #two .img{
  background-image: url(../assets/fangunche3@2x.png);
  background-position: center;
  background-repeat: no-repeat;
  width: 6.8rem;
  height: 10rem;
  border: 1px dotted #0063A5;
  margin: auto;
    background-size: cover;
   
}
div.detailed #two .img div{
  display: flex;
  align-items: center;
  font-family: MicrosoftYaHei;
}
div.detailed #two .img .part{
  position: absolute;
  left:2.4rem;
  top: 1.8rem;
}
div.detailed #two .img .part-one{
   position: absolute;
  left:1.6rem;
  top:3.4rem;
}
div.detailed #two .img .part-one .special{
  width: 3.5rem;
} 
div.detailed #two .img .part-two{
    position: absolute;
  left:1.2rem;
  top:3.8rem;
}
div.detailed #two .img .part-two   .special{
  width: 3rem;
} 
div.detailed #two .img .part-three{
    position: absolute;
  left:1.2rem;
  top:4.2rem;
}
div.detailed #two .img .part-three .special{
  width: 2.6rem;
}
div.detailed #two .img .part-four{
    position: absolute;
  left:7.6rem;
  top:3rem;
} 
div.detailed #two .img .part-five{
    position: absolute;
   left:8.2rem;
  top:3.5rem;
}
div.detailed #two .img .part-six{
  position: absolute;
   left:8.2rem;
  top:4.8rem;
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
  margin-bottom: 0.45rem;
}
div.commen .process{
  margin-top: 1rem;
   display: flex;
   justify-content: space-around;
   font-family: MicrosoftYaHei;
   color: #212121;
}
div.commen .process p{
font-size: 0.18rem;
  width: 1.6rem;
  text-align: center;
    font-family: MicrosoftYaHei;  
    color: #212121;
}div.commen p.scene .shequ{
  margin-right: 0.23rem;
  margin-bottom: 0.18rem;
}
div.commen p.scene {
  display: flex;
  justify-content: center;
  align-items: baseline;
  
 
}

</style>

