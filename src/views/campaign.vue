<template>
  <div class="push">
    <div class="tab-content">
    <y-header title="活动"></y-header>
    <div class="content">
      <div class="scroll-content" margin-tabbar margin-header>
        campaign11111
        <ul>
          <li>

            <router-link :to="{name:'campaignDetail'}"> <h1>咪咕</h1> </router-link>

            <router-link to="/campaign/campaignDetail">咪咕</router-link>

          </li>
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
  .scroll-content, ul>li {
    font-size: 0.19rem;
  }
</style>
