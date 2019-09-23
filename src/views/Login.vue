<template>
  <div class="login">
    <div class="login-img">
      <img src="/1.png" />
    </div>
    <div class="login-inp">
      <p>
        <input type="text" placeholder="15323807318" v-model="mobile" />
      </p>
      <p>
        <input type="password" v-model="password" />
      </p>
      <button @click="loginHandle">登录</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      mobile: "15323807318",
      password: "123456"
    };
  },
  computed: {
    ...mapState("login", ["loginMSG"])
    // loginMSG  的方法不data里面定义  劫持依赖里面   监听不到？？？？
    // changeLoginInfo() {
    //   if (this.loginMSG.errno === 0) {
    //     alert("登陆成功");
    //   } else {
    //     alert("帐号或者密码错误");
    //   }
    //   console.log(123456789);
    // }
  },
  methods: {
    ...mapActions("login", ["login"]),
    async loginHandle() {
      const { mobile, password } = this;
      const res = await this.login({ mobile, password });
      if (res.errno === 0) {
        alert("登陆成功");
        this.$router.push("/home");
      } else {
        alert("帐号或者密码错误");
      }
    }
  }
  // watch: {
  //   loginMSG() {
  //     if (loginMSG.errno === 0) {
  //       alert("登陆成功");
  //     } else {
  //       alert("帐号或者密码错误");
  //     }
  //     console.log(123456789);
  //   },
  //   deep: true
  // }
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  .login-img {
    margin-left: 50%;
    transform: translate(-50%);
    margin-top: 15%;
    width: 160px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-inp {
    width: 85%;
    margin-top: 15%;
    margin-left: 50%;
    transform: translate(-50%);
    p {
      width: 100%;
      height: 72px;
      input {
        width: 100%;
        height: 100%;
        border: 0;
        border-bottom: 1px solid #eee;
        font-size: 25px;
        outline: none;
      }
    }
    button {
      width: 100%;
      margin-top: 15%;
      margin-left: 50%;
      transform: translate(-50%);
      color: #fff;
      background: #108ee9;
      border-radius: 5px;
      height: 47px;
      border: 0;
    }
  }
}
</style>
