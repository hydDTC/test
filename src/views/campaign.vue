<template>
  <div class="push">
    <div class="tab-content" v-touch-event="eventTouch">
      <!-- <y-header title="活动"></y-header> margin-header -->

      <div class="search-box flex" ref="searchBox">
        <div class="flex search">
          <i class="input-search-icon"></i>
          <input type="search" placeholder="请输入创意的名称、ID ……" @search="change()">
        </div>
        <div class="flex search-screen">
          <span @click="show = !show">筛选</span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 23 12">
            <defs>
              <path d="M708.49997,183.99986l-11.50002,-12.00004h22.99999z" id="Path-0"/>
            </defs>
            <desc>Generated with Avocode.</desc>
            <g transform="matrix(1,0,0,1,-697,-172)">
              <g><title>多边形 1</title>
                <use xlink:href="#Path-0" fill="#666666" fill-opacity="1"/>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="content">
        <div class="scroll-content" margin-tabbar style="padding-top: 0.94rem;" ref="scrollContent">

          <div class="card-data flex" @click="go()" v-for="list in campaList">
            <div class="status-item">
              <div class="flex">
                <div class="status-img">
                  <img :src="list.current_state_origin | imgFilter  " alt="">
                </div>
                <div class="status-info">
                  <p>{{list.campaign_name}}</p>
                  <p>曝光：<span>{{list.PV}}</span> 点击：<span>{{list.click}}</span> 花费：<span>{{list.ADMoney}}</span></p>
                </div>
              </div>
              <p> [ {{list.current_state_origin_meaning}}: {{list.current_state_meaning}} ] </p>
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
          </div>


        </div>
      </div>
    </div>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>


    <action-sheet v-model="show">
      <div>
        <div class="operating">
          <h3 class="title-text">排序</h3>
          <div class="flex item">
            <span :class="{'selected': sort_expression===''}" @click="sort_expression = '' ">默认排序</span>
            <span @click="sort_expression = 'pv' " :class="{'selected': sort_expression==='pv'}">曝光</span>
            <span @click="sort_expression = 'click'" :class="{'selected': sort_expression==='click'}">点击</span>
            <span @click="sort_expression = 'cpc'" :class="{'selected': sort_expression==='cpc'}">点击成本</span>
            <span @click="sort_expression = 'cpm'" :class="{'selected': sort_expression==='cpm'}">曝光成本</span>
            <span @click="sort_expression = 'admoney'" :class="{'selected': sort_expression==='admoney'}">花费</span>
          </div>

          <h3 class="title-text">状态</h3>
          <div class="flex item">
            <span :class="{'selected': current_state===''}"   @click="current_state = '' ">全部</span>
            <span v-for="ad_states in ad_current_states" @click="current_state = ad_states.lookup_code" :class="{'selected': current_state=== ad_states.lookup_code}">{{ad_states.meaning}}</span>
          </div>

          <h3 class="title-text">操作</h3>
          <div class="flex item">
            <span :class="{'selected': show_state===''}" @click="show_state = ''">全部</span>
            <span v-for="show_status in show_states" @click="show_state = show_status.lookup_code" :class="{'selected': show_state === show_status.lookup_code}">{{show_status.meaning}}</span>
          </div>

          <h3 class="title-text">时间</h3>
          <div class="flex item">
            <span class="date"><input type="date" v-model="begin_date"></span>
            <span class="date"><input type="date" v-model="end_date"></span>
          </div>


        </div>
        <div class="flex operating-btn">
          <button @click="recover()">重置</button>
          <button @click="ensure()">确定</button>
        </div>
      </div>
    </action-sheet>


  </div>
