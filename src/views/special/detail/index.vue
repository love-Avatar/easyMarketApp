<template>
  <div class="specialDetail">
    <div class="detail-header">
      <a href="/home/classification">《</a>
      <div>{{getDetailTitle}}</div>
      <div></div>
    </div>
    <div class="main">
      <div class="mainImg" v-html="getDetailList"></div>
      <div class="commentWrap">
        <div class="titleline">
          <span>精选留言</span>
          <span class="icon iconfont" @click="message">&#xe6b6;</span>
        </div>
        <div class="commentItem" v-for="item in getTopicComentData" :key="item.id">
          <div class="item-top">
            <b>匿名用户</b>
            <span>{{item.add_time}}</span>
          </div>
          <div class="item-botm">{{item.content}}</div>
        </div>
        <!-- 查看更多评论 -->
        <a href="#" class="lookAll">查看更多评论</a>
      </div>
      <div class="relateTopic">
        <div class="relateTitle">推荐专题</div>
        <div class="relateItem" v-for="item in getDetailsubList" :key="item.id">
          <img :src="item.scene_pic_url" />
          <div>{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("topic", [
      "getDetailList",
      "getDetailTitle",
      "getDetailsubList",
      "getTopicComentData"
    ])
  },
  methods: {
    ...mapActions("topic", [
      "getTopicDetail",
      "getTopicsubList",
      "getTopicComent"
    ]),
    message() {
      this.$router.push("/message")
    }
  },
  mounted() {
    this.getTopicDetail(this.$route.params.id);
    this.getTopicsubList(this.$route.params.id);
    this.getTopicComent({
      valueId: this.$route.params.id,
      typeId: 1,
      size: 5,
      page: 1
    });
  }
};
</script>

<style lang="scss">
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
    .commentWrap {
      width: 100%;
      height: 470px;
      background: #fff;
      position: relative;
      .lookAll {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .titleline {
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        align-items: center;
        border-bottom: 1px solid #ccc;
      }
      .commentItem {
        width: 95%;
        height: 75px;
        margin: 0 auto;
        border-bottom: 1px solid #ccc;
        .item-botm {
          height: 50%;
          display: flex;
          align-items: center;
          font-size: 14px;
          color: gray;
        }
        .item-top {
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          b {
            font-size: 12px;
          }
          span {
            font-size: 12px;
            color: gray;
          }
        }
      }
    }
    .mainImg {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .relateTopic {
      width: 100%;
      height: auto;
      background: #eeeeee;
      .relateTitle {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .relateItem {
        width: 100%;
        height: auto;
        background: #fff;
        width: 98%;
        margin: 0 auto;
        padding: 10px 0;
        > img {
          width: 95%;
          height: auto;
          margin: 0 2.5%;
        }
        > div {
          height: 50px;
          line-height: 50px;
          color: gray;
          font-size: 14px;
          margin-left: 3%;
        }
      }
    }
  }
}
</style>

