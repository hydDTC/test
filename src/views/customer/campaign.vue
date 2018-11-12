<template>
  <div class="push">
    <div class="tab-content" v-touch-event="eventTouch">
      <div class="search-box flex" ref="searchBox">
        <div class="flex search">
          <i class="input-search-icon"></i>
          <input type="search" placeholder="请输入活动的名称、ID ……" @search="change()" v-model="query.search_text">
        </div>
        <div class="flex search-screen" @click="show = !show">
          <span>筛选</span>
          <svg :class="{'active': show}" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 23 12">
            <defs>
              <path d="M708.49997,183.99986l-11.50002,-12.00004h22.99999z" id="Path-0"/>
            </defs>
            <desc>Generated with Avocode.</desc>
            <g transform="matrix(1,0,0,1,-697,-172)">
              <g>
                <use xlink:href="#Path-0" fill="#666666" fill-opacity="1"/>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="content">
        <div class="scroll-content" margin-tabbar style="padding-top: 0.94rem;" ref="scrollContent">

          <div class="card-data flex" @click="go(list.campaign_id, list.application_id)" v-for="list in list">
            <div class="status-item">
              <div class="flex">
                <div class="status-img">
                  <img v-if="list.current_state_origin == 1" src="../../assets/img/campaign-enable.png" alt="">
                  <img v-if="list.current_state_origin == 2" src="../../assets/img/campaign-suspend.png" alt="">
                  <img v-if="list.current_state_origin == 3" src="../../assets/img/campaign-end.png" alt="">
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

          <div v-if="!flag" style="font-size: 0.4rem; color: gray; text-align: center;">
             加载中。。。
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
            <span :class="{'selected': query.sort_expression===''}" @click="query.sort_expression = '' ">默认排序</span>
            <span @click="query.sort_expression = 'pv' " :class="{'selected': query.sort_expression==='pv'}">曝光</span>
            <span @click="query.sort_expression = 'click'" :class="{'selected': query.sort_expression==='click'}">点击</span>
            <span @click="query.sort_expression = 'cpc'" :class="{'selected': query.sort_expression==='cpc'}">点击成本</span>
            <span @click="query.sort_expression = 'cpm'" :class="{'selected': query.sort_expression==='cpm'}">曝光成本</span>
            <span @click="query.sort_expression = 'admoney'" :class="{'selected': query.sort_expression==='admoney'}">花费</span>
          </div>

          <h3 class="title-text">状态</h3>
          <div class="flex item">
            <span :class="{'selected': query.current_state===''}"   @click="query.current_state = ''">全部</span>
            <span v-for="ad_states in ad_current_states" @click="query.current_state = ad_states.lookup_code" :class="{'selected': query.current_state=== ad_states.lookup_code}">{{ad_states.meaning}}</span>
          </div>

          <h3 class="title-text">操作</h3>
          <div class="flex item">
            <span :class="{'selected': query.show_state===''}" @click="query.show_state = ''">全部</span>
            <span v-for="show_status in show_states" @click="query.show_state = show_status.lookup_code" :class="{'selected': query.show_state === show_status.lookup_code}">{{show_status.meaning}}</span>
          </div>

          <h3 class="title-text">时间</h3>
          <div class="flex item">
            <span class="date"><input type="date" v-model="query.begin_date"></span>
            <span class="date"><input type="date" v-model="query.end_date"></span>
          </div>


        </div>
        <div class="flex operating-btn">
          <button @click="recover()">重置</button>
          <button @click="ensure();show = !show">确定</button>
        </div>
      </div>
    </action-sheet>


  </div>
</template>
<script>
  import {campaignInit} from "../../services/service";
  import {campaignList} from "../../services/service";

  export default {
    data() {
      return {
        show: false,
        ad_current_states:[],
        show_states:[],
        list: [],
        query: {
          page_index: 1,
          page_size: 10,
          search_text:'',
          begin_date:'',
          end_date: '',
          sort_expression: '',
          show_state:'',
          current_state:'',
        },
        flag: true
      };
    },
    // this可以访问的到
    created(){
      this.query.begin_date = this.fmtDate();
      this.query.end_date = this.fmtDate();
      campaignInit({}).then((res)=> {
        console.info(res);
        this.ad_current_states = res.result.ad_current_states;
        this.show_states = res.result.show_states;
      })
      campaignList(this.query).then( res => {
        console.info(res);
        this.list.push(...res.result.items)
      })
    },
    mounted(){

      this.$refs.scrollContent.addEventListener("scroll", event => {
       if ( event.target.scrollHeight - event.target.scrollTop -  window.document.body.offsetHeight <= 50  ) {
              if (this.flag) {
                this.flag = false;
                this.query.page_index ++;
                campaignList(this.query).then( res => {
                  this.list.push(...res.result.items);
                  this.flag = true;
                })
              }
       }
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
      // begin_date: function(val, oldVal) {
      //   console.log('new: %s, old: %s', val, oldVal)
      // }
    },
    methods: {
      go(id, application_id) {
        console.log("push");
        let obj = {
          campaign_id: id,
          begin_date: this.query.begin_date,
          end_date: this.query.end_date
        }
        this.$router.push({name: "campaignDetail",  query: obj });
      },
      change() {
        this.query.page_index = 1;
        this.query.page_size = 10;
        this.list = [];
        campaignList(this.query).then( res => {
          this.list.push(...res.result.items);
        })
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
        this.query.show_state = '';
        this.query.sort_expression = '';
        this.query.current_state = '';
        this.query.begin_date = this.fmtDate();
        this.query.end_date = this.fmtDate();
      },
      fmtDate(){
        let date =  new Date();
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },
      ensure() {
        // let body = {
        //   show_state : this.query.show_state,
        //   sort_expression :this.query.sort_expression,
        //   current_state : this.query.current_state,
        //   begin_date : this.query.begin_date,
        //   end_date :  this.query.end_date
        // }
        campaignList(this.query).then( res => {
          this.list = res.result.items;
        })
      }
    }
  };
</script>
<style lang="less" scoped>


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
      background: url("../../assets/img/input-search.png") no-repeat center;
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
        transform: rotate(0deg);
        transition: all 200ms;
        &.active{
          transform: rotate(180deg);
        }
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
