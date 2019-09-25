<template>
  <div>
    <Special :getlist="getlist" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Special from "../../components/special/index.vue";
export default {
  components: {
    Special
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("topic", ["getlist"])
  },
  methods: {
    ...mapActions("topic", ["getTopicList"])
  },
  mounted() {
    this.getTopicList();
  }
};
</script>

<style lang="scss" scoped>
</style>