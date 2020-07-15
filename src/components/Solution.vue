<template>
  <div class="wrap">
       <router-view v-if="$route.path !== '/Solution'"></router-view>
      <div v-else><h1>我是解决方案</h1></div>
      </div>
      

</template>

<script>
export default {

}
</script>

<style>

</style>