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
                <nav>
                    <ul>
                        <li>首页</li>
                    </ul>
                    <ul>
                        <li>前端</li>
                    </ul>
                    <ul>
                        <li>插件</li>
                    </ul>
                </nav>
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