<template>
  <div class="timelineCard">
    <el-card>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style>
</style>