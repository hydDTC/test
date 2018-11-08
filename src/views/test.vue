<template>
<div class="push">
  <div class="tab-content">
    <div class="content">
      <div class="scroll-content" ref="test">
        <button @click="link()">link</button>

        <form ref="form">
          <div>
            <input type="text" required>
          </div>
          <div>
          </div>
          <div>
            <input type="text" ref="number" pattern="(^[0-9]\d*\.?\d{0,2}$)" required>
          </div>
          <button @click="save()" type="button">save</button>
        </form>

      </div>
    </div>
  </div>
</div>
</template>
<script>
import Loading from '../components/loading/Loading'
export default {
  data() {
    return {
      list: [
        "6620596176129363214",
        "6620515399978978568",
        "6620364076331568388",
        "6620359707674545412",
        "6620330982287346951",
        "6620224254321364231",
        "6620217325834472708",
        "6620146393728158980",
        "6619995548348845315",
        "6619980339253087502",
        "6619849168875687176",
        "6619798119104122115",
        "6619794965956398349",
        "6619778914430487816",
        "6619774684302937348",
        "6619643749083401475",
        "6619616936722435341",
        "6619576687174634755",
        "6619516791708192013",
        "6619433271707045133",
        "6619401961756167427"
      ],
      href: "snssdk1128://aweme/detail/6620596176129363214" // 'snssdk1128://aweme/detail/6620515399978978568?refer=web&gd_label=click_wap_profile_feature&appParam=&needlaunchlog=1' //itms-appss://itunes.apple.com/cn/app/a.me-yin-le-duan-shi-pin-she-qu/id1142110895?l=zh&ls=1&mt=8&ct=share_profile
    };
  },
  mounted(){

  },
  methods: {
    link() {
      this.list.forEach(href => {
        let i = document.createElement("iframe");
        i.style.display = "none";
        !(function(ii) {
          setTimeout(() => {
            ii.src = `snssdk1128://aweme/detail/${href}`;
          }, 0);
        })(i);
        this.$refs.test.appendChild(i);
      });
    },
    save(){
      console.dir(this.$refs.form.reportValidity())
      console.dir(this.$refs.form.checkValidity())
      console.dir(this.$refs.form.noValidate)
      console.dir(this.$refs.form)
      console.dir(this.$refs.form.value)
    }
  }
};
</script>
<style lang="less" scoped>
button {
  font-size: 1rem;
  padding: 0 0.5rem;
}
</style>
