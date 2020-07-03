<template>
  <div>
    <van-nav-bar title="分类管理" right-text="" left-arrow @click-left="$router.push('/my')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
      <template #right>
        <span style="color:#f3f3f3" @click="show=true">添加分类</span>
      </template>
    </van-nav-bar>

    <div class="row" v-for="(item,index) in list" :key="index">
      <span>分类名称:{{item.name}}</span>
      <div style="width:100%;text-align: right;">
        <van-button type="primary" size="small" style="margin-right:10px;" @click="edit(item)">编辑分类</van-button>
        <van-button type="danger" size="small" @click="del(item)">删除分类</van-button>
      </div>
    </div>

    <van-dialog v-model="show" title="分类设置" show-cancel-button @cancel="name='';id='';show=false" @confirm="onSubmit">
      <van-form>
        <van-field v-model="name" name="分类名称" label="分类名称" placeholder="分类名称" />
        <div style="margin: 16px;">
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import { getCateAll, getCateSave, getCateDel } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      show: false,
      name: "",
      id: "",
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
      getCateAll({
        limit: 100,
        offset: 1
      }).then(res => {
        this.list = res.data.list;
      });
    },

    edit(item) {
      this.name = item.name;
      this.id = item.id;
      this.show = true;
    },

    del(item) {
      getCateDel({
        id: item.id
      }).then(res => {
        this.$toast("删除成功!");
        this.getData();
      });
    },

    onSubmit() {
      let data = {
        name: this.name,
        id: this.id
      };
      if (this.id != "") {
        data.doneflag = "Update";
      } else {
        data.doneflag = "Add";
      }
      getCateSave(data).then(res => {
        this.$toast("删除成功!");
        this.getData();
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
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 10px;
  font-size: 15px;
  border-bottom: 5px solid #ededed;
}
</style>