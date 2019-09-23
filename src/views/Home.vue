<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link to="/home/index">
        <span class="icon iconfont icon-yemian-copy-copy"></span>
        <p>首页</p>
      </router-link>
      <router-link to="/home/special">
        <span class="icon iconfont icon-zhuanti"></span>
        <p>专题</p>
      </router-link>
      <router-link to="/home/classification">
        <span class="icon iconfont icon-leimupinleifenleileibie"></span>
        <p>分类</p>
      </router-link>
      <router-link to="/home/shoping">
        <span class="icon iconfont icon-gouwuche-copy"></span>
        <p>购物车</p>
      </router-link>
      <router-link to="/home/my">
        <span class="icon iconfont icon-wode"></span>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "home",
  components: {}
});
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: scroll;
    background: #f4f4f4;
  }
  .footer {
    height: 50px;
    box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    background: white;
    z-index: 100;
    a {
      text-decoration: none;
      text-align: center;
      width: 20%;
      color: #333;
      span {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
  }
}
</style>
