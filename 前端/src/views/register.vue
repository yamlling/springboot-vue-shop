<template>
  <div class="register">
    <h3>注册</h3>
    <van-form @submit="onSubmit">
      <van-field v-model="user" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="pwd" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <van-field v-model="tel" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="name" name="真实姓名" label="真实姓名" placeholder="真实姓名" :rules="[{ required: true, message: '请填写真实姓名' }]" />
      <van-field v-model="idCard" name="身份证号" label="身份证号" placeholder="身份证号" :rules="[{ required: true, message: '请填写身份证号' }]" />
      <van-field v-model="studentId" name="学号" label="学号" placeholder="学号" :rules="[{ required: true, message: '请填写学号' }]" />
      <div class="login" @click="$router.push('/login')">已有账号?点击登陆</div>
      <div style="margin: 16px;">
        <van-button round block type="danger" native-type="submit">
          注册
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
      user: "",
      pwd: "",
      tel: "",
      name: "",
      idCard: "",
      studentId: ""
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    onSubmit() {
      register({
        name: this.name,
        user: this.user,
        pwd: this.pwd,
        tel: this.tel,
        idCard: this.idCard,
        studentId: this.studentId,
        doneflag: "Add"
      }).then(res => {
        if (res.code == 200) {
          this.$toast("注册成功!");
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.register {
  box-sizing: border-box;
  background: url("../assets/login.jpg");
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat; //不重复
  background-size: 100% 100%;
  padding: 10vh 30px 0;
}

.login {
  margin: 15px 0 33px 0;
  font-size: 14px;
  text-align: right;
  color: #7594c5;
}
</style>