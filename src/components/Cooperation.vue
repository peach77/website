<template>
  <div class="wrap">
     <div class="banner">
        <img src="../assets/hezuofuwu (2).png" alt="">
    </div>
  <div class="box">
     
    <div class="wrap-box">
         <div class="product-display">
          <p class="circle"></p>
          <p><b>行业介绍</b></p>
          <p class="line"></p>
          <p class="letter">INDUSTRY INTRODUCTION</p>
        </div>
       
    </div>
    <div class="article">
          <img src="../assets/hangyejieshao@2x.png" alt="">
          <p>根据前瞻产业研究院发布的《2018-2023年中国自助售货机行业市场前景预测与投资战略规划分析报告》数据显示，2012-2020年无人售货机市场复合增长率高达49.8%。<br><br>
随着5G时代的到来，无人新零售行业也在逐渐起步，它顺应时代和商业发展，随着科技的不断完善新零售替代传统零售是顺应趋势的发展结果。同时，不断迭代的物联网技术、人脸识别以及移动支付为该行业奠定了坚实的技术保障，对于日趋高涨的人力成本以及日益激烈的行业竞争无人零售是提高效率、降低成本的全新模式，具有规模推广性以及相对稳定性。<br>
由于全球突发型的灾害，无人零售店及用户数量会出现规模性喷发，通过机器与技术结合，线上线下无需人工即可完成商业闭环，手机场景化的用户培养会成为互联网发展的着力点。
                            </p>
    </div>
  </div>
  <div class="box-bgc">
      <div class="mode">
           <div class="wrap-box">
              <div class="product-display">
                <p class="circle"></p>
                <p><b>合作模式</b></p>
                <p class="line"></p>
                <p class="letter">COOPERATION MODE</p>
              </div>
         </div>
        <div class="parter">
            <p><img src="../assets/chengshihehuoren@2x.png" alt=""><br><span>城市合伙人</span></p>
            <p><img src="../assets/quxianhehuoren@2x.png" alt=""><br><span>区县合伙人</span></p>
            <p><img src="../assets/zhandianhehuoren@2x.png" alt=""><br><span>站点合伙人</span></p>

        </div>
      </div>
  </div>
  <div class="policy">
       <div class="wrap-box">
              <div class="product-display">
                <p class="circle"></p>
                <p><b>合作政策</b></p>
                <p class="line"></p>
                <p class="letter">COOPERATION POLICY</p>
              </div>
         </div>
         <div class="policy-item">
            <div>
              <br><br>
            <p class="project"><b>软件</b></p> <br><br>
            <p class="store">管理后台、线上商城</p><br><br><br><br><br>
            <p class="blue"></p>
            </div>
            <div> <br><br>
              <p  class="project"><b>收益</b></p><br><br>
            <p class="store">广告收益、销售收益、分享收益、招商收益、商城运营收益</p><br><br><br>
            <p class="blue"></p>
            </div>
            <div> <br><br>
            <p  class="project"><b>支持</b></p> <br><br>
            <p class="store">选址支持、活动支持、商城支持、设备使用培训、后台管理培训、市场运营培训、渠道进货共享</p><br>
            <p class="blue"></p>
            </div>
         </div>
  </div>
  <div class="suppot">
       <div class="wrap-box">
              <div class="product-display">
                <p class="circle"></p>
                <p><b>合作支持</b></p>
                <p class="line"></p>
                <p class="letter">COOPERATIVE SUPPORT</p>
              </div>
         </div>
         <div class="small-img">
            <p><img src="../assets/fuwuzhichi@2x.png" alt=""><br><span>服务支持</span></p>
            <p><img src="../assets/yingjianzhichi@2x.png" alt=""><br><span>硬件支持</span></p>
            <p><img src="../assets/ruanjianzhichi@2x.png" alt=""><br><span>软件支持</span></p>
            <p><img src="../assets/peixunzhichi@2x.png" alt=""><br><span>培训支持</span></p>
            <p><img src="../assets/xuanzhifuwu@2x.png" alt=""><br><span>选址服务</span></p>
            <p><img src="../assets/xianshangguanli@2x.png" alt=""><br><span>线上管理</span></p>
            <p><img src="../assets/guanggaozhaoshang@2x.png" alt=""><br><span>广告招商</span></p>
            <p><img src="../assets/qudaozhichi@2x.png" alt=""><br><span>渠道支持</span></p>
            <p><img src="../assets/shouhoufuwu@2x.png" alt=""><br><span>售后服务</span></p>

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
div.box{
   width: 62.5%;
    margin: 0 auto;
}
div.wrap-box{
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
div.article{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.1rem;
}
div.article img{
  margin-right: 0.56rem;
} div.article p{
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  line-height: 0.4rem;
}
div.box-bgc{
  background-color: rgba(243,243,243,1);
  width: 100%;
} div.box-bgc .mode{
  width: 62.5%;
  margin: auto;
}
 div.box-bgc .parter{
   display: flex;
   justify-content: space-between;
   text-align: center;
 }
 div.box-bgc .parter span{
   font-size: 0.24rem;
   margin-top: 0.44rem;
   margin-bottom: 0.84rem;
   display: block;
    font-family: MicrosoftYaHei;
 }
   .policy{
     width: 62.5%;
     margin: auto;
     margin-bottom: 0.72rem;
   }
  .policy-item {
    display: flex;
    justify-content: space-between;
  }
 .policy-item div{
   padding: 0 0.5rem ;
   box-sizing: border-box;
   text-align: center;
   width: 3.75rem;
   height: 2.45rem;
   background-color: rgba(238,238,238,1);
    font-family: MicrosoftYaHei;
    
   
 }
 .policy-item .project{
   font-size: 0.24rem;
 }
 .policy-item  .store{
   font-size: 0.18rem;
   line-height: 0.3rem;
 }
 .policy-item .blue{
   display: inline-block;
   width: 0.5rem;
   border: 1px solid #0063A5;
  text-align: center;
 }
 div.suppot{
   width: 100%;
   background-color: rgba(247,252,255,1);
 }
 div.small-img{
   margin: auto;
   width: 62.5%;
   display: flex;
   justify-content: space-between;
   text-align: center;

    padding-bottom: 2.2rem;
 }
  div.small-img img{
    margin-bottom: 0.58rem;
    border: 1px dotted black;
  }
    div.small-img span{
      font-size: 0.18rem;
        font-family: MicrosoftYaHei;
       
    }
 
</style>