<template>
   <div class="wrap" v-if="$route.path==='/AboutUs/CorporateCulture'">
      <div class="bgc-banner">
        <img src="../assets/gongsijieshao.png" alt="">
     </div>
     <div class="box">
        <div class="item-list">
                        <router-link to='/AboutUs/CompanyProfile'><img src="../assets/jieshao@2x.png" alt=""><span>公司介绍</span></router-link>
                        <router-link to='/AboutUs/CorporateCulture' class="only"  ><img src="../assets/wenhua@2x.png" alt=""><span>企业文化</span></router-link>
                        <router-link to='/AboutUs/Honour' ><img src="../assets/zizhi@2x.png" alt=""><span>荣誉资质</span></router-link>
                       
            </div>
             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云使命</b></p>
                  <p class="line"></p>
                  <p class="letter">MISSION</p>
                </div>
       
          </div> 
          <div class="mission">
              <img src="../assets/shiming.png" alt="">
              <div class="upgrade">
                <br><br>
                <p class="xian"></p> <br><br>
                <p><b>带动行业升级，共创物联生活 </b></p><br>
                <p class="txt"> • 这是趣云作为商业机构存在的意义和动机，也是趣云必须承担的责任和义务。将企业使命与行业进步和社会发展紧紧连在一起，表达了趣云在促进整个社会的文明与进步中求得企业发展的价值取向，体现了趣云人的崇高追求。<br><br>
• 行业进步将推进行业发展，行业发展将改变消费习惯。趣云将“科技立身”作为持续发展的信条，在自身发展的同时引领行业向良性正规的方向发展，最终实现全球物联生活的大目标。
                            </p>
              </div>
          </div> 

     </div>
     <div class="dream">
         <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云愿景</b></p>
                  <p class="line"></p>
                  <p class="letter">VISION</p>
                </div>
       
          </div> 
     </div>
      <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云价值观</b></p>
                  <p class="line"></p>
                  <p class="letter">SENSE OF WORTH</p>
                </div>
       
        </div> 
        <div class="carousel">
            <div class="p-list">
            <p  @click="BtnSwitch('one')" :class="$store.state.switch==='one'?'active':''">诚实守信</p>
            <p @click="BtnSwitch('two')" :class="$store.state.switch==='two'?'active':''">以人为本</p>
            <p @click="BtnSwitch('three')" :class="$store.state.switch==='three'?'active':''">工匠精神</p>
            <p @click="BtnSwitch('four')" :class="$store.state.switch==='four'?'active':''">持续创新</p>
            </div>
            <div class="show-one" v-show="$store.state.switch==='one'">
              <img src="../assets/chengxin.png" alt=""><p><br><br><br><span class="line"></span><br><br><br><span><b>诚实守信</b></span><br><br><span class="txt">崇尚公平正义，敬畏法纪，坚守法律和道德底线。遵守商业伦理与契约精神，维护利益相关方合法权益，信守承诺，知行合一。倡导真诚坦率的人际沟通，不唯上、不唯书、不奉承，构建简单透明的管理氛围。</span></p>
            </div>
            <div class="show-two" v-show="$store.state.switch==='two'">
               <img src="../assets/yirenweiben.png" alt=""><p><br><br><br><span class="line"></span><br><br><br><span><b>以人为本</b></span><br><br><span class="txt">尊重人的价值，开发人的潜能，升华人的心灵，从生活、情感、工作环节关爱和善待员工、为员工构建价值实现的平台，共享发展成果。顺应并满足人性的合理需求，倡导积极向上、绿色健康的生活方式，为客户提供优质的产品与服务。心怀感恩，谦卑行事，强调均衡与可持续发展，追求多方合作共赢以及人与自然、社会的和谐共生。</span></p>
            </div>
            <div class="show-three" v-show="$store.state.switch==='three'">
               <img src="../assets/chengxin.png" alt=""><p><br><br><br><span class="line"></span><br><br><br><span><b>工匠精神</b></span><br><br><span class="txt">从业者基于对职业的敬畏和热爱而产生的一种全身心投入的认认真真、尽职尽责的职业精神状态；从业者对每件产品、每道工序都凝神聚力、精益求精、追求极致的职业品质；内心笃定而着眼于细节的耐心、执着、坚持的精神；强调执着、坚持、专注甚至是陶醉、痴迷，但绝不等同于因循守旧、拘泥一格的“匠气”，其中包括着追求突破、追求革新的创新内蕴。</span></p>
            </div>
            <div class="show-four" v-show="$store.state.switch==='four'">
               <img src="../assets/chuangxin.png" alt=""><p><br><br><br><span class="line"></span><br><br><br><span><b>持续创新</b></span><br><br><span class="txt">大力培育创新体系，健全激励机制和容错机制，营造开放包容的氛围，持续提升创新能力。顺时应势，主动变革，勇于颠覆自我，不断寻求商业模式、技术、管理、产品与服务的全新突破。鼓励创新思维，坚持持续学习，善于借鉴先进模式、经验与方法，实现创新在基层，创新在岗位，人人创新、全员创新。</span></p>
            </div>
           
        </div>
        <div class="idea">
                   <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云理念</b></p>
                  <p class="line"></p>
                  <p class="letter">IDEA</p>
                </div>
       
                </div> 
               <div class="quality">
                 <div class="txt"> <p ><span>质量理念：打造精品，追求卓越 </span><span>研发理念：行业信服，领先市场 </span></p>
                 <p><span>生产理念：统筹运作，精准高效</span><span>安全理念：生命，是第一生产力</span></p>
                <p><span>服务理念：以客户为中心，倡导真诚</span><span>用人理念：人尽其才，才尽其用</span></p>
               <p><span>营销理念：因为专业，所以突出</span><span> 发展理念：夯实基础、把握规律</span></p></div>
               </div>
         </div>  
         <div class="mind">
               <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云精神</b></p>
                  <p class="line"></p>
                  <p class="letter">SPIRIT</p>
                </div>
       
            </div> 
            <div class="four-box">
                  <div class="first">
                      <div class="first-i">
                          <img src="../assets/01@2x.png" alt="">
                          <p>
                            <span class="line"></span><br><br>
                          <span><b>求实</b></span><br><br>
                          <span class="set">

