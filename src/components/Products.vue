<template>
  <div class="wrap">
     
      <router-view v-if="$route.path !== '/Products'"></router-view>
      <div v-else><h1>我是产品中心</h1></div>
      </div>

</template>

<script>
export default {
mounted() {
    console.log(this.$route.path)
}
}
</script>

<style>

</style>