<template>
  <div>
    <div class="calssificationDetail">
      <div class="detail-header">
        <div>《</div>
        <div>奇趣分类</div>
        <div></div>
      </div>
      <div class="tablist">
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
        <div>布艺软装</div>
      </div>
      <div class="categoryDetail">
        <div>布艺软装</div>
        <div>各种风格软装点你的家</div>
      </div>
      <div class="goodsList">
        <div class="goodsItem">
          <div class="goodsItemImg">
            <img src="http://yanxuan.nosdn.127.net/bda805b0a2464b6ec33c18981565e50e.png" />
          </div>
          <div class="goodsItemName">简约知性系列居家地毯 蓝粉拼接</div>
          <div class="goodsItemPrice">￥559元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.calssificationDetail {
  .goodsList {
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    .goodsItem {
      width: 50%;
      background: white;
      height: auto;
      padding: 5px;
      position: relative;
      .goodsItemImg {
        width: 167.5px;
        height: 169.5px;
      }
    }
  }
  .detail-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  .categoryDetail {
    width: 100%;
    height: 75px;
    background: #f2f2f2;
    text-align: center;
    padding: 15px 0;
  }
  .tablist {
    width: 100%;
    height: 32px;
    display: flex;
    overflow: scroll;
    align-items: center;
    div {
      flex-shrink: 0;
      padding: 0 20px;
      font-size: 12px;
    }
  }
}
</style>