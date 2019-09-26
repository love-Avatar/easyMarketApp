<template>
  <div class="loading">
    <div class="loading_content">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" >
%center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  @extend %center;

  div.loading_content {
    width: 150px;
    height: 120px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    @extend %center;

    .circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #fff;
      border-right: 2px solid chartreuse;
      animation: loading 1.2s linear infinite;
    }
  }
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>