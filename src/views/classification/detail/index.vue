<template>
  <div class="calssificationDetail">
    <div class="detail-header">
      <a href="/home/classification">《</a>
      <div>奇趣分类</div>
      <div></div>
    </div>
    <div class="tablist">
      <div
        v-for="item in getNavlist"
        :class="[activeNav==item.id?'activeNav':'']"
        :key="item.id"
        @click="change(item.id)"
      >{{item.name}}</div>
    </div>
    <div class="categoryDetail">
      <div>{{gettitlelist&&gettitlelist.name}}</div>
      <div>{{gettitlelist&&gettitlelist.front_name}}</div>
    </div>
    <div class="goodsList">
      <div>
        <div class="goodsItem" v-for="item in getgoodlist" :key="item.id">
          <div class="goodsItemImg">
            <img :src="item.list_pic_url" />
          </div>
          <div class="goodsItemName">{{item.name}}</div>
          <div class="goodsItemPrice">￥{{item.retail_price}}元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      activeNav: this.$route.params.id
    };
  },

  computed: {
    ...mapState("catalog", ["getNavlist", "gettitlelist"]),
    ...mapState("good", ["getgoodlist"])
  },
  methods: {
    ...mapActions("catalog", ["getNavList"]),
    ...mapActions("good", ["getList"]),
    change(ind) {
      //改变class名
      this.activeNav = ind;
      //标题
      this.getNavList(ind);
      //标题下的商品列表
      this.getList(ind);
    }
  },
  mounted() {
    this.getList(this.$route.params.id);
    this.getNavList(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
.activeNav {
  color: #2196f3;
  border-bottom: 2px solid #2196f3;
}
.calssificationDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .goodsList {
    flex: 1;
    overflow: auto;
    width: 100%;
    > div {
      width: 100%;
      height: auto;
    }
    .goodsItem {
      display: inline-block;
      width: 50%;
      background: white;
      height: auto;
      padding: 5px;
      .goodsItemImg {
        width: 167.5px;
        height: 169.5px;
        img {
          width: 167px;
          height: 167px;
        }
      }
      .goodsItemName {
        width: 167px;
        text-align: center;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: 6px;
        padding-top: 4px;
      }
      .goodsItemPrice {
        width: 167px;
        text-align: center;
        font-size: 14px;
        overflow: hidden;
        padding-bottom: 6px;
        padding-top: 4px;
        color: red;
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
    display: flex;
    overflow: scroll;
    div {
      flex-shrink: 0;
      padding: 8px 20px;
      font-size: 12px;
    }
  }
}
</style>