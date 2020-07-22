<template>
  <div class="wrap" v-if="$route.path==='/AboutUs'">
     <div class="bgc-banner">
        <img src="../assets/gongsijieshao.png" alt="">
     </div>
     <div class="box">
        <div class="item-list">
                        <router-link to='/AboutUs/CompanyProfile' class="only" ><img src="../assets/jieshao@2x.png" alt=""><span>公司介绍</span></router-link>
                        <router-link to='/AboutUs/CorporateCulture'  ><img src="../assets/wenhua@2x.png" alt=""><span>企业文化</span></router-link>
                        <router-link to='/AboutUs/Honour' ><img src="../assets/zizhi@2x.png" alt=""><span>荣誉资质</span></router-link>
                       
            </div>
             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>公司简介</b></p>
                  <p class="line"></p>
                  <p class="letter">COMPANY PROFILE</p>
                </div>
       
          </div>
          <div class="profile">
            <img src="../assets/zhihui.png" alt=""><p>
 趣云科技有限公司总部位于中国河北秦皇岛，是一家基于互联网和大数据思考，以物联网和云计算为核心技术，专注于无人设备系列产品的研发生产与运营，为人类创建安全、健康、便捷生活环境，致力于成为全球领先的无人新零售平台运营商。<br>
公司经过了20多年工业自动化领域的经验，融入了物联网的科技，目前企业拥有无人生鲜机、无人取药机、无人自助气球机、无人棉花糖机等核心产品，为所有合作伙伴提供一站式智能新零售解决方案。公司立志成为未来物联网行业的领军者，智慧生活建设的引路人，为打造有中国特色的智慧物联网综合服务而不懈努力。
                            </p>
          </div>

     </div>
     <div class="develop">

             <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>趣云发展</b></p>
                  <p class="line"></p>
                  <p class="letter">COMPANY DEVELOPMENT</p>
                </div>
       
          </div>
           <div class="timeline-wrap">
              <section id="cd-timeline" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my"> 
            <span class="leftside">鸿瑞科技限公司成立，同年建立25亩生产基地</span>
            <span class="year"><b>1996</b><br> years</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
          <p class="my"><span class="year"><b>2000</b> <br> years</span> <span class="rightside">建立四条产品系列生产线：出仓机、清仓机、码垛机、 装箱机年产值达到7000万</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

	<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my">  <span class="leftside">出仓机产品市场份额占有率达到95%                   </span><span class="year"><b>2004</b><br>years</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
          <p class="my"><span class="year"><b>2008 </b><br> years</span> <span class="rightside">与世界500强益海嘉里签约成为益海嘉里甲级供应商</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

	<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my"> <span class="leftside">成为中国港口协会筒仓与散粮运输协会理事会单位</span><span class="year"><b>2011</b><br> years</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
          <p class="my"><span class="year"><b>2013</b> <br> years</span> <span class="rightside">
                                中国北方工业自动化行业的代表型企业2015年在散物料
清、出仓方面成为了国内最专业设备制造商之一
                            </span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->
	 
   
	<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my"> <span class="leftside">
                                两只老虎科技有限公司成立，标志着公司从工业自动化行业
向民用自动化行业拓展
                            </span><span class="year"><b>2015</b><br> years</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
          <p class="my"><span class="year"><b>2017</b> <br> years</span> <span class="rightside">
                              世界首创翻滚车同年研发出我国第一台环保新材料游艇</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

    
	<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my"> <span class="leftside">世界首创时空球同年，产品出口东南亚、非洲等地30余个国家</span><span class="year"><b>2018</b><br> years</span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
          <p class="my-special-right"><span class="year"><b>2019</b><br>years</span> <br><span> <span class="rightside"> 03月 荣获中国创新创业一百强单位同期取得了欧盟CE认证</span><br><span>03月 北岛博智、增益科技进行天使轮投资</span><br><span>12月     趣云科技成立</span></span></p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->
	<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
			</div>

			<div class="cd-timeline-content">
          <p class="my-special">
           
             <span><span>线上商城进入开发阶段 03月</span><br><span>无人设备在全国展开大面积运营 04月</span><br><span>三大生产基地同步开启,总平米数达到30亩地 05月</span><br><span>入驻东北大学成立项目科研中心 06月</span></span>
              <span class="year"><b>2020</b><br>years</span><br>
          </p>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->
	</section> <!-- cd-timeline -->

         </div>

     </div>
     
         <div class="wrap-box">
                <div class="product-display">
                  <p class="circle"></p>
                  <p><b>研发实力 </b></p>
                  <p class="line"></p>
                  <p class="letter">COMPANY PROFILE</p>
                </div>
       
          </div>
        <div class="strength">
          <div class="left">
            <br>
              <p><b>硬实力</b></p><br>
              <p class="white-line"></p><br>
              <p>
                                20余年的拼搏进取，20余年的用心创造，趣云在科技领域辛勤耕耘，锐意创新，取得了累累硕果。先后获得了多项国家发明专利、实用新型专利、外观专利，同时申请PCT国际专利，并通过了欧盟的CE标准认证。
