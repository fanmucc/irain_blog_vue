<template>
    <div class="blog">
        <header>
            <HeaderTab :logo="logo" slogan="每天多吃一点点"></HeaderTab>
        </header>
        <main >
            <div class="container" style="position: relative;">
                <div class="label">
                    标签
                </div>
                <div class="main">
                    我是{{msg}}
                </div>
                <div class="user-msg">
                    user message
                </div>
            </div>
            
        </main>
        <footer style="text-align: center;">我是网站备案信息位置</footer>
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
        
        margin-top: 80px;
    }
    .main {
        position: absolute;
        box-sizing: border-box;
        left: 20%;
        top: 0;
        width: 60%;
        background: #fff;
        border-radius: 5px;
        padding: 10px;
    }
    .label, .user-msg {
        position: absolute;
        width: 10%;
        background: #fff;
    }
    .label {
        left: 10%;
    }
    .user-msg {
        right: 10%;
    }

    .container {
        min-height: calc(100vh - 120px);
    }
</style>
