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
import { getMenu } from "../services/service";
import { mapMutations } from "vuex";
export default {
  data(){
    return{
      a:1
    }
  },
  beforeMount() {
    console.info("beforeMount");
  },
  beforeCreate() {
    console.info("beforeCreate");

  },
  mounted() {
    console.info("mounted");
  },
  created() {
    console.info("ok");
    this.test()
    getMenu().then(res => {
      if (res.success == 200) {
        let menu = res.result;
        this.setMenu(menu);
        if (menu && menu.length && this.$route.name === "middle_home") {
          this.$router.replace({ path: menu[0].route });
        }
      }
    });
  },
  methods: {
    ...mapMutations(["setMenu"]),
    test(){
      console.info('okkkkkkkkk')
    }
  }
};
</script>
