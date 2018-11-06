<template>



    <div class="mask">
        <div class="mask-content">
            <div class="scroll-mask">
                预算弹框 弹弹弹 弹走鱼尾纹
                从父亲传过来的 {{money}}
                <span @click="cancel">取消</span>
            </div>
        </div>
    </div>


</template>

<script>
export default {
  name: "y-budget",
  props: ["money"],
  methods: {
    cancel() {
      console.log("取消");
      this.$emit("change_budget", 1000);
    }
  }
};
</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
}
.mask-content {
  width: 80%;
}
.scroll-mask {
  width: 100%;
  height: 2rem;
  background-color: white;
  border-radius: 15px;
}
</style>
