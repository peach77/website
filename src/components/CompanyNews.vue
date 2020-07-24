<template>
  <div class="wrap">
      <div class="banner">
        <img src="../assets/gongsidongtai.png" alt="">
      </div>
      <div class="state">
        <p class="link"><router-link to='/'><span>首页&gt;</span></router-link><span>公司动态</span></p>
      </div>
       <div class="product-display">
        <p ><img src="../assets/important.png" alt=""></p>
        <p><b>公司动态</b></p>
        <p class="line"></p>
        <p class="letter">COMPANY NEWS</p>
      </div>
      <div class="list">
        <ul>
          <li  v-for="item in $store.state.news" :key="item.id">
           
            <div class="item">
                <img :src="item.url" alt="">
                 <p class="date"><span><b>29</b></span><br><span>2020/05</span></p>
                <p class="title"><span><b>{{item.title}}</b></span><br><span>{{item.article}}</span></p>
                 <!-- <p class="read"><router-link to='/CompanyNews/:id'>详情</router-link></p> -->
            </div>
            
          </li>
           

            <!-- <li  v-for="item in list" :key="item.id">
           
            <div class="item">
                <img :src="item.url" alt="">
                 <p class="date"><span><b>29</b></span><br><span>2020/05</span></p>
                <p class="title"><span><b>{{item.title}}</b></span><br><span>{{item.article}}</span></p>
                <p class="read"><router-link to='/CompanyNews/:id'>详情</router-link></p>
            </div>
            
          </li> -->
           
        </ul>
         <!-- <ul>
          <li v-for="item in $store.state.ceshi" :key="item.id">
              {{item.title}}
          </li>
          </ul> -->
       <!-- <el-pagination
            background
            layout="prev, prev,pager, next,next"
            :total="1000"
            :page-size=5>
               
          </el-pagination>  -->
      </div>
  </div>
</template>vm.set(expression, value)


<script>
export default {
name:'companynews',

data() {
  return {
    list: []
  }
},
mounted () {
  // const self =this;
  // this.$axios.get('https://cnodejs.org/api/v1/topics').then(function(res){
  //   console.log(111);
  //   console.log(res);
  //   if (res.status == 200) {
  //     self.list = res.data.data;
  //   }
  // });
},



}
</script>

<style scoped>
div.wrap{
  width: 100%;
  margin: auto;
}
div.banner img{
  width: 100%;
  margin-bottom: 0.34rem;
}
div.state{
  width: 62.5%;
  min-width: 1200px;
  margin: auto;
}
div.state .link a{
  text-decoration: none;
  font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  color: rgba(33, 33, 33, 1);
}
div.state .link span{
   font-size: 0.18rem;
  font-family: MicrosoftYaHei;
  color: rgba(33, 33, 33, 1);
}
.product-display {
  margin: auto;
  text-align: center;
}
.product-display p {
  font-family: MicrosoftYaHei-Bold;
  font-size: 0.28rem;
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
  margin-bottom: 1rem;
}
div.list{
     width: 62.5%;
  min-width: 1200px;
  margin: auto;
  text-align: center;
}
div.item {
  width: 62.5%;
  min-width: 1200px;
  background-color: rgba(249,249,249,1);
  margin: auto;
  margin-bottom: 0.27rem;
  display: flex;
  justify-content: flex-start;
  font-family: MicrosoftYaHei;
  align-items: center;
  padding-right: 0.3rem;
  box-sizing: border-box;
  text-align: left;
}
div.item img{
  margin-right: 0.58rem;
}
div.item  .date{
  text-align: right;
  border-right: 1px solid rgba(185, 185, 185, 1);
  padding-right: 0.2rem;
  margin-right: 0.26rem;
  height: 0.9rem;
  font-size: 0.14rem;
 
}
div.item  .date{
   font-size: 0.18rem;
}
div.item  .date b{
   font-size: 0.24rem;
}
div.item  .title b{
  font-size: 0.18rem;
}
div.item  .title{
  font-size: 0.14rem;
  line-height: 0.3rem;
}
</style>