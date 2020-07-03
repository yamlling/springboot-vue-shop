<template>
  <van-tabbar route active-color="#ee0a24">
    <van-tabbar-item :name="0" icon="wap-home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item :name="1" icon="shopping-cart-o" replace to="/car">购物车</van-tabbar-item>
    <van-tabbar-item :name="2" icon="add-o" replace to="/add">发布</van-tabbar-item>
    <van-tabbar-item :name="3" icon="contact" replace to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>