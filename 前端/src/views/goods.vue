<template>
  <div>
    <van-nav-bar title="商品详情" right-text="" left-arrow @click-left="$router.push('/')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>

    <div class="row">
      <img :src="info.img" alt="">
      <div style="align-self: flex-start;">{{info.name}}</div>
      <van-tag plain type="primary" style="align-self: flex-start;">{{info.cateName}}</van-tag>
      <div style="align-self: flex-end;color:red">价格:{{info.price}}</div>
      <div style="margin:5px 0;text-align:right;">
        <van-button type="danger" size="small" @click="addCar(info)">加入购物车</van-button>
      </div>
    </div>

    <van-tabs v-model="active">
      <van-tab title="物品描述">
        <div style="text-align:left;padding:5px 10px;">
          {{info.content}}
        </div>
      </van-tab>
      <van-tab title="物品评论">

        <div class="add-comm">
          <van-icon name="add" @click="show=true" />
        </div>

        <div class="comm" v-for="(item,index) in list" :key="index">
          <div class="comm-title">
            <span>{{item.userName}}</span>
            <span style="color:#adadad">{{item.time}}</span>
          </div>
          <div style="padding:15px 5px 0;align-self:flex-start;font-size:14px;color:#adadad">
            {{item.content}}
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <van-dialog v-model="show" title="评论" show-cancel-button @cancel="content='';show=false" @confirm="onSubmit">
      <van-form>
        <van-field type="textarea" rows="4" v-model="content" name="评论" label="评论" placeholder="请输入评论内容" />
        <div style="margin: 16px;">
        </div>
      </van-form>
    </van-dialog>

  </div>
</template>

<script>
import { getGoodsOne, getCommentsAll, getCommentsSave } from "@/api/api";
import * as utils from "@/utils/index";
export default {
  components: {},
  data() {
    return {
      active: 0,
      content: "",
      show: false,
      info: {},
      list: []
    };
  },
  created() {
    this.getData();
    this.getComments();
  },
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    getData() {
      getGoodsOne({ id: this.$route.query.id }).then(res => {
        this.info = res.data;
      });
    },

    getComments() {
      getCommentsAll({
        goodsId: this.$route.query.id,
        limit: 100,
        offset: 1
      }).then(res => {
        this.list = res.data.list;
      });
    },

    onSubmit() {
      getCommentsSave({
        userId: localStorage.getItem("id"),
        goodsId: this.$route.query.id,
        content: this.content,
        doneflag: "Add",
        time: utils.getNowFormatDate()
      }).then(res => {
        if (res.code == 200) {
          this.$toast("评论成功");
        }
        this.getComments();
      });
    },

    //加入购物车
    addCar(item) {
      let car = {
        img: item.img,
        name: item.name,
        name: item.name,
        maxnum: item.num,
        num: 1,
        price: item.price,
        id: item.id
      };
      //检测购物车是否有该物品
      let carList = JSON.parse(localStorage.getItem("car"));
      console.log(carList);

      if (carList == undefined || carList.length == 0) {
        carList = [];
        carList.push(car);
        localStorage.setItem("car", JSON.stringify(carList));
        this.$toast("加入购物车成功!");
      } else {
        let isPush = false;
        carList.forEach((item, index) => {
          if (item.id == car.id) {
            //判断数量是否不足
            if (item.num + 1 > item.maxnum) {
              isPush = true;
              this.$toast("无法添加,商品数量不足");
            } else {
              isPush = true;
              this.$toast("加入购物车成功!");
              carList[index].num += 1;
            }
          }
        });
        if (!isPush) {
          carList.push(car);
          this.$toast("加入购物车成功!");
        } else {
          isPush = false;
        }
        localStorage.setItem("car", JSON.stringify(carList));
      }
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
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  div {
    padding: 5px 10px;
  }
  .van-tag {
    margin: 5px 10px;
  }
}

.comm {
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  .comm-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  border-bottom: 2px solid #ededed;
}

.add-comm {
  position: fixed;
  z-index: 99999;
  bottom: 5vh;
  right: 20px;
  font-size: 40px;
  color: #bcbcbc;
}
</style>