<template>

    <div class="content-modal">

        <y-header title="用户"></y-header>
        <div class="content">
            <div class="scroll-content" margin-tabbar margin-header>
                <span> <router-link to="/campaign">返回</router-link></span>
                <h1>咪咕下面的创意列表</h1>
                <ul>
                    <li> <router-link to="/creative/creativeDetail">跳转到对应的创意详情</router-link></li>
                </ul>
            </div>
        </div>


    </div>


</template>

<script>
    export default {
        name: "campaignDetail"
    }
</script>

<style scoped>

    span, h1, ul>li {
        font-size: 0.19rem;
    }

</style>