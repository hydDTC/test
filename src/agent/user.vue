<template>
    <div class="content-modal">
        <y-header title="用户"></y-header>
        <div class="content">
            <div class="scroll-content" margin-tabbar margin-header>
                <router-link to="/index"> <span>返回</span> </router-link>
                <h1>当前账户</h1>
                index
                <router-link :to="{name:'user'}"> <h1>上海银橙传媒有限公司</h1> </router-link>
                <router-link to="/login"> <h1>login</h1> </router-link>
                <span @click="open()">修改预算: {{money}}</span>

                <transition name="fade">
                  <y-budget v-if="budget_show"  @change_budget="change_budget" :money="money"></y-budget>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    h1,span {
        font-size: 0.19rem;
    }

</style>