在企业上升阶段，秦皇岛增益科技有限公司、秦皇岛北岛博智科技孵化器对企业进行天使轮投资，现进入到平稳安全的Pre-A轮阶段。期间我司受到了业界的高度关注，以及当地政府的认可。
                            </p>
          </div>
          <div class="right">
             <br>
                <p><b>软实力</b></p><br>
                <p class="white-line"></p><br>
                <p>
                                公司创始人深耕重工业自动化领域二十年，是少有的专业技术领域管理者，独到的经营理念与个人魅力吸引了一批志同道合的高素质人才，建立了30余人的核心研发团队。其中人工智能领域7人、后台开发8人、大数据与云计算5人、机械驱动开发10余人。
同时与东北大学、燕山大学等多所高校进行了深度的校企合作，合作高校每年都会向趣云输送大量人才，并与趣云成立多个研发项目组，深度合作共同攻克技术难题。真正做到了校企共建、产教融合、协同育人的企业发展合作模式。
                            </p><br>
          </div>
     </div>
      
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {

}
</script>

<style scoped>
div.wrap{
  width: 100%;
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
div.profile img{
  width: 6rem;
}
div.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.96rem;
}
div.profile p{
  border: 1px solid rgb(219, 219, 219) ;
  padding: 0.62rem 0.44rem;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  line-height: 0.4rem;
  text-indent: 0.4rem;
}
div.develop{
  width: 100%;
  background-color: rgba(243,243,243,1);
}
/* div.small-develop{
  width: 62.5%;
  margin: auto;
  padding-bottom: 0.7rem;
  background-image: url(../assets/xianxingzhuang.png) ;   
  background-position-y: center;
  background-repeat:no-repeat ;
  background-position: center;
  background-size: auto;



}div.small-develop .circle{
  width: 0.2rem;
  height: 0.2rem;
  background: #0063A5;
  border-radius: 50%;
  border: 0.05rem solid #478dbd;  
 margin: auto;
 
} */
div.timeline-wrap{
  width: 62.5%;
  margin: auto;
  padding-bottom: 0.6rem;
}

div.strength{
  width: 62.5%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
div.strength .left,.right{
  width: 5.7rem;
  background-color: #0063A5;
  padding: 0 0.64rem;
   font-family: MicrosoftYaHei;
   color: white;
  font-size: 0.18rem;
  line-height: 0.4rem;
  box-sizing: border-box;


}
div.strength .left b{
  font-size: 0.24rem;
}
div.strength .right b{
  font-size: 0.24rem;
}
div.strength .white-line{
  width: 0.3rem;
  border: 1px solid white;
}
/* 时间线复制代码 */

#cd-timeline {
  position: relative;
}
#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: rgba(0,99,165,1);
}
@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(0,99,165,1);
}
.cd-timeline-img {
  background: rgba(0,99,165,1);
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 15px;
    /* Force Hardware Acceleration in WebKit */
    -webkit-transform: translateZ(0);
    -webkit-backface-visibility: hidden;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  border-radius: 2px;

  

}

.cd-timeline-content p.my{
 
font-size: 0.18rem;
color: black;

font-family: MicrosoftYaHei;
vertical-align: center;
display: flex;
}
.cd-timeline-content p.my-special{
font-size: 0.18rem;
color: black;
font-family: MicrosoftYaHei;
text-align: right;
display: flex;
line-height: 0.4rem;
  width:max-content ;
  
}
.cd-timeline-content p.my-special .year{
  line-height: 0.3rem;
 
}
.cd-timeline-content p.my-special-right .year{
   line-height: 0.3rem;
  
}
.cd-timeline-content p.my-special-right{
  width:max-content ;
font-size: 0.18rem;
color: black;
font-family: MicrosoftYaHei;
text-align: left;
display: flex;
line-height: 0.4rem;

}
.cd-timeline-content p .year{
  color: rgba(0,99,165,1);
  margin: 0 10px;
}
.cd-timeline-content p.my .rightside{
  text-align: left;
}
.cd-timeline-content p.my .leftside{
  text-align: right;
}





@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.25rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 36%;
    margin: 0 5%
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #333C42;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #333C42;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}
</style>