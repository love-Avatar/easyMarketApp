<template>
  <div class="categorys">
    categorys
    <Scroll
      class="scroll_wrapper"
      :handleRefresh="handleRefresh"
      :handleLoadMore="handleLoadMore"
      :value="goodslist"
    >
      <div class="scroll_item" v-for="(item,index) in goodslist" :key="index">{{item.name}}</div>
    </Scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [
        { id: 1, name: "1234" },
        { id: 2, name: "2234" },
        { id: 3, name: "3234" },
        { id: 4, name: "4234" }
      ]
    };
  },

  methods: {
    handleRefresh() {
      console.log("handleRefresh");
      // setTimeout(() => {
      //   this.goodslist = [
      //     { id: 1, name: "1234" },
      //     { id: 2, name: "2234" },
      //     { id: 3, name: "3234" },
      //     { id: 4, name: "4234" }
      //   ];
      //   console.log(this.goodslist.length);
      // }, 5000);
    },
    handleLoadMore() {
      console.log("handleLoadMore");
      setTimeout(() => {
        this.goodslist.push({ id: 5, name: "2234" }, { id: 6, name: "3234" });
        console.log(this.goodslist.length);
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.categorys {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .scroll_wrapper {
    flex: 1;
  }
}
.scroll_item {
  height: 300px;
  border: 1px solid #000;
}
</style>