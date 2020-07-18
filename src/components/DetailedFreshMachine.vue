<template>


  <div class="wrap" >
  {{$route.path}}
   <h1>我是无人生鲜鸡数据 2222222222222   
     </h1>
  </div>
</template>

<script>
export default {
   name:"detailedfreshmachine",
   mounted () {
       console.log(this.$route.path);
   },
}
</script>

<style>

</style>