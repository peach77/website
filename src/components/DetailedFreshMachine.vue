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
                 <div class="left"><img src="../assets/shengxianji1@2x.png" alt=""></div>
                 <div class="right">
                   <p class="name">生鲜机</p>
                   <p class="txt">我们存储生鲜，你来传递美好。无人自助生鲜机将大数据与人们日常生活结合，为人们提供便捷、健康、新鲜的时蔬储存地，为人们美好生活不断努力奋进。</p>
                   <div class="kong"></div>
                   <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">型号</span><span class="item-span">MHT-20A</span>
                      </p>
                       <p>
                         <span class="item-span-one">尺寸</span><span class="item-span">190×105×65cm</span>
                      </p>
                    </div>
                    <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">屏幕尺寸</span><span class="item-span">32英寸</span>
                      </p>
                       <p>
                         <span class="item-span-one">材质</span><span class="item-span">五金机箱钢化玻璃</span>
                      </p>
                    </div>
                       <div class="item">
                      <p class="item-p">
                       <span class="item-span-one">净重</span><span class="item-span">190kg</span>
                      </p>
                       <p>
                         <span class="item-span-one">管理后台</span><span class="item-span">手机、电脑</span>
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
                    <img src="../assets/shenxgian2@2x.png" alt="">
                </div>
                <div class="one-right">
                    <p class="line"></p>
                    <p class="Parameter"><b>产品参数</b></p>
                    <p class="odd"><span class="setwidth">型号（MHT-20A）</span><span>材质（五金机箱钢化玻璃）</span></p>
                     <p class="even"><span class="setwidth">最大功率（2500瓦）</span><span>电压（AC220 V50hz）</span></p>
                     <p class="odd"><span class="setwidth">尺寸（190×105×65cm）</span><span>净重（190kg）</span></p>
                     <p class="even"><span class="setwidth"> 管理后台（手机，电脑）</span><span>网络通信（wifi 4g）</span></p>
                     <p class="odd"><span class="setwidth">温控设置（10 40）</span><span>屏幕尺寸（32英寸）</span></p>
                     <p class="even"><span class="setwidth"> 屏幕分辨率（1920×1080）</span><span> 视频格式（MP4）</span></p>
                </div>
            </div>
             <div  id="two">
                 <p class="line"> </p>
                <p class="Parameter"><b>功能图解</b></p>
                <div class="img">
                  <img src="../assets/shengxian3@2x.png" alt="">
                  <div class="part"><span><b>摄像头</b></span><span class="yuan"></span><span class="dian"></span></div>
                  <div class="part-one"><span><b>钢化玻璃门</b></span><span class="yuan"></span><span class="dian"></span></div>
                   <div class="part-two"><span><b>IC卡贴卡</b></span><span class="yuan"></span><span class="dian"></span></div>
                   <div class="part-three"><span><b>门把手</b></span><span class="yuan"></span><span class="dian"></span></div>
                    <div class="part-four"><span><b>电子价签</b></span><span class="yuan"></span><span class="dian"></span></div>
                     <div class="part-five"><span class="dian"></span><span class="yuan"></span><span><b>双屏广告灯箱</b></span></div>
                    <div class="part-six"><span class="dian"></span><span class="yuan"></span><span><b>金属钣金机身</b></span></div>
                     <div class="part-seven"><span class="dian"></span><span class="yuan"></span><span><b>广告贴</b></span></div>
                       <div class="part-eight"><span class="dian"></span><span class="yuan"></span><span><b>广告贴</b></span></div>
                </div>
            </div>
             <div class="commen">
               <p class="line"> </p>
                <p class="Parameter"><b>使用流程</b></p>
                <div class="step">
                    <p><img src="../assets/buzhou1.png" alt=""><br><span>扫描屏幕二维码<br>同意免密支付</span></p>
                   <p><img src="../assets/buzhou2.png" alt=""><br><span>机器门自动开启</span></p>
                   <p><img src="../assets/buzhou3.png" alt=""><br><span>拿取产品</span></p>
                    <p><img src="../assets/buzhou4.png" alt=""><br><span>关门，自动支付<br>交易完成</span></p>
                </div>
            </div>
            <div class="commen">
                <p class="line"> </p>
                <p class="Parameter"><b>产品特点</b></p>
            </div>
             <div class="commen">
                <p class="line"> </p>
                <p class="Parameter"><b>应用场景</b></p>
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
  margin-bottom: 20px;
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
  margin-right: 1.5rem;
  padding-left: 1.5rem;
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
  width: 50%;
}
div.detailed #two{
  margin: 0 auto;
  text-align: center;

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
  position: relative;
}
div.detailed #two .img img{
    border: 1px dotted rgba(33,33,33,1);

}
/* //这是共同属性 */
div.detailed #two .img .part,.part-one,.part-two,.part-three,.part-four,.part-five,.part-six,.part-seven,.part-eight{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.2rem;
  left: 1.6rem;
}
/* 这句话定位不一样 */
div.detailed #two .img .part-one{
  position: absolute;
  top:2.5rem;
  left: 2rem;
}
div.detailed #two .img .part-two{
  position: absolute;
  top:3.3rem;
  left: 1.8rem;
}
div.detailed #two .img .part-three{
  position: absolute;
  top:3.8rem;
  left: 3.2rem;
}
div.detailed #two .img .part-four{
  position: absolute;
  top:4.9rem;
  left: 2.9rem;
}
div.detailed #two .img .part-five{
  position: absolute;
  top:1rem;
  left: 7rem;
}
div.detailed #two .img .part-six{
  position: absolute;
  top:2rem;
  left:7.8rem;
}
div.detailed #two .img .part-seven{
  position: absolute;
  top:4rem;
  left:8rem;
}
div.detailed #two .img .part-eight{
   position: absolute;
  top:7.4rem;
  left:7.4rem;
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
</style>

