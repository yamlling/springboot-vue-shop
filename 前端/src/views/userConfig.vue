<template>
  <div>
    <van-nav-bar title="用户管理" right-text="" left-arrow @click-left="$router.push('/my')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>

    <div class="row" v-for="(item,index) in list" :key="index">
      <span class="title">{{item.name}}</span>
      <span>账号:{{item.user}}</span>
      <span>身份证号:{{item.idCard}}</span>
      <span>手机号码:{{item.tel}}</span>
      <span>学号:{{item.studentId}}</span>
      <div style="width:100%;text-align: right;">
        <van-button type="primary" size="small" style="margin-right:10px;" @click="repwd(item.id)">重置密码</van-button>
        <van-button type="danger" size="small" @click="del(item.id)">删除用户</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { login, userDel, register } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    getData() {
      login({
        limit: 100,
        offset: 1,
        isAdmin: 2
      }).then(res => {
        this.list = res.data.list;
      });
    },

    del(id) {
      userDel({ id: id });
      this.$toast("删除成功!");
      this.getData();
    },

    repwd(id) {
      register({
        id: id,
        doneflag: "Update",
        pwd: "111111"
      });
      this.$toast("密码已经重置为111111!");
      this.getData();
    }
  }
};
</script>

<style lang='scss' scoped>
.van-nav-bar,
.van-hairline--bottom {
  background-color: rgb(238, 10, 36);
  /deep/.van-nav-bar__left {
    span {
      color: #fff;
    }
  }
  /deep/ .van-nav-bar__title,
  .van-ellipsis {
    color: #f3f3f3;
  }
}
.row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  padding: 5px 10px;
  border-bottom: 5px solid #efefef;
  .title {
    width: 100%;
    font-size: 16px;
    color: red;
  }
}
</style>