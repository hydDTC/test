<template>
  <div class="panel-box" :class="{'show':show2}" >
    <transition name="bounce" @after-leave="show2 = !show2" @before-enter="show2 = !show2">
      <div class="panel" v-if="show">
        <slot></slot>
      </div>
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div @click="show = !show" class="mask" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "action-sheet",
  props: {
    value: {
      //接收一个 value prop
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      show2: false
    };
  },
  computed: {},
  watch: {
    show(val) {
      this.$emit("input", val); //触发 input 事件，并传入新值
    },
    value(val) {
      this.show = val;
    }
  },
  methods: {}
};
</script>
<style scoped lang="less">
.panel-box {
  left: 0;
  top: 0.95rem;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  overflow: hidden;
  &.show {
    z-index: 11;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .panel {
    left: 0;
    top: 0;
    bottom: 1rem;
    right: 0;
    position: absolute;
    background-color: #fff;
    padding-bottom: 0.85rem;
    z-index: 11;
  }
}
</style>

<style lang="less">
.operating {
  padding: 0.3rem;
  .title-text {
    color: #333333;
    font-size: 0.3rem;
    padding: 0.3rem 0;
  }
  .item {
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      display: block;
      width: 2.16rem;
      height: 0.64rem;
      border-radius: 0.02rem;
      border: 1px solid #efefef;
      background-color: #f7f7f7;
      text-align: center;
      line-height: 0.64rem;
      margin-bottom: 0.2rem;
      color: #666666;
      font-size: 0.26rem;
      font-weight: 400;
      position: relative;
      &.selected {
        color: #3a93e2;
        border-radius: 0.02rem;
        border: 1px solid #3090e6;
        background-color: #e2efff;
        &::after {
          content: "";
          background: url("../assets/img/selected-bc.png") no-repeat right
            bottom;
          background-size: 100%;
          width: 0.4rem;
          height: 0.4rem;
          display: block;
          position: absolute;
          // bottom: 0;
          // right: 0;
          bottom: -0.01rem;
          right: -0.01rem;
        }
      }
      &.date {
        border: none;
        width: 3.16rem;
      }
      & > input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
      }
    }
  }
}

.operating-btn {
  height: 0.85rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  button {
    flex: 1;
    font-size: 0.32rem;
    font-weight: 400;
  }
  button:nth-child(1) {
    background: #eaf4fe;
    color: #398ded;
  }
  button:nth-child(2) {
    background: #3090e6;
    color: #ffffff;
  }
}
</style>
