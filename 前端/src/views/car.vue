<template>
  <div style="padding-bottom:60px">
    <van-nav-bar title="购物车" right-text="" left-arrow @click-left="$router.push('/')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>
    <div class="row">
      <van-card :num="item.num" :price="sumPrice(item.price,item.num)" :title="item.name" :thumb="item.img" v-for="(item,index) in carList" :key="index">
        <template #footer>
          <van-button size="mini" @click="add(index)">+</van-button>
          <van-button size="mini" @click="reduce(index)">-</van-button>
        </template>
      </van-card>
    </div>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import * as math from "@/utils/calculate";
import { getCode } from "@/utils/index";
import { goodsSave, getOrdersSave } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      carList: []
    };
  },
  created() {
    let list = JSON.parse(localStorage.getItem("car"));
    if (list != undefined) {
      this.carList = this.carList.concat(list);
    }
  },
  mounted() {},
  beforeDestroy() {},
  computed: {
    sumPrice() {
      return (price, num) => {
        return math.multiplication(price, num);
      };
    },

    totalPrice() {
      if (this.carList.length == 0) {
        return 0;
      } else {
        let totalPrice = 0;
        this.carList.map(item => {
          totalPrice += Number(math.multiplication(item.price * 100, item.num));
        });
        return totalPrice;
      }
    }
  },
  methods: {
    add(index) {
      if (this.carList[index].num + 1 > this.carList[index].maxnum) {
        this.$toast("数量不足,无法添加!");
        return;
      } else {
        this.carList[index].num++;
        localStorage.setItem("car", JSON.stringify(this.carList));
      }
    },

    reduce(index) {
      if (this.carList[index].num - 1 == 0) {
        this.carList.splice(index, 1);
      } else {
        this.carList[index].num--;
      }
      localStorage.setItem("car", JSON.stringify(this.carList));
    },

    onSubmit() {
      //减少库存
      let sumNum = 0;
      let sumPrice = 0;
      const goods = new Promise((resolve, reject) => {
        this.carList.forEach((item, index) => {
          sumNum = Number(math.addition(item.num, sumNum));
          sumPrice += Number(math.multiplication(item.price, item.num));
          goodsSave({
            doneflag: "Update",
            id: item.id,
            num: item.maxnum - item.num
          }).then(res => {
            resolve(true);
          });
        });
      });

      goods.then(res => {
        let param = {
          userId: localStorage.getItem("id"),
          sumPrice: sumPrice,
          sum: sumNum,
          doneflag: "Add",
          orderNo: getCode(8)
        };
        getOrdersSave(param).then(res => {
          if (res.code == 200) {
            this.$toast("提交订单成功!");
            this.carList = [];
            localStorage.removeItem("car");
            this.$router.push('/')
          }
        });
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.row {
  padding: 10px 0 0px;
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