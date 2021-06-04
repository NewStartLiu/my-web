<template>
  <div class="timeMachine">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in timelineList"
        :key="index"
        :timestamp="item.time"
        placement="top"
      >
        <timelineCard
          :title="item.commit"
          :content="item.author + ' 提交于 ' + item.time"
        ></timelineCard>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "timeMachine",
  components: {
    timelineCard: () => import("../../components/timelineCard"),
  },
  data() {
    return {
      timelineList: [
        {
          time: "2018/6/6",
          author: "刘熠",
          commit: "网站初建",
        },
        {
          time: "2018/6/6",
          author: "刘熠",
          commit: "网站初建",
        },
        {
          time: "2018/6/6",
          author: "刘熠",
          commit: "网站初建",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.timeMachine {
  padding-top: 20px;
}
</style>