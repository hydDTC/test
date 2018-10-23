<template>
  <div class="push">

    <div class="tab-content">
      <y-header title="首页"></y-header>
      <div class="content">
        <div class="scroll-content" margin-tabbar margin-header>
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

    <!--处理子类的页面跳转-->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>

  export default {

      data(){
      return {
          message: 'hyd',
          budget_show: false,
          money: 100
      }
    },
      beforeCreate() {

      },
      created(){

      },
      mounted(){

      },
      methods:{
          open() {
              this.budget_show = true;
          },
          change_budget(e) {
              console.log('接收到了')
              console.log(e)
              this.budget_show = false
              this.money = e;
          }
      },
      beforeRouteLeave (to, from, next) {
          // console.log(to)
          // console.log(from)
          next();
      }
  }


</script>
<style>
  .scroll-content, h1 {
    font-size: 0.19rem
  }


</style>
