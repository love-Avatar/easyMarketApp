<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store);
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  overflow: hidden;
}
// html{
//   font-size: calc(100/375*100vw)
// }
</style>
