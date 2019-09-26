<template>
  <div class="classification">
    <div class="seachInput">
      <input type="text" placeholder="搜索商品，共239款好物" />
    </div>
    <div class="tab-container">
      <!-- 左侧点击列表 -->
      <div class="tab-list">
        <div
          v-for="item in getlist"
          :class="[activechange==item.id?'active':'']"
          :key="item.id"
          @click="change(item)"
        >{{item.name}}</div>
      </div>
      <!-- 商品列表 -->
      <div class="tab-commodity">
        <div class="commodity-logo">
          <img :src="bannerimg" />
          <p>{{front_name}}</p>
        </div>
        <div class="categoryTitle">
          <div>——</div>
          <div>{{name}}分类</div>
          <div>——</div>
        </div>
        <div class="subCategory">
          <a :href="'/classificationDetail/'+item.id" v-for="item in getsublist" :key="item.id">
            <img :src="item.wap_banner_url" />
            <div>{{item.name}}</div>
          </a>
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
      bannerimg:
        "http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png",
      front_name: "回家，放松身心",
      name: "居家",
      activechange: 1005000
    };
  },
  computed: {
    ...mapState("catalog", ["getlist", "getsublist"])
  },
  methods: {
    ...mapActions("catalog", ["getList", "getListById"]),
    change(item) {
      console.log(item.id);
      this.bannerimg = item.wap_banner_url;
      this.front_name = item.front_name;
      this.name = item.name;
      this.activechange = item.id;
      this.getListById(item.id);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
.classification {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tab-container {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    height: 100%;
    border-top: 2px solid #eee;
    .tab-commodity {
      width: 73%;
      overflow: scroll;
      .subCategory {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5px 5px 5px;
        a {
          background: transparent;
          text-decoration: none;
          outline: none;
          width: 50%;
          img {
            width: 100%;
            padding: 5px;
            height: auto;
          }
          div {
            font-size: 14px;
            text-align: center;
            padding: 5px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #333;
          }
        }
      }
      .categoryTitle {
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          margin: 0 10px;
          font-size: 14px;
          color: #2196f3;
        }
      }
      .commodity-logo {
        width: 100%;
        height: 100px;
        position: relative;
        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: white;
        }
        img {
          width: 100%;
          height: 100px;
        }
      }
    }
    .tab-list {
      width: 27%;
      height: auto;
      border-right: 2px solid #eee;
      div {
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
        font-size: 14px;
      }
    }
  }
  .seachInput {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    input {
      height: 28px;
      text-align: center;
      background: #eeeeee;
      color: #3333;
      width: 337px;
      border: 0;
      border-radius: 5px;
      font-size: 14px;
    }
  }
}
.active {
  color: #2196f3;
  border-left: 2px solid #2196f3;
}
</style>