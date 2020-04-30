<template>
  <div>
    <!--显示当前路由组件-->
    <router-view></router-view>
    <FootGuide/><!--v-show="$route.meta.showFooter"-->
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  created () {
    // 异步获取 address
    this.$store.dispatch('getAddress')
    // 异步获取登陆用户信息
    this.$store.dispatch('getUserInfo')
  },

  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
