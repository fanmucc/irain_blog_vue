<template>
    <div class="blog">
        <header>
            <HeaderTab :logo="logo" slogan="每天多吃一点点"></HeaderTab>
        </header>
        <main style="height: 150vh">
            我是{{msg}}
        </main>
        <footer>我是网站备案信息位置</footer>
    </div>
</template>
<script lang="ts">
import HeaderTab from './components/header-tab'

// 引入图片资源
import logoMin from '../assets/logo-min.jpg';

import { ref, Ref } from 'vue'
export default {
    components: {
        HeaderTab
    },
    setup () {
        const msg:Ref<string> = ref('模板123');
        const logo: Ref<string> = ref(logoMin)
        return {
            msg,
            logo
        }
    }
}
</script>
<style>
    .blog {
        padding: 0.1px;
    }
    header {
        position: fixed;
        height: 64px;
        width: 100%;
        box-shadow: 0 2rpx 0 0 rgba(240,240,240,1);
    }
    main {
        margin-top: 64px;
    }
</style>
