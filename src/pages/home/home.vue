<template>
  <div class="home">
    <el-container>
      <el-main>
        <card
          v-for="i in 4"
          :key="i"
        ></card>
      </el-main>
      <el-aside width="400px">
        <div class="card2">
          <div class="card2-header">
            <i class="card2-icon el-icon-s-custom"></i>
            <span class="card2-title">我的名片</span>
          </div>
          <div class="card2-main">
            <p class="card2-text">昵称：张三</p>
            <p class="card2-text">职业：前端开发攻城狮</p>
            <p class="card2-text">现居：广东省-深圳市</p>
            <p class="card2-text">Email：new-yi@qq.com</p>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Card from "../../components/card.vue";
export default {
  name: "home",
  components: {
    Card,
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.home {
  .el-container {
    height: 100%;

    .el-main {
      .card {
        margin-bottom: 20px;
      }
    }

    .el-aside {
      padding: 20px;
      .card2 {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .card2-header {
          height: 56px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding-left: 20px;
          .card2-title {
            font-weight: 700;
            margin-left: 10px;
          }
          .el-icon-s-custom {
            color: orangered;
          }
        }
        .card2-main {
          padding: 20px;
          .card2-text {
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>