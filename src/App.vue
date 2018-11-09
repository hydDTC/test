<template>
  <div class="main">
    <div class="tabs">

      <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view></router-view>
      </transition>

    </div>

    <!-- 通过路由 push进来的页面渲染view -->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view name="mode"></router-view>
    </transition>

    <!-- 首次加载 -->
    <transition  name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view name="index"></router-view>
    </transition>



  </div>
</template>

<script>
export default {};
</script>

