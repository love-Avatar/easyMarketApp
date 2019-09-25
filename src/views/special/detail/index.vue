<template>
  <div class="specialDetail">
    <div class="detail-header">
      <a href="/home/classification">《</a>
      <div>关爱他成长的每一个足迹</div>
      <div></div>
    </div>
    <div class="main">
      <div class="mainImg">
        <img src="//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" />
        <img src="//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg" />
        <img src="//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg" />
        <img src="//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg" />
        <img src="//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" />
        <img src="//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg" />
        <img src="//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg" />
      </div>
      <div class="commentWrap">
          <div class="titleline">
              <span></span>
              <span class="icon iconfont">&#xe6b6;</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.specialDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .detail-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }
  .main {
    width: 100%;
    flex: 1;
    overflow: auto;
    .commentWrap{
        width:100%;
        height: 515px;
        background: #fff;
        .titleline{
            height: 50px;
            display: flex;
        }
    }
    .mainImg {
      width: 100%;
      height: auto;
      overflow: auto;
      > img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>