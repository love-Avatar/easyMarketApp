<template>
  <keep-alive>
    <div class="categorys">
      <div class="nav_box">
        <div class="nav_container">
          <div
            :class="item.checked?'nav_item active':'nav_item'"
            v-for="(item) in defaullt_msg.filterCategory"
            @click="getGoodList({ categoryId:item.id})"
            :key="item.id"
          >{{item.name}}</div>
        </div>
      </div>
      <Scroll class="scroll_wrapper" :list="list">
        <div class="scroll_title">
          {{defaullt_msg.filterCategory&&
          defaullt_msg.filterCategory.filter(item=>item.checked)[0].name}}
        </div>
        <div class="scroll_contianer">
          <div class="scroll_item" v-for="(item) in defaullt_msg.goodsList" :key="item.id">
            <img v-lazy="item.list_pic_url" />
            <p>{{item.name}}</p>
            <span>￥{{item.retail_price}}</span>
          </div>
        </div>
      </Scroll>
    </div>
  </keep-alive>
</template>

<script>
// @click="activeIndex=index;  defaullt_msg.queryMore.categoryId=item.id"
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
      list: {},
      queryMore: {
        // brandId?: string,
        categoryId: ""
        // sort?: string,
        // order?: string,
        // page?: string,
        // size?: string
      },
      query_list: [{}]
    };
  },
  computed: {
    ...mapState("catagorys_detail", ["defaullt_msg"])
  },
  methods: {
    ...mapActions("catagorys_detail", ["getGoodList"])
  },
  mounted() {
    this.getGoodList({ categoryId: this.$route.params.id });
  },
  updated() {
    // this.list = {
    //   refreshDispatch: this.getGoodList,
    //   loadMoreDispatch: this.getGoodList,
    //   value: this.query_list,
    //   query: this.queryMore,
    //   // count: 1,
    //   limit: 6
    // };
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
.scroll_contianer {
  display: flex;
  flex-wrap: wrap;
}
.scroll_title {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-weight: bold;
}
.scroll_item {
  height: 200px;
  // border: 1px solid #000;
  width: 50%;
  img {
    width: 80%;
    margin-left: 10%;
  }
}

.nav_box {
  height: 50px;
  line-height: 50px;
  width: 100%;
  overflow: auto;
  .nav_container {
    width: auto;
    white-space: nowrap;
    .nav_item {
      display: inline-block;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
}
.active {
  border-bottom: 2px solid blue;
  color: red;
}
</style>