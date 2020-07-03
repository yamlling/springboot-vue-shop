<template>
  <div>
    <van-nav-bar :title="title" right-text="" left-arrow @click-left="$router.push('/')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field v-model="name" name="物品名" label="物品名" placeholder="物品名" :rules="[{ required: true, message: '请填物品名' }]" />
      <van-field readonly clickable name="picker" :value="cateName" label="物品分类" placeholder="点击选择分类" @click="showPicker = true" />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker show-toolbar :columns="columns" @confirm="cateSelect" @cancel="showPicker = false" />
      </van-popup>
      <van-field v-model="price" type="number" name="物品价格" label="物品价格" placeholder="物品价格" :rules="[{ required: true, message: '请填物品价格' }]" />
      <van-field v-model="num" type="number" name="物品数量" label="物品数量" placeholder="物品数量" :rules="[{ required: true, message: '请填物品价格' }]" />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader" :max-count="1" :after-read="afterRead" />
        </template>
      </van-field>
      <van-field v-model="content" rows="5" autosize label="物品描述" type="textarea" placeholder="请输入物品描述" />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { getCateAll, getGoodsAll, goodsSave, upload } from "@/api/api";
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      title: this.$route.query.id != undefined ? "编辑物品" : "发布物品",
      id: this.$route.query.id,
      name: "",
      cateName: "",
      cateId: "",
      content: "",
      price: null,
      num: null,
      doneflag: "Add",
      showPicker: false,
      img: "",
      uploader: [],
      columns: []
    };
  },
  created() {
    this.getCateList();
    if (this.id != undefined) {
      this.getInfo();
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    //保存
    onSubmit() {
      let data = {
        doneflag: this.doneflag,
        name: this.name,
        cateName: this.cateName,
        cateId: this.cateId,
        content: this.content,
        price: this.price,
        num: this.num,
        userId: localStorage.getItem("id"),
        img: this.img
      };
      if (this.doneflag == "Update") data.id = this.id;
      goodsSave(data).then(res => {
        if (res.code == 200) {
          this.$toast("保存成功!");
          this.$router.push("/");
        }
      });
    },

    //获取编辑商品信息
    getInfo() {
      getGoodsAll({
        limit: 1,
        offset: 1,
        id: this.id
      }).then(res => {
        this.doneflag = "Update";
        this.name = res.data.list[0].name;
        this.cateName = res.data.list[0].cateName;
        this.cateId = res.data.list[0].cateId;
        this.content = res.data.list[0].content;
        this.price = res.data.list[0].price;
        this.num = res.data.list[0].num;
        this.img = res.data.list[0].img;
        this.uploader.push({
          url: res.data.list[0].img
        });
      });
    },

    //获取分类
    getCateList() {
      getCateAll({
        limit: 100,
        offset: 1
      }).then(res => {
        if (res.data.list.length > 0) {
          this.CateList = res.data.list;
          this.columns = res.data.list.map((item, index) => {
            return item.name;
          });
        }
      });
    },

    //选择分类
    cateSelect(value, index) {
      this.cateName = value;
      this.cateId = this.CateList[index].id;
      this.showPicker = false;
    },

    //上传
    afterRead(files) {
      // 此时可以自行将文件上传至服务器
      let param = new FormData();
      param.append("file", files.file);
      axios
        .post("http://localhost:8089/goods/upload", param, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(response => {
          this.img = response.data;
        })
        .catch(error => {
          console.log(error);
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
</style>