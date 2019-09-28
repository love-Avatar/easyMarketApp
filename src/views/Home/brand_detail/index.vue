<template>
  <div class="brand_page_wrapper">
    <h3>
      <router-link to="/home/index">&lt;</router-link>
      <p>{{brand_detail_logo.name}}</p>
      <a href></a>
    </h3>
    <div class="brand_page">
      <div class="brand_logo">
        <img :src="brand_detail_logo.new_pic_url" alt />
        <div class="brand_tit">{{brand_detail_logo.simple_desc}}</div>
      </div>
      <div class="brand_list">
        <div
          class="brand_list_item"
          v-for="item in brand_detail_list"
          :key="item.id"
          @click="$router.push(`/goods/${item.id}`)"
        >
          <img :src="item.list_pic_url" alt="sa" />
          <p>{{item.name}}</p>
          <li>￥{{item.retail_price}}元</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("good", ["brand_detail_list", "brand_detail_logo"])
  },
  methods: {
    ...mapActions("good", ["get_brand_logo", "get_brand_list"])
  },
  mounted() {
    console.clear();
    console.log(this.$route.params.id, "this.$route.params.id");
    this.get_brand_logo(this.$route.params.id);
    this.get_brand_list({ brandId: this.$route.params.id });
  }
};
</script>

<style lang="scss" scoped>
.brand_page_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
h3 {
  height: 50px;
  line-height: 50px;
  display: flex;
  text-align: center;
  a {
    flex: 2;
  }
  p {
    flex: 10;
  }
}
.brand_page {
  flex: 1;
  overflow: auto;
}
.brand_logo {
  height: 310px;
  img {
    height: 210px;
  }
}

.brand_list {
  display: flex;
  flex-wrap: wrap;
}
.brand_list_item {
  width: 50%;
  height: 200px;
  border: 1px solid #000;
  img {
    width: 80%;
    padding-left: 10%;
  }
}
</style>