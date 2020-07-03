<template>
  <div class="login">
    <h3>登陆</h3>
    <van-form @submit="onSubmit">
      <van-field v-model="user" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="pwd" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <div class="register" @click="$router.push('/register')">没有账号?点击注册</div>
      <div style="margin: 16px 0;">
        <van-button round block type="danger" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from "@/api/api";
export default {
  components: {},
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {
    onSubmit() {
      login({
        user: this.user,
        pwd: this.pwd,
        limit: 1,
        offset: 1
      }).then(res => {
        if (res.code == 200) {
          if (res.data.list.length > 0) {
            Object.keys(res.data.list[0]).forEach(function(key) {
              localStorage.setItem(key, res.data.list[0][key]);
              
            });
            this.$router.push("/");
          } else {
            this.$toast("账号密码错误!");return
          }
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
  box-sizing: border-box;
  background: url("../assets/login.jpg");
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat; //不重复
  background-size: 100% 100%;
  padding: 25vh 30px 0;
}
.register {
  margin: 15px 0 33px 0;
  font-size: 14px;
  text-align: right;
  color: #7594c5;
}
</style>