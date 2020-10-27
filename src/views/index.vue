<!--  -->
<template>
  <div class="index">
    <el-container>
      <el-header height="80px">
        <div class="icon"></div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#1989fa"
          active-text-color="#1989fa"
          :router="true"
        >
          <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="timeMachine">时光机</el-menu-item>
          <el-menu-item index="study">学习小组</el-menu-item>
          <el-menu-item index="entertainment">娱乐室</el-menu-item>
        </el-menu>
      </el-header>
      <router-view class="main"></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path.split('/').reverse()[0], // 当前选中的导航
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
@import "../assets/sass/index.scss";
</style>
