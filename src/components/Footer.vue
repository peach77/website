<template>
  <div class="wrap">
        <div class="wrap-box">
            <div class="left">
                 <ul> 
                    <li> <router-link to="/">首页</router-link></li>
                    <li><router-link to="/Products">产品中心</router-link></li>
                    <li><router-link to="/Solution">解决方案</router-link></li>
                    <li><router-link to="/Cooperation">合作服务</router-link></li>
                    <li><router-link to="/AboutUs">关于我们</router-link></li>
                 </ul>
                 <p class="logo"><img src="../assets/quyun-03 (3).png" alt=""><span>秦皇岛趣云科技有限公司</span></p>
                 <div class="icon">
                     <div class="icon-left">
                         <p><img src="../assets/dianhua.png" alt=""><span>电话：400-0235580</span></p>
                         <p><img src="../assets/youxiang.png" alt=""><span>邮箱：Funyunion@aliyun.com</span></p>
                     </div>
                     <div class="icon-right">
                         <p><img src="../assets/wangzhi.png" alt=""><span>网址：www.funyunion.com</span></p>
                         <p><img src="../assets/dizhi.png" alt=""><span>地址：秦皇岛经济技术开发区洋河道11号</span></p>
                     </div>
                 </div>

            </div>
            <div class="right">
                  <p>  <img src="../assets/quyunlian.png" alt=""><br><span>趣云科技</span></p>
                 
                  <p class="last"> <img src="../assets/quyunwulian.png" alt=""><br><span>趣云物联</span></p>
            </div>
         
        </div> 
        <div class="bot">
          <p>
             秦皇岛经济技术开发区洋河道11号 冀ICP备1602xxxx号-1 冀公网备案13030502xxxxx号 Copyright © 2019-2020
          </p>
        </div>

    
     
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    html{
    font-size: 50px;
}
    div.wrap {
         width: 100%;
    }
 
}
div.wrap{
    width: 100%;
    background-color: rgba(12,12,12,1);
}
div.wrap-box{
    width: 62.5%; 
    margin: 0 auto;
    padding-top: 0.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
div.left {
    background-color: rgba(12,12,12,1);
}
div.left  ul{
    display: flex;
}

div.left ul  a{
    margin-right: 0.7rem;
    color: white;
    text-decoration: none;
    font-size:0.18rem;
    font-family: MicrosoftYaHei;
}
div.left p.logo{
    margin-top: 0.7rem;
    display: flex;
    flex-wrap: nowrap;
     align-items: center;
     margin-bottom: 0.7rem;
       color: white;
    font-size: 12px;

}

div.left p.logo img{
    margin-right: 0.3rem;
   
}
div.left p.logo span{
    font-size:0.18rem;
    font-family: MicrosoftYaHei;
}
div.right p{
    color: white;
}
div.bot{
    border-top: 1px solid #5a5a5a;
    width: 100%;
    padding-bottom: 0.32rem;
 
    
} 

div.bot p{
    margin-top: 0.32rem;
    text-align: center;
    color:#5a5a5a;
    font-size: 0.14rem;
 
   
  
}
div.icon{
       display: flex;
    justify-content: flex-start;
      margin-bottom: 0.6rem;
}
div.icon img{
    width: 0.2rem;
    margin-right: 0.15rem;
  
}
div.icon-left{
    margin-right: 0.9rem;
}
div.icon p{
       font-size:0.18rem;
    font-family: MicrosoftYaHei;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
   margin-bottom: 0.12rem;
    color: white;
 

}
div.right {
    display: flex;
    flex-wrap: nowrap;
}
div.right p{
    text-align: center;
}
div.right p span{
    font-size: 0.18rem;
  
}
div.right img{
    width: 1.16rem;
    margin-bottom: 0.17rem;
}
div.right p.last{
    margin-left: 0.45rem;
}
</style>