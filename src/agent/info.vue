<template>
  <div class="push">
    <div class="tab-content">
    <y-header title="详情"></y-header>
    <div class="content">
      <div class="scroll-content" margin-tabbar margin-header>
        info
        <router-link to="/login"> <h1>login</h1> </router-link>
        <div class="test"></div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .test {
    height:7rem;
    border:1px solid red;
  }

</style>
