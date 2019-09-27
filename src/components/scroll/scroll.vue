<template>
  <div class="bscroll-warp" ref="scroll_wrapper">
    <div class="scroll_container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      is_pull_down: false, //配合做 loading 动画
      is_pull_up: false, //配合做 loading 动画
      scroll: null
    };
  },
  props: [
    "handleRefresh", //下拉刷新的回调
    "handleLoadMore" //上啦加载的回调
    // "value",
    // "query",
    // "limit",
    // "count",
    // "ishandlefinish" //是否结束加载
  ],
  mounted() {
    const eleScroll = this.$refs.scroll_wrapper;
    // 实例化
    this.scroll = new BScroll(eleScroll, {
      pullDownRefresh: {
        threshold: 50,
        stop: 40
      },
      pullUpLoad: {
        threshold: 50,
        stop: 40
      }
    });
    //监听下拉事件
    this.scroll.on("pullingDown", () => {
      this.is_pull_down = true;
      //数据请求替换
      this.handleRefresh();
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.is_pull_up = true;
      // connect 拼接数据
      this.handleLoadMore();
    });
  },
  updated() {
    if (this.is_pull_down) {
      this.scroll.finishPullDown();
      this.is_pull_down = false;
      return;
    }
    if (this.is_pull_up) {
      this.scroll.finishPullUp();
      this.is_pull_up = false;
      return;
    }
    this.scroll.refresh();
  }
};

// @props {
//     list: {
//         query?: {[key:string]:any}, 查询条件
//         limit?: number, 每次查询的数量 默认10
//         count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
//         refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
//         loadMoreDispatch: string loadMore 查询的store dispacthName
//         value: Array<{[key:string]:any}> 查询结果  渲染结果
//     }
// }
</script>

<style lang="scss" scoped>
.scroll_wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll_container {
    width: 100%;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.down_refresh {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 50px;
  line-height: 50%;
  font-size: 18px;
  color: red;
  text-align: center;
}
.upload_more {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 50px;
  line-height: 50%;
  font-size: 18px;
  color: red;
  text-align: center;
}
</style>