关注基础，脚踏实地，崇尚实干，讲求实效。<br>
注重实践，尊重科学，实事求是，理性客观。<br>
胸怀坦荡，处事公正，说到做到，表里如一。<br>
                            </span>
                            </p>
                      </div>
                      <div class="first-ii">
                             <img src="../assets/02@2x.png" alt="">
                          <p>
                            <span class="line"></span><br><br>
                          <span><b>专业</b></span><br><br>
                          <span class="set">

精通本职，胜任岗位，严谨细致，精益求精。<br>
热爱工作，全情投入，高效优质，引领创新。<br>
  行动学习，持续进步，超越自我，追求卓越。<br>
                            </span>
                            </p>
                      </div>
                  </div>
                  <div class="second">
                       <div class="first-iii">
                           <img src="../assets/03@2x.png" alt="">
                          <p>
                            <span class="line"></span><br><br>
                          <span><b>勤勉</b></span><br><br>
                          <span class="set">

                             


                            
   勤能补拙，努力工作，不怕吃苦，踏实能干。<br>
努力不懈，勤劳不懈，认认真真，熟能生巧。<br>
乐于创造，好学苦练，举一反三，励志高远。<br>
                            </span>
                            </p>
                      </div>
                       <div class="first-iiii">
                           <img src="../assets/04@2x.png" alt="">
                          <p>
                            <span class="line"></span><br><br>
                          <span><b>奉献</b></span><br><br>
                          <span class="set">

                                


                            
传承文化，牢记使命，忠于职守，爱岗敬业。<br>
大局为重，勇于担当，组织为先，不求私利。<br>
阳光向上，拼搏进取，以身作则，永葆激情。<br>
                            </span>
                            </p>
                      </div>
                  </div>

            </div>
           
           </div>    
      
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  name:'corporateculture',
 methods: {
  BtnSwitch(n) {
    this.$store.commit("BtnSwitch", n);
  }
},
}
</script>

