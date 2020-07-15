<!--  -->
<template>
    <div class="index">
        <el-button class="btn-home" plain @click="$router.push({path:'home'})">进入主页</el-button>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {};
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
/* @import url(); 引入css类 */
@import "../assets/sass/index.scss";
</style>
