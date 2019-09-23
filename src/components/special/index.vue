<template>
  <div class="subSpecial">
    <div class="subSpecial-box">
      <img src="https://yanxuan.nosdn.127.net/14943267735961674.jpg" />
      <div class="topicItemTitle">关爱他成长的每一个足迹</div>
      <div class="topicItemSubtitle">专业运动品牌同厂，毛毛虫鞋买二送一</div>
      <div class="topicItemPrice">0元起</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subSpecial {
  width: 100%;
  .subSpecial-box {
    width: 100%;
    height: 290px;
    background: #fff;
    img {
      width: 100%;
      height: 200px;
    }
    .topicItemTitle {
      font-size: 15px;
      line-height: 30px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 30px;
    }
    .topicItemSubtitle {
      font-size: 12px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: gray;
      line-height: 25px;
      height: 25px;
    }
    .topicItemPrice {
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: red;
      height: 25px;
    }
  }
}
</style>