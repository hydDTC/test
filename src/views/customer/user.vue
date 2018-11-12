<template>
  <div class="content-modal">

    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../../assets/img/left.png">
        <span>返回</span>
      </template>
      <span>智橙广告投放平台</span>
      <!-- <template slot="btn-right">
        <img class="right" src="../../assets/img/menus.png">
      </template> -->
    </y-header>

    <div class="content">
      <div class="scroll-content" margin-header style="background-color: white">
        <!--<router-link to="/index"> <span>返回</span> </router-link>-->
        <!--<h1>当前账户</h1>-->
        <!--index-->
        <!--<router-link :to="{name:'user'}"> <h1>上海银橙传媒有限公司</h1> </router-link>-->
        <!--<router-link to="/login"> <h1>login</h1> </router-link>-->
        <!--<span @click="open()">修改预算: {{money}}</span>-->

        <!--<transition name="fade">-->
        <!--<y-budget v-if="budget_show"  @change_budget="change_budget" :money="money"></y-budget>-->
        <!--</transition>-->

        <div class="title-bg"></div>
        <div class="title-img">
          <img src="../../assets/img/3-layers.png">
        </div>

        <div class="user-content">
          <h2>{{user.nick_name}}</h2>
          <div class="detail">
            <div>
              <span>用户名：<span class="status">{{user.user_name}}</span> </span>
            </div>
             <div>
              <span>公司名称：<span class="status">{{user.nick_name}}</span></span>
            </div>
            <!-- <div>
              <span>手机：<span class="status">投放中</span> </span>
            </div> -->
          </div>
        </div>

        <!-- <div class="remind">
          <div>
            <img src="../../assets/img/clock.png"><span class="status">提醒设置</span>
          </div>

          <i class="status-go">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 33">
              <defs>
                <path id="sxdya" d="M700.86 300.8l3.01-3 16.1 16.08-16.1 16.08-3-3 13.08-13.08z"/>
              </defs>
              <g>
                <g opacity=".8" transform="translate(-701 -297)">
                  <use fill="#ccc" xlink:href="#sxdya"/>
                </g>
              </g>
            </svg>
          </i>
        </div> -->


        <div class="bottom">
          <button @click="lgout()">退出当前账户</button>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import {quit, current} from '../../services/service'
export default {
  data(){
    return {
      user:{}
    }
  },
  created(){
    current().then(res => {
       if(res.success == 200){
         this.user = res.result.user || {};
       }
     })
  },
  mounted(){

  },
  methods: {
    lgout(){
      quit().then(res => {
        if(res.success == 200){
          this.$router.push({path: '/'})
        }
      })
    },
    btnLeft() {
      this.$router.replace({name:'home'})
    },
    btnRight() {
      this.$router.replace({name:'home'})
    },
    btnTitle() {
      this.$router.replace({name:'home'})
    },
  }
};
</script>

<style scoped lang="less">
.top-header {
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1001;
  height: 0.92rem;
  line-height: 0.92rem;
  display: flex;
  padding: 0 0.2rem;

  .text {
    margin-left: 1.22rem;
    color: #ffffff;
    font-size: 0.36rem;
    font-weight: 400;
  }
  /*.right {*/
  /*width: 0.42rem;*/
  /*height:0.1rem;*/
  /*}*/
}

.title-bg {
  height: 1.8rem;
  background: #216ad1 url("../../assets/img/user-bg.png") no-repeat;
}

.title-img {
  width: 1.78rem;
  height: 1.78rem;
  position: absolute;
  top: 0.67rem;
  left: 2.76rem;
  > img {
    width: 100%;
    height: 100%;
  }
}

.user-content {
  padding-top: 0.01rem;
  background-color: white;
  h2 {
    margin-top: 1.25rem;
    color: #3090e6;
    font-size: 0.32rem;
    font-weight: 400;
    line-height: 0.32rem;
    text-align: center;
  }
  .detail {
    background-color: white;
    margin-top: 0.71rem;
    padding: 0 0.4rem;
    > div {
      border-bottom: 1px solid #efefef;
      height: 1rem;
      line-height: 1rem;
      span {
        font-size: 0.28rem;
        font-weight: 400;
        color: #999999;
        .status {
          color: #333333;
        }
      }
    }
  }
}

.remind {
  padding: 0 0.5rem;
  background-color: white;
  margin-top: 0.3rem;
  height: 1.02rem;
  display: flex;
  align-items: center;
  > div {
    img {
      vertical-align: middle;
      margin-right: 0.5rem;
      width: 0.48rem;
      height: 0.52rem;
    }
    .status {
      color: #333333;
      font-size: 0.28rem;
      font-weight: 400;
    }
  }
  .status-go {
    width: 0.2rem;
    height: 0.33rem;
    display: block;
    margin-left: auto;
    font-size: 0.2rem;
  }
}

.bottom {
  text-align: center;
  margin-top: 2.38rem;
  button {
    width: 6.8rem;
    height: 1rem;
    border-radius: 0.05rem;
    background-color: #2d84ed;
    color: #ffffff;
    font-size: 0.32rem;
    font-weight: 400;
  }
}
</style>
