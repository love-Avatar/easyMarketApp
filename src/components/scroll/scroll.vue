<template>
  <div class="bscroll-warp" ref="scroll_wrapper">
    <div class="scroll_container">
      <div v-show="is_pull_down" class="down_refresh">{{loading_msg}}</div>
      <slot></slot>
      <div v-show="is_pull_up" class="upload_more">{{loading_msg}}</div>
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
      scroll: null,
      loading_msg: "玩命加载中... 请耐心等待",
      timeout_lock: null //超时设置
      // "没有更多数据了"
    };
  },
  props: [
    "handleRefresh", //下拉刷新的回调
    "handleLoadMore", //上啦加载的回调
    "value"
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
      this.set_timeout_lock(); //超时锁设置  loading 设置
      this.handleRefresh(); //数据请求替换
    });
    //监听上拉加载
    this.scroll.on("pullingUp", () => {
      this.is_pull_up = true;
      this.set_timeout_lock(); //超时锁设置
      this.handleLoadMore(); // connect 拼接数据
    });
  },
  methods: {
    // 结束下拉刷新
    finish_pull_down() {
      this.timeout_lock = null;
      setTimeout(() => {
        this.is_pull_down = false;
        this.scroll.finishPullDown();
        this.scroll.refresh();
      }, 300);
    },
    // 结束上啦加载
    finish_pull_up() {
      this.timeout_lock = null;
      setTimeout(() => {
        this.is_pull_up = false;
        this.scroll.finishPullUp();
        this.scroll.refresh();
      }, 200);
    },
    // 超时锁设置
    set_timeout_lock() {
      this.timeout_lock = null;
      this.loading_msg = "玩命加载中... 请耐心等待";
      this.timeout_lock = setTimeout(() => {
        this.loading_msg = "没有更多数据了";
        this.is_pull_down && this.finish_pull_down();
        this.is_pull_up && this.finish_pull_up();
      }, 3000);
    }
  },
  watch: {
    value() {
      if (this.is_pull_down) {
        this.loading_msg = "加载完成";
        this.finish_pull_down();
        return;
      }
      if (this.is_pull_up) {
        this.loading_msg = "加载完成";
        this.finish_pull_up();
        return;
      }
    }
  },
  deep: true
};
/**
 *  正在加载  加载完成  么有更多数据了
 *  加载超时  自动结束加载  加载失败
 */
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
  position: relative;
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