<style scoped>
div.wrap{
  width: 100%;
}
.bannerImg {
  width: 100%;
  height: 31vw;
  min-height: 3.71rem;
}
div.bgc-banner img{
  max-width: 100%;
}
div.box{
  width: 62.5%;
  margin: 0 auto;
  box-sizing: border-box;
}
div.item-list{
  display: flex;
}
div.item-list a{
  flex: auto;
  height: 1.2rem;
  line-height: 1.2rem;
  background-color: white;
  color: #0063A5;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;

}
div.item-list a img{
  margin-right: 0.15rem;
}
div.item-list a.only{
  font-weight: bold;
 
  height: 1.2rem;
   flex: auto;
  line-height: 1.2rem;
  background-color: #0063A5;
  color: white;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  text-align: center;
  text-decoration: none;
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
  margin-bottom: 1.34rem;
}
div.mission{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}
div.mission img{
  margin-right: 1.1rem;
}
div.upgrade{
 font-size: 0.18rem;
 font-family:  MicrosoftYaHei ;
}
div.upgrade .xian{
  width: 0.3rem;
  border: 1px solid rgba(0,99,165,1);
} 
 div.upgrade .txt{
  line-height: 0.3rem;
 }
div.dream{
  background-image: url('../assets/yuanjing.png');


   height: 7.2rem;
  /* height: 31vw;
  min-height: 3.71rem; */
   background-size: cover;
}
div.dream .wrap-box{
  color: white;
}
div.dream  .line{
  background:white;
}
div.dream .circle{
   display:inline-block;
    width: 0.1rem;
  height: 0.1rem;
  background: rgba(0,99,165,0.1);
  border-radius: 50%;
  border: 4px solid white;
  margin-top: 0.6rem;
  margin-bottom: 0.12rem;
}
div.carousel {
  width: 62.5%;
  margin: auto;
  margin-bottom: 1.3rem;
 
}
div.carousel .p-list{
  display: flex;
  justify-content: space-around;
  padding: 0 2rem;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  margin-bottom: 0.8rem;
}
div.carousel .p-list p{
     width: 1.04rem;
    background-color:white;
    text-align: center;
    line-height: 0.4rem;
    color: black;
}
div.carousel .p-list .active{
    width: 1.04rem;
    background-color: rgba(0,99,165,1);
    text-align: center;
    line-height: 0.4rem;
    color: white;
}
div.carousel div{
  display: flex;
  justify-content: space-between;
   font-family: MicrosoftYaHei;
}

