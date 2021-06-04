<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <div class="icon"></div>
        <el-menu
          :default-active="$route.path.split('/')[1]"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#303133"
          active-text-color="#1989fa"
          :router="true"
        >
          <el-menu-item index="home">首页</el-menu-item>
          <el-menu-item index="timeMachine">时光机</el-menu-item>
          <el-menu-item index="study">学习小组</el-menu-item>
          <el-menu-item index="entertainment">娱乐室</el-menu-item>
        </el-menu>
      </el-header>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view class="main"></router-view>
      </transition>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
  },
};
</script>

<style scoped lang="scss">
/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 过渡动画 */

#app {
  min-height: 100vh;
  background: rgba($color: #fff, $alpha: 0.9);

  .el-container {
    .el-header {
      display: flex;
      justify-content: space-between;
      border-bottom: solid 1px #e6e6e6;

      .el-menu {
        width: 600px;
        height: 80px;
        background: rgba($color: #000000, $alpha: 0);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1989fa;
        border: none;

        .el-menu-item {
          opacity: 0.5;
          height: 100%;
          line-height: 80px;
          font-size: 18px;

          &:hover {
            background: rgba($color: #000000, $alpha: 0);
            opacity: 1;
          }

          &.is-active {
            opacity: 1;
            background: rgba($color: #000000, $alpha: 0);
          }
        }
      }
    }

    .main {
      height: calc(100vh - 80px);
      width: 1366px;
      margin: 0 auto;
    }
  }
}
</style>
