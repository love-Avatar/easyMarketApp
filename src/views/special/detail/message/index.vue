<template>
  <div class="message">
    <div class="detail-header">
      <a href="/specialDetail">《</a>
      <div>填写留言</div>
      <div></div>
    </div>
    <div class="message-main">
      <div class="textAreaContent">
        <textarea @input="valueChange" v-model="valueText" class="inputArea" maxlength="80"></textarea>
        <div>0/80</div>
      </div>
      <div class="buttons">
        <div v-if="flag">清空</div>
        <a role="button" @click="msge" aria-disabled="false" href="#">留言</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      valueText: ""
    };
  },
  methods: {
    valueChange() {
      console.log(this.valueText);
      if (this.valueText !== "") {
        this.flag = true;
      } else {
        this.flag = false;
      }
    },
    msge() {
      if (this.valueText !== "") {
        this.$router.push("/home/special");
      } else {
        alert("写点东西再走呗");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .detail-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    box-shadow: 2px 2px 2px 1px #eee;
  }
  .message-main {
    flex: 1;
    .textAreaContent {
      width: 96%;
      margin: 0 auto;
      height: 200px;
      background: #eee;
      margin-top: 10px;
      padding: 5px 2%;
      border-radius: 5px;
      textarea {
        width: 100%;
        height: 87%;
        border: 0;
        border-radius: 5px;
        outline: none;
      }
      > div {
        float: right;
      }
    }
    .buttons {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      align-items: center;
      a {
        width: 100px;
        height: 30px;
        background: #108ee9;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
      }
      div {
        width: 100px;
        height: 30px;
        background: #eee;
        color: #333;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>