<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
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
</style>
