<template>
  <div class="message">
    <div class="detail-header">
      <a href="/specialDetail">《</a>
      <div>填写留言</div>
      <div></div>
    </div>
    <div class="message-main">
      <div class="textAreaContent">
        <textarea class="inputArea" maxlength="80"></textarea>
        <div>0/80</div>
      </div>
      <div class="buttons">
        <div></div>
        <a role="button" aria-disabled="false" href="#">留言</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
      textarea {
        width: 100%;
        height: 87%;
        border: 0;
      }
      > div {
          float: right;
      }
    }
  }
}
</style>