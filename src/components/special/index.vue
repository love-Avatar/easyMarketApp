<template>
  <div class="subSpecial">
    <div class="subSpecial-box" v-for="item in getlist" :key="item.id">
      <img :src="item.scene_pic_url" />
      <div class="topicItemTitle">{{item.title}}</div>
      <div class="topicItemSubtitle">{{item.subtitle}}</div>
      <div class="topicItemPrice">{{item.price_info}}元起</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["getlist"]
};
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