<template>
  <div>
    <van-nav-bar title="个人设置" right-text="" left-arrow @click-left="$router.push('/my')">
      <template #left>
        <span style="color:#f3f3f3">返回</span>
      </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
      <van-field v-model="name" name="真实名字" label="真实名字" placeholder="真实名字" :rules="[{ required: true, message: '请填真实名字' }]" />
      <van-field v-model="studentId" name="学号" label="学号" placeholder="学号" :rules="[{ required: true, message: '请填学号' }]" />
      <van-field v-model="idCard" name="身份证号" label="身份证号" placeholder="身份证号" :rules="[{ required: true, message: '请填身份证号' }]" />
      <van-field v-model="tel" name="联系电话" label="联系电话" placeholder="联系电话" :rules="[{ required: true, message: '请填联系电话' }]" />
      <van-field v-model="pwd" name="密码" label="密码" placeholder="密码" />
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { register } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      name: localStorage.getItem("name"),
      studentId: localStorage.getItem("studentId"),
      idCard: localStorage.getItem("idCard"),
      tel: localStorage.getItem("tel"),
      id: localStorage.getItem("id"),
      pwd: ""
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    onSubmit() {
      let data = {
        name: this.name,
        id: this.id,
        studentId: this.studentId,
        idCard: this.idCard,
        tel: this.tel,
        doneflag: "Update"
      };
      if (this.pwd != "") {
        data.pwd = this.pwd;
      }
      register(data).then(res => {
        if (res.code == 200) {
          this.$toast("修改信息成功,请重新登陆!");
          localStorage.clear();
          this.$router.push("/login");
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
</style>