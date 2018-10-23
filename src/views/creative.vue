<template>
    <div class="push">
        <div class="tab-content">
            <y-header title="创意"></y-header>
            <div class="content">
                <div class="scroll-content" margin-tabbar margin-header>
                    <span>creative</span>
                    <ul>
                        <li> <router-link :to="{name:'creativeDetail'}">跳转到对应的创意详情</router-link></li>
                    </ul>
                </div>
            </div>
        </div>

        <!--处理子类的页面跳转-->
        <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
            <router-view></router-view>
        </transition>

    </div>

</template>
<script>
    export default {}
</script>
<style>
    span, ul > li {
        font-size: 0.19rem;
    }

</style>
