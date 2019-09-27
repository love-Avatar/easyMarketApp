<template>
  <div class="scrollWrap">
    <div class="scrollIChildren">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
    </div>
    <button class="up">下拉刷新</button>
    <button class="down">上拉加载</button>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    let scrollWrap = document.querySelector(".scrollWrap");
    // let scroll = new BScroll(wrapper, {});
    this.$nextTick(() => {
      this.bScroll = new BScroll(scrollWrap, {
        // scrollY: true,
        pullDownRefresh: {
          threshold: 50,
          probeType: 3
        },
        pullUpLoad: {
          threshold: 75
        }
      });
    });

    // this.myScroll.on("pullingDown", () => {
    //   this.$nextTick(() => {
    //     this.myScroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
    //   });
    //   this.myScroll.finishPullDown(); // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
    // });

    // this.myScroll.on("pullingUp", () => {
    //   this.$nextTick(() => {
    //     this.myScroll.refresh(); // DOM 结构发生变化后，重新初始化BScroll
    //   });
    //   this.myScroll.finishPullUp(); // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
    // });
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.scrollWrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scrollIChildren {
    width: 100%;
    height: auto;
    position: relative;
    p {
      width: 100%;
      height: 500px;
    }
  }
  .up,
  .down {
    width: 100%;
    height: 50px;
    border: 0;
    background: #ccc;
    font-size: 18px;
  }
  .up {
    position: relative;
    top: -50px;
    left: 0;
  }
  .down {
    position: relative;
    bottom: -50px;
    left: 0;
  }
}
</style>