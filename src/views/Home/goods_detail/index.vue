<template>
  <div>
    goods
    <!-- {{goods_details}} -->
    {{goods_related}}
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("good", ["goods_details", "goods_related"])
  },
  methods: {
    ...mapActions("good", ["get_goods_details", "get_goods_related"])
  },
  mounted() {
    const id = this.$route.params.id;
    this.get_goods_details(id);
    this.get_goods_related(id);
  }
};
</script>

<style lang="scss" scoped>
</style>