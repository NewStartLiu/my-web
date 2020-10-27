<template>
    <div id="app">
        <audio
            autoplay="autoplay"
            style="display: none;"
            controls="controls"
            loop="loop"
            ref="bgm"
            src="/%E5%B2%91%E5%AE%81%E5%84%BF-%E8%BF%BD%E5%85%89%E8%80%85%EF%BC%88%E4%BC%B4%E5%A5%8F%EF%BC%89.mp3"
        >
            你的浏览器不支持audio标签
        </audio>
        <header>
            <div class="bgm">
                <i
                    @click="isPlay"
                    :class="[
                        'iconfont',
                        bgmIsPlay ? 'icon-icon_bofang' : 'icon-bofang',
                    ]"
                ></i>
            </div>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {},
    data() {
        return {
            bgmIsPlay: true,
        };
    },
    methods: {
        isPlay() {
            if (this.bgmIsPlay) {
                this.$refs.bgm.pause();
            } else {
                this.$refs.bgm.play();
            }
            this.bgmIsPlay = !this.bgmIsPlay;
        },
    },
    mounted() {
        // this.$refs.bgm.play();
    },
};
</script>

<style scoped lang="scss">
@import "./assets/css/iconfont/iconfont.css";
@import "./assets/sass/app.scss";
</style>
