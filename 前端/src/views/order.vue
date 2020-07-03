<template>
  <div>
    <van-nav-bar title="订单" right-text="" left-arrow @click-left="$router.push('/my')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>

    <div class="row" v-for="(item,index) in list" :key="index">
      <p class="orderno">订单编号:{{item.orderNo}}</p>
      <p>订单总价:{{item.sumPrice}}元</p>
      <p>数量:{{item.sum}}件</p>
      <p>下单时间:{{item.time}}</p>

      <p v-if="isAdmin">购买人:{{item.userName}}</p>
      <p style="text-align:right" v-if="isAdmin">
        <van-button type="danger" size="small" @click="del(item)">删除订单</van-button>
      </p>

    </div>
  </div>
</template>

<script>
import { getOrdersAll, getOrdersdel } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      isAdmin: this.$route.query.type != 'all' ? false : true,
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
      getOrdersAll({
        limit: 100,
        offset: 1,
        userId: !this.isAdmin ? localStorage.getItem("id") : null
      }).then(res => {
        this.list = res.data.list;
      });
    },

    del(item) {
      getOrdersdel({
        id: item.id,
      }).then(res => {
        this.$toast("删除成功!");
        this.getData();
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.row {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  border-bottom: 5px solid #f5f5f5;
  p {
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    margin: 5px 0;
    padding: 0px 10px;
    font-size: 14px;
  }
  .orderno {
    font-size: 16px;
    padding: 10px;
    border-bottom: 1px solid #e4e4e4;
  }
}
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
</style>