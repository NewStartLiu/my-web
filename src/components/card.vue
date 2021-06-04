<template>
  <div class="card">
    <h2 class="title">这是卡片的标题</h2>
    <p class="info">这是文章信息</p>
    <p class="content">这是文章内容</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  .title {
    font-weight: 400;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .info {
    font-size: 10px;
    color: #999;
    padding: 10px 0;
  }
  .content {
    color: 303133;
  }
}
</style>