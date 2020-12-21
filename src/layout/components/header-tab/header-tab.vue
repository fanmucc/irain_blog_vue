<template>
    <div class="blog_header">
        <div class="web_header">
            <div class="web_header_le">
                <img class="logo" :src="logo" alt="logo">
                <div class="slogan">
                    <span>{{slogan}}</span>
                </div>
                
            </div>
            <div class="web_header_rg">
                <ul class="nav_list">
                    <li class="active">首页</li>
                    <li>前端使用测</li>
                    <li>插件</li>
                    <li>前端使用测</li>
                    <li>插件</li>
                </ul>
            </div>
        </div>
        <div class="iphone_header">
        </div>
    </div>
</template>
<script>
import './header-tab.css'
export default {
    props: {
        logo: String,
        slogan: String
    }
}
</script>