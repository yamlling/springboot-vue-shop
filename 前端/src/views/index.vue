<template>
  <div>
    <div>
      <div class="row" @click="$router.push(`/goods?id=${item.id}`)" v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt="">
        <span style="align-self:flex-start;height:20px;overflow:hidden;margin:10px 0;">{{item.name}}</span>
        <div style="display:flex;align-items:center;justify-content: space-between;">
          <van-tag plain type="primary">{{item.cateName}}</van-tag>
          <span style="color:red">{{item.price}}元</span>
        </div>
        <div style="align-self:flex-end;margin-top:10px">
          <van-button type="danger" style="height:30px;" @click.stop="addCar(item)">加入购物车</van-button>
        </div>
      </div>
    </div>
    <Tabber />
  </div>
</template>

<script>
import { getGoodsAll } from "@/api/api";
import Tabber from "@/components/Tabber";
export default {
  components: { Tabber },
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
        offset: 1
      }).then(res => {
        this.list = res.data.list;
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
.row {
  padding: 10px;
  margin: 10px;
  border: 1px #e1e1e1 solid;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
}
.row:last-child {
  margin-bottom: 60px;
}
</style>