/* div.carousel .show-one {
  display: flex;
  align-items: center;
} */
div.carousel .show-one img{
  margin-right: 0.8rem;
  max-width: 100%;
  max-height: 100%;
  
}
div.carousel .show-one span.line{
display: inline-block;
  width: 0.3rem;
  border: 1px solid rgba(0,99,165,1);;
}
div.carousel .show-one b{
  font-size: 0.24rem;
}
div.carousel .show-one span.txt{
  font-size: 0.18rem;
  line-height: 0.3rem;
   max-width: 100%;
  max-height: 100%;
}
div.carousel .show-two img{
  margin-right: 0.8rem;
    max-width: 100%;
  max-height: 100%;
}
div.carousel .show-two span.line{
display: inline-block;
  width: 0.3rem;
  border: 1px solid rgba(0,99,165,1);;
}
div.carousel .show-two b{
  font-size: 0.24rem;
}
div.carousel .show-two span.txt{
  font-size: 0.18rem;
  line-height: 0.3rem;
   max-width: 100%;
  max-height: 100%;
}
div.carousel .show-three img{
    max-width: 100%;
  max-height: 100%;
 
  margin-right: 0.8rem;
}
div.carousel .show-three span.line{
display: inline-block;
  width: 0.3rem;
  border: 1px solid rgba(0,99,165,1);;
}
div.carousel .show-three b{
  font-size: 0.24rem;
}
div.carousel .show-three span.txt{
  font-size: 0.18rem;
  line-height: 0.3rem;
   max-width: 100%;
  max-height: 100%;
}
div.carousel .show-four img{
    max-width: 100%;
  max-height: 100%;
  margin-right: 0.8rem;
}
div.carousel .show-four span.line{
display: inline-block;
  width: 0.3rem;
  border: 1px solid rgba(0,99,165,1);;
}
div.carousel .show-four b{
  font-size: 0.24rem;
}
div.carousel .show-four span.txt{
  font-size: 0.18rem;
  line-height: 0.3rem;
   max-width: 100%;
  max-height: 100%;
}
div.idea{
 /* width: 100%; */
  /* height: 31vw;
  min-height: 3.71rem; */
  background-image: url('../assets/linianpeitu@2x (1).png');
    height: 7.2rem;
  background-size: cover;
   
}
div.idea .circle{
   display:inline-block;
    width: 0.1rem;
  height: 0.1rem;
  background: rgba(0,99,165,0.1);
  border-radius: 50%;
  border: 4px solid rgba(0,99,165,1);
  margin-top: 0.8rem;
  margin-bottom: 0.12rem;
}
div.idea .letter{
  margin-bottom: 0.5rem;
}
div.idea div.quality{
  width: 62.5%;
  margin: auto;
 
}
div.idea div.quality .txt{
  width: 100%;
  height: 100%;
  margin: auto;
}
div.idea div.quality p{
  /* text-align: center;
  margin: auto; */
 

  display: flex;
  justify-content:space-between;
 padding: 0 1rem;
  font-size:0.18rem;
font-family:Microsoft YaHei;
font-weight:bold;
color:rgba(33,33,33,1);
line-height: 0.8rem;
}
div.mind .four-box{
  width: 62.5%;
  margin: auto;
}
div.mind div.first,div.second{
  display: flex;
  justify-content: space-between;
}
div.mind div.first{
  margin-bottom: 0.38rem;
}
div.mind div.second{
   margin-bottom: 0.9rem;
}
div.mind .first-i,div.mind .first-ii,div.mind .first-iii,div.mind .first-iiii{
  width: 5.8rem;
  height: 2.6rem;
  border: 2px solid rgb(230, 230, 230);
  font-family: MicrosoftYaHei;
  font-size: 0.14rem;
}
div.mind .first-i{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.mind .first-i img{
  width: 0.89rem;
  height: 0.77rem;
}
div.mind .first-i span.line{
  width: 0.3rem;
  display: inline-block;
  border: 1px solid rgba(0,99,165,1);;
}
div.mind .first-i b{
  font-size: 0.24rem;
}
div.mind .first-i .set{
  line-height: 0.3rem;
  
}

div.mind .first-ii{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.mind .first-ii img{
  width: 0.89rem;
  height: 0.77rem;
}
div.mind .first-ii span.line{
  width: 0.3rem;
  display: inline-block;
  border: 1px solid rgba(0,99,165,1);;
}
div.mind .first-ii b{
  font-size: 0.24rem;
}
div.mind .first-ii .set{
  line-height: 0.3rem;
}

div.mind .first-iii{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.mind .first-iii img{
  width: 0.89rem;
  height: 0.77rem;
}
div.mind .first-iii span.line{
  width: 0.3rem;
  display: inline-block;
  border: 1px solid rgba(0,99,165,1);;
}
div.mind .first-iii b{
  font-size: 0.24rem;
}
div.mind .first-iii .set{
  line-height: 0.3rem;
}

div.mind .first-iiii{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
div.mind .first-iiii img{
  width: 0.89rem;
  height: 0.77rem;
}
div.mind .first-iiii span.line{
  width: 0.3rem;
  display: inline-block;
  border: 1px solid rgba(0,99,165,1);;
}
div.mind .first-iiii b{
  font-size: 0.24rem;
}
div.mind .first-iiii .set{
  line-height: 0.3rem;
}
</style>