<template>
  <div class="my">
    <img src="../assets/my-bg.jpg" style="width:100%;height:200px">
    <div class="head">
      <img src="../assets/logo.png" class="head-logo">
      <span>{{userName}}</span>
    </div>

    <div class="menu">
      <div v-if="!isAdmin">
        <div class="row" @click="$router.push('/order')">
          <span>我的订单</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="$router.push('/mygoods')">
          <span>我的物品</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="$router.push('/setting')">
          <span>个人设置</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="loginout()">
          <span>退出</span>
          <van-icon name="arrow" />
        </div>
      </div>

      <div v-if="isAdmin">
        <div class="row" @click="$router.push('/userConfig')">
          <span>用户管理</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="$router.push('/cate')">
          <span>分类管理</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="$router.push('/order?type=all')">
          <span>所有订单</span>
          <van-icon name="arrow" />
        </div>
        <div class="row" @click="loginout()">
          <span>退出</span>
          <van-icon name="arrow" />
        </div>
      </div>

    </div>
    <Tabber />
  </div>
</template>

<script>
import Tabber from "@/components/Tabber";
export default {
  components: { Tabber },
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin") == 1 ? true : false,
      userName: localStorage.getItem("name")
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    loginout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang='scss' scoped>
.my {
  position: relative;
  .head {
    position: absolute;
    top: 80px;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 16px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
    }
  }
}
.menu {
  .row {
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
    padding: 0 10px;
  }
}
</style>