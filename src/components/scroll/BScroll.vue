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
      loading_msg: "玩命加载中... 请耐心等待", //   "加载完成"  "没有更多数据了"
      timeout_lock: null //超时设置
    };
  },
  props: {
    list: {
      required: true,
      default: () => ({
        //   query?: {[key:string]:any}, 查询条件
        query: {
          type: Object,
          required: false
        },
        // limit?: number, 每次查询的数量 默认10
        limit: {
          type: Number,
          required: false,
          default: 10
        },
        // count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
        count: {
          type: Number,
          required: true
        },
        // refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
        refreshDispatch: {
          type: Function,
          required: false
        },
        // loadMoreDispatch: string loadMore 查询的store dispacthName
        loadMoreDispatch: {
          type: Function,
          required: true
        },
        // value: Array<{[key:string]:any}> 查询结果  渲染结果
        value: {
          type: Array
          //   required: true
        }
      })
    }
  },

  // 加载过程中滑动时   loading 动画还存在
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
    this.scroll.on("pullingDown", async () => {
      this.is_pull_down = true;
      const result = await this.list.refreshDispatch(this.list.query);
      if (result) {
        this.value = result; //替换数据
      }
      setTimeout(() => {
        this.is_pull_down = false;
        this.scroll.finishPullDown();
        this.scroll.refresh();
      }, 300);
      //   this.set_timeout_lock(); //超时锁设置  loading 设置
    });
    //监听上拉加载
    this.scroll.on("pullingUp", async () => {
      this.is_pull_up = true;
      const result = await this.list.refreshDispatch(this.list.query);
      if (result) {
        this.value = result; //替换数据
      }
      setTimeout(() => {
        this.is_pull_up = false;
        this.scroll.finishPullUp();
        this.scroll.refresh();
      }, 200);
      //   this.set_timeout_lock(); //超时锁设置
    });
  }
};

//   methods: {
//     // 结束下拉刷新
//     finish_pull_down() {
//       this.timeout_lock = null;
//       setTimeout(() => {
//         this.is_pull_down = false;
//         this.scroll.finishPullDown();
//         this.scroll.refresh();
//       }, 300);
//     },
//     // 结束上啦加载
//     finish_pull_up() {
//       this.timeout_lock = null;
//       setTimeout(() => {
//         this.is_pull_up = false;
//         this.scroll.finishPullUp();
//         this.scroll.refresh();
//       }, 200);
//     },
//     // 超时锁设置
//     set_timeout_lock() {
//       this.timeout_lock = null;
//       this.loading_msg = "玩命加载中... 请耐心等待";
//       this.timeout_lock = setTimeout(() => {
//         this.loading_msg = "没有更多数据了";
//         this.is_pull_down && this.finish_pull_down();
//         this.is_pull_up && this.finish_pull_up();
//       }, 3000);
//     }
//   },
//   watch: {
//     value() {
//       if (this.is_pull_down) {
//         this.loading_msg = "加载完成";
//         this.finish_pull_down();
//         return;
//       }
//       if (this.is_pull_up) {
//         this.loading_msg = "加载完成";
//         this.finish_pull_up();
//         return;
//       }
//     },
//     deep: true
//   }
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