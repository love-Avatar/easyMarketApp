<template>
  <div>
    <!-- Nav_swiper -->
    <div class="nav_banner" v-if="HomePageMSG.banner">
      <swiper class="banner_container" :options="swiperOption">
        <swiperSlide class="banner_img_box" v-for="item in HomePageMSG.banner" :key="item.id">
          <img v-lazy="item.image_url" alt="ss" />
        </swiperSlide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- Nav -->
    <div class="nav" v-if="HomePageMSG.channel">
      <div
        class="nav_item"
        v-for="item in HomePageMSG.channel"
        :key="item.id"
        @click="$router.push(`/categorys/${item.id}}`)"
      >
        <img v-lazy="item.icon_url" alt class="img_icon" />
        <span>{{item.name}}</span>
      </div>
    </div>

    <!-- 品牌制造商直供 -->
    <div class="brand" v-if="HomePageMSG.brandList">
      <div class="title">品牌制造商直供</div>
      <div class="img_wrapper">
        <div
          class="img_box"
          v-for="item in HomePageMSG.brandList"
          :key="item.id"
          @click="$router.push(`/brandDetail/${item.id}}`)"
        >
          <img v-lazy="item.new_pic_url" alt="ss" />
        </div>
      </div>
    </div>

    <!-- newGoodsList  新品首发 -->
    <div class="newgoods" v-if="HomePageMSG.newGoodsList">
      <div class="title">新品首发</div>
      <div class="img_wrapper">
        <div
          class="img_box"
          v-for="item in HomePageMSG.newGoodsList"
          :key="item.id"
          @click="$router.push(`/goods/${item.id}}`)"
        >
          <img v-lazy="item.list_pic_url" alt="ss" />
          <p>{{item.name}}</p>
          <li>￥{{item.retail_price}}</li>
        </div>
      </div>
    </div>

    <!-- hotGoodsList  人气推荐 -->
    <div class="hotgoods" v-if="HomePageMSG.hotGoodsList">
      <div class="title">人气推荐</div>
      <div class="img_wrapper">
        <div
          class="img_box"
          v-for="item in HomePageMSG.hotGoodsList"
          :key="item.id"
          @click="$router.push(`/goods/${item.id}}`)"
        >
          <img v-lazy="item.list_pic_url" alt="ss" />
          <div class="details">
            <p>{{item.name}}</p>
            <li>{{item.goods_brief}}</li>
            <span>￥{{item.retail_price}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 专题精选  topicList -->
    <div class="topic" v-if="HomePageMSG.topicList">
      <div class="title">专题精选</div>
      <swiper class="banner_container" :options="swiperTopicOption" ref="mySwiper">
        <swiperSlide class="banner_img_box" v-for="item in HomePageMSG.topicList" :key="item.id">
          <img :src="item.item_pic_url" alt="ss" />
          <div class="footer">
            <p>
              <b>{{item.title}}</b>
              <span>￥{{item.price_info}} 元起</span>
            </p>
            <li>{{item.subtitle}}</li>
          </div>
        </swiperSlide>
      </swiper>
    </div>

    <!-- categoryList  专题分类详情 -->
    <div class="topicList" v-if="HomePageMSG.categoryList">
      <div v-for="item in HomePageMSG.categoryList" :key="item.id">
        <div class="title">{{item.name}}</div>
        <div class="img_wrapper">
          <div
            class="top_list_item"
            v-for="it in item.goodsList"
            :key="it.id"
            @click="$router.push(`/goods/${item.id}}`)"
          >
            <img v-lazy="it.list_pic_url" alt="ss" />
            <p>{{it.name}}</p>
            <li>￥ {{it.retail_price}}</li>
          </div>
          <div class="morelist" @click="$router.push(`/categorys/${item.id}}`)">
            <div class="content">
              <p>更多{{item.name}}好物</p>
              <img
                class="more_icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="
                alt="ss"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="is_show_loading"></Loading>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {
      is_show_loading: true,
      swiperOption: {
        autoplay: true,
        delay: 1000,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperTopicOption: {
        autoplay: true,
        delay: 1000,
        loop: true,
        click: true,
        preventClicksPropagation: false,
        slidesPerView: 1.2, // 设置slider容器能够同时显示的slides数量
        centeredSlides: true, // active slide 居中
        on: {
          click: () => {
            let swiper = this.$refs.mySwiper.swiper;
            let i = swiper.activeIndex - 2;
            console.log(i);
            const id = this.HomePageMSG.topicList[i].id;
            this.$router.push(`/topicDetail/${id}}`);
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState("home", ["HomePageMSG"])
  },
  methods: {
    ...mapActions("home", ["getHomePageList"])
  },
  mounted() {
    this.getHomePageList();
    // 切换loading
    setTimeout(() => {
      this.is_show_loading = false;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}
%full {
  width: 100%;
  height: 100%;
}
%banner {
  .banner_container {
    width: 100%;
    height: 100%;
    .banner_img_box {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
%ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.nav_banner {
  width: 100%;
  height: 200px;
  @extend %banner;
}
.nav {
  width: 100%;
  height: 80px;
  display: flex;
  background: #fff;
  text-align: center;
  padding-top: 15px;
  margin-bottom: 15px;
  .nav_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    img {
      display: block;
      width: 50%;
      margin-left: 25%;
    }
  }
}
.newgoods,
.brand {
  background: #fff;
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-weight: bold;
    font-size: 16px;
  }
  .img_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .img_box {
    width: 50%;
    height: 110px;
    img {
      @extend %full;
    }
  }
}
.newgoods {
  margin-bottom: 15px;
  .img_box {
    text-align: center;
    height: 200px;
    a {
      display: block;
      @extend %full;
    }
    img {
      height: 140px;
    }
    li {
      height: 30px;
      line-height: 30px;
      color: darkred;
    }
    p {
      height: 30px;
      line-height: 30px;
    }
  }
}
.hotgoods {
  background: #fff;
  padding-left: 5%;
  padding-right: 5%;
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
  }
  .img_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .img_box {
    border-top: 1.5px solid #f4f4f4;
    width: 100%;
    height: 150px;
    display: flex;
    img {
      width: 140px;
      height: 140px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 30px;
      padding-top: 30px;
      p {
        height: 30px;
      }
      li {
        height: 30px;
        color: #ccc;
      }
      span {
        height: 30px;
        color: darkred;
      }
    }
  }
}
.topic {
  width: 100%;
  height: 312px;
  background: #fff;
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  @extend %banner;
  .swiper-wrapper {
    width: 80% !important;
  }
  .swiper-slide-prev,
  .swiper-slide-next {
    transform: scale(0.95) !important;
  }
  .banner_img_box {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
  img {
    height: 200px !important;
  }
  .footer {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 25px;
    p {
      font-size: 16px;
      b {
        width: 60%;
        font-weight: normal;
        @extend %ellipsis;
      }
      span {
        width: 60%;
        color: darkred;
      }
    }

    li {
      width: 100%;
      font-size: 14px;
      color: #ccc;
      @extend %ellipsis;
    }
  }
}
.topicList {
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .img_wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
.top_list_item {
  width: 50%;
  height: 238px;
  text-align: center;
  background: #fff;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 90%;
    margin-left: 5%;
  }
  p {
    @extend %ellipsis;
  }
  li {
    color: darkred;
  }
}
.top_list_item:nth-child(odd) {
  border-bottom: 2px solid #f4f4f4;
  // border-right: 1px solid #000;
}
.top_list_item:nth-child(even) {
  border-left: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
}
.morelist {
  @extend %center;
  width: 50%;
  height: 238px;
  background: #fff;
  text-align: center;
  border-left: 2px solid #f4f4f4;
  border-bottom: 2px solid #f4f4f4;
  .more_icon {
    margin-top: 15px;
    width: 30px;
  }
}
</style>