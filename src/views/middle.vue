<template>
  <div class="push">
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view name="node"></router-view>
    </transition>

    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <keep-alive>
        <router-view name="footer"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import {getMenu} from '../services/service'
import {mapMutations} from 'vuex'
  export default {
    created(){

      getMenu().then(res => {
        if(res.success == 200){
          let menu = res.result
          this.setMenu(menu)
          if(menu && menu.length && this.$router.name === 'middle_home'){
            this.$router.push({path:menu[0].route})
          }
        }
      })
    },
    methods:{
      ...mapMutations([
        'setMenu',
      ])
    }
  };
</script>
