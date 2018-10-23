<template>


    <div class="content-modal">

        <y-header title="创意详情"></y-header>
        <div class="content">
            <div class="scroll-content" margin-tabbar margin-header>
                <span><router-link to="/creative">返回</router-link></span>
                <span>创意详情</span>
            </div>
        </div>


    </div>



</template>

<script>
    export default {
        name: "creativeDetail"
    }
</script>

<style scoped>
   span {
       font-size: 0.19rem;
   }
</style>