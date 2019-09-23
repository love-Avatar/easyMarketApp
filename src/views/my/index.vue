<template>
  <div class="myPage">
    <div class="userMsgWrap">
      <div class="userlogo"></div>
      <div class="userMsg">
        <div>15323807318</div>
        <div>普通用户</div>
      </div>
    </div>
    <div class="userPower">
      <div style="color:rgb(33,150,245)">
        <span style="color:rgb(33,150,245)" class="icon iconfont">&#xe700;</span>
        <div>我的收藏</div>
      </div>
      <div style="color:rgb(33,150,245)">
        <span style="color:rgb(33,150,245)" class="icon iconfont">&#xe618;</span>
        <div>地址管理</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe611;</span>
        <div>我的订单</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe6b6;</span>
        <div>周末拼单</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe608;</span>
        <div>优惠券</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe624;</span>
        <div>优选购</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe61d;</span>
        <div>我的红包</div>
      </div>

      <div>
        <span class="icon iconfont">&#xe609;</span>
        <div>会员plus</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe77c;</span>
        <div>邀请返利</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe601;</span>
        <div>意见返利</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe61e;</span>
        <div>客服咨询</div>
      </div>
      <div>
        <span class="icon iconfont">&#xe622;</span>
        <div>账号安全</div>
      </div>
    </div>
    <div class="outlogin">退出登录</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.myPage {
  width: 100%;
  .userMsgWrap {
    height: 150px;
    background: url("http://yanxuan.nosdn.127.net/d069279e5834bbca17065a9855a014bf.png")
      no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .userlogo {
      width: 80px;
      background: url("http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png")
        no-repeat;
      background-size: 100%;
      height: 80px;
      border-radius: 50%;
    }
    .userMsg {
      width: 245px;
      margin-left: 10px;
      div {
        height: 30px;
        color: #fff;
        line-height: 30px;
      }
    }
  }
  .userPower {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 33.333%;
      height: 125px;
      background: white;
      border: 1px solid gainsboro;
      text-align: center;
      padding-top: 10%;
      span {
        font-size: 30px;
        color: #9e9e9e;
      }
      div {
        margin-top: 5px;
      }
    }
  }
  .outlogin {
    width: 100%;
    height: 50px;
    background: #fff;
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
  }
}
</style>