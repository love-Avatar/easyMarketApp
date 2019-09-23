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
      <div>
        
      </div>
    </div>
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
    div {
      width: 33.333%;
      height: 125px;
      background: white;
      border: 1px solid gainsboro;
    }
  }
}
</style>