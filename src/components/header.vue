<template>
  <div class="header">
    <div class="toolbar toolbar-ios">
      <div class="toolbar-background toolbar-background-ios" :style="{'background': background}"></div>
      <div class="bar-button">
        <span class="button-inner" @click="btnLeftFn()">
          <slot name="btn-left"></slot>
        </span>
      </div>
      <div class="bar-button">
        <span class="button-inner"  @click="btnRightFn()">
          <slot name="btn-right"></slot>
        </span>
      </div>
      <div class="title">
        <div class="toolbar-title toolbar-title-ios" @click="btnTitleFn()">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "y-header",
  props: {
    title: {
      type: String,
      default: "",
      required: false
    },
    background: {
      type: String,
      default: "#000000",
      required: false
    },
    btnLeft:{
      type: Function,
      default: () => {},
      required: false
    },
    btnRight:{
      type: Function,
      default: () => {},
      required: false
    },
    btnTitle:{
      type: Function,
      default: () => {},
      required: false
    }
  },
  mounted() {},
  methods: {
    btnLeftFn(){
      this.$emit('btnLeft')
    },
    btnRightFn(){
      this.$emit('btnRight')
    },
    btnTitleFn(){
      this.$emit('btnTitle')
    }
  }
};
</script>
<style scoped lang="less">
.header {
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
  display: block;
  width: 100%;
}

.toolbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  contain: content;
}

.toolbar-ios {
  padding: 0.04rem * 2;
  padding-left: 0.04rem * 2;
  padding-right: 0.04rem * 2;
  min-height: 0.44rem * 2;
}

.bar-button {
  margin: 0;
  padding: 0;
  text-align: center;
  -moz-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  display: inline-block;
  line-height: 1;
  text-overflow: ellipsis;
  text-transform: none;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: top;
  vertical-align: -webkit-baseline-middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.title {
  left: 0;
  top: 0;
  padding: 0 0.9rem * 2 1px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  pointer-events: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.toolbar-title {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toolbar-title-ios {
  text-align: center;
  font-size: 0.36rem;
  font-weight: 400;
  color: #fff;
  pointer-events: auto;
}

.toolbar-background {
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  pointer-events: none;
  contain: strict;
}

.toolbar-background-ios {
  background: #f8f8f8;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 0 0 0.55px;
}
</style>

<style lang="less">
.button-inner {
  img {
    width: 0.21rem;
    height: 0.36rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    &.right{
      width: 0.42rem;
      height:0.1rem;
    }
  }
  span {
    color: #ffffff;
    font-size: 0.3rem;
    font-weight: 400;
  }
}
</style>
