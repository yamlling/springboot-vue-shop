<template>
  <div>
    <van-nav-bar title="我的物品" right-text="" left-arrow @click-left="$router.push('/my')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>

    <div class="row" v-for="(item,index) in list" :key="index">
      <img :src="item.img">
      <div style=" display:flex;flex-direction: column;justify-content: space-between;width:100%;">
        <div class="content">
          <span>商品名:{{item.name}}</span>
          <span>分类:{{item.cateName}}</span>
          <span>添加时间:{{item.time}}</span>
          <span style="color:red">价格:{{item.price}}</span>
          <span style="text-align:left;height: 60px;overflow: hidden;" class="row-content">
            描述:{{item.content}}
          </span>
          <div style="margin:5px 0;text-align:right;width:100%">
            <van-button type="primary" size="small" @click="$router.push(`/add?id=${item.id}`)">修改</van-button>
            <van-button type="danger" size="small" @click="del(item.id)" style="margin-left:20px">删除</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsAll, goodsdel } from "@/api/api";
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
      getGoodsAll({
        limit: 100,
        offset: 1,
        userId: localStorage.getItem("id")
      }).then(res => {
        this.list = res.data.list;
      });
    },

    del(id) {
      goodsdel({
        id: id
      }).then(res => {
        if (res.code == 200) {
          this.$toast("删除成功!");
          this.getData();
        }
      });
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
  border-bottom: 5px solid #ededed;
  padding: 5px 10px;
  .content {
    margin-left: 20px;
    justify-content: space-between;
    flex-direction: column;
    align-items: self-start;
    display: flex;
    font-size: 15px;
    // width: 100%;
    span {
      margin-top: 5px;
    }
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
}
</style>