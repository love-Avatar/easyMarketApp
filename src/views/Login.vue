<template>
  <div class="login">
    <div class="login-img">
      <img src="/1.png" />
    </div>
    <div class="login-inp">
      <p>
        <input type="text" placeholder="15323807318" />
      </p>
      <p>
        <input type="password" />
      </p>
      <button>登录</button>
    </div>
  </div>
</template>
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
      border:0
    }
  }
}
</style>