</template>
<script>
  import {campaignInit} from "../services/service";
  import {campaignList} from "../services/service";

  export default {
    data() {
      return {
        show: false,
        ad_current_states:[],
        current_state:'',
        show_states:[],
        show_state:'',
        sort_expression: '',
        sort_direction: '',
        campaList: [],
        begin_date:'',
        end_date: ''
      };
    },
    mounted(){
      this.begin_date = this.fmtDate();
      this.end_date = this.fmtDate();
      campaignInit({}).then((res)=> {
        console.info(res);
        this.ad_current_states = res.result.ad_current_states;
        this.show_states = res.result.show_states;
      })
      campaignList({}).then( res => {
        console.info(res);
        this.campaList = res.result.items;
      })
    },
    filters: {
        imgFilter: function (value) {
        let x = ''
        switch(value) {
          case 1:
            x = 'img/campaign-enable.png'
            break;
          case 2:
            x = 'img/campaign-suspend.png'
            break;
          case 3:
            x = 'img/campaign-end.png'
            break;
          default:
            x = "";
        }
        return x
      }
    },
    watch: {
      begin_date: function(val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      }
    },
    methods: {
      go() {
        console.log("push");
        this.$router.push({name: "campaignDetail"});
      },
      change() {
        alert(1);
      },
      eventTouch(event) {
        let scrollTop = this.$refs.scrollContent.scrollTop;
        let clientHeight = this.$refs.searchBox.clientHeight;
        if (event.position.y === 0) return;
        if (event.position.y > 0) {
          this.$refs.searchBox.classList.remove("slide");
        } else if (event.position.y < 0 && scrollTop >= clientHeight) {
          this.$refs.searchBox.classList.add("slide");
        }
      },
      recover() {
        this.show_state = '';
        this.sort_expression = '';
        this.current_state = '';
        this.begin_date = this.fmtDate();
        this.end_date = this.fmtDate();
      },
      fmtDate(){
        let date =  new Date();
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },
      ensure() {

      }
    }
  };
</script>
<style lang="less" scoped>
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
            background: url("../assets/img/selected-bc.png") no-repeat right bottom;
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
          width:100%;
          height:100%;
          border: none;
          background-color: transparent;
          /*color : white;*/
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

  .search-box {
    &.slide {
      top: -0.94rem;
    }
    left: 0;
    top: 0;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 0.94rem;
    box-shadow: 0 1px 0 rgba(204, 204, 204, 0.35);
    background-color: #ffffff;
    padding: 0 0.3rem;
    align-items: center;
    transition: top 0.2s ease-in-out;
    .input-search-icon {
      width: 0.28rem;
      height: 0.28rem;
      display: block;
      background: url("../assets/img/input-search.png") no-repeat center;
      background-size: 100%;
    }
    .search {
      flex: 1;
      height: 0.58rem;
      border-radius: 0.1rem;
      background-color: #eeeeee;
      align-items: center;
      margin-right: 0.4rem;
      .input-search-icon {
        margin: 0 0.2rem;
      }
      input {
        flex: 1;
        height: 100%;
        border: none;
        background: transparent;
        font-size: 0.28rem;
        font-weight: 400;
      }
    }
    .search-screen {
      margin-left: auto;
      align-items: center;
      > span {
        color: #666666;
        font-size: 0.32rem;
        font-weight: 400;
        padding-right: 0.1rem;
      }
      > svg {
        width: 0.23rem;
        height: 0.12rem;
      }
    }
  }

  .card-data + .card-data {
    margin-top: 1px;
  }

  .card-data {
    padding: 0.3rem;
    align-items: center;
    background: #ffffff;
    .status-img {
      width: 0.8rem;
      height: 0.8rem;
    }
    .status-info {
      padding-left: 0.3rem;
      p:nth-child(1) {
        color: #333333;
        font-size: 0.36rem;
        font-weight: 400;
      }
      p:nth-child(2) {
        color: #666666;
        font-size: 0.24rem;
        font-weight: 400;
        padding: 0.08rem 0;
      }
      span {
        color: #333333;
      }
    }
    .status-item {
      > p {
        color: #999999;
        font-size: 0.24rem;
        font-weight: 400;
        padding-left: 1.1rem;
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
</style>
