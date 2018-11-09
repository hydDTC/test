<template>
  <div class="push">

    <div class="tab-content" v-touch-event="eventTouch">

      <ul class="title flex" ref="title">
        <li @click="type='one'" :class="{'active': type==='one'}">我的账户</li>
        <li @click="type='two'" :class="{'active': type==='two'}">消费记录</li>
        <li @click="type='three'" :class="{'active': type==='three'}">充值记录</li>
      </ul>

      <div class="content">
        <div class="scroll-content" margin-tabbar  ref="scrollContent" style="padding-top: 0.95rem;">

          <div v-if="type === 'one' " class="one">
            <router-link :to="{name:'user'}">
              <div class="user-header">
                <div class="user-head">
                  <img src="img/index-default-head.png">
                </div>
                <div class="user-info">
                  <p>银橙（上海）信息技术有限公司</p>
                  <p>用户名：541874126@ycmedia.cn</p>
                </div>
                <i class="user-right-go"></i>
              </div>
            </router-link>

            <div>
              <div class="data-card">
                <div class="card-border flex">
                  <div class="item">
                    <p>{{report_data.PV}}</p>
                    <p>曝光量（次）</p>
                  </div>
                  <div class="item">
                    <p>{{report_data.Click}}</p>
                    <p>点击量（次）</p>
                  </div>
                </div>
              </div>

              <div class="data-card">
                <div class="card-border flex">
                  <div class="item">
                    <p>{{report_data.CTR}}</p>
                    <p>点击率（%）</p>
                  </div>
                  <div class="item">
                    <p>{{report_data.CPC}}</p>
                    <p>点击均价（元）</p>
                  </div>
                </div>
              </div>

              <div class="data-card">
                <div class="card-border flex">
                  <div class="item">
                    <p>{{report_data.CPM}}</p>
                    <p>展示均价（元）</p>
                  </div>
                  <div class="item">
                    <p>{{report_data.ADMoney}}</p>
                    <p>今日消耗（元）</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../../assets/img/index-balance.png" alt="">
                </div>
                <p class="info-text">账户余额 （元）</p>
              </div>
              <p class="info-number">{{account_info.balance}}</p>
            </div>

            <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../../assets/img/index-budget.png" alt="">
                </div>
                <p class="info-text">每日预算 （元）</p>
              </div>
              <div class="flex">
                <p class="info-number">{{account_info.max_day_money}}</p>
                <button class="budget-edit btn btn-primary" @click="revise()">修改</button>
              </div>
            </div>

            <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../../assets/img/index-statistics.png" alt="">
                </div>
                <p class="info-text">广告统计</p>
              </div>
              <div class="flex">
                <div class="status-item">
                  <p>{{advert_Total.wait_count}}</p>
                  <p>待审核</p>
                </div>
                <div class="status-item">
                  <p>{{advert_Total.wait_submit_count}}</p>
                  <p>未通过</p>
                </div>
                <div class="status-item">
                  <p>{{advert_Total.pass_count}}</p>
                  <p>有效广告</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="type === 'two' " class="two">

            <ul class="first_part">
              <li>
                <p><img src="../../assets/img/yue.png"><span>账户余额（元）</span></p>
                <p>{{consume.balance}}</p>
              </li>
              <li>
                <p><img src="../../assets/img/today.png"><span>今日花费（元）</span></p>
                <p>{{consume.today_consume}}</p>
              </li>
              <li>
                <p><img src="../../assets/img/leiji.png"><span>累计花费（元）</span></p>
                <p>{{consume.total_consume}}</p>
              </li>
            </ul>

            <div class="second_part">
              <div class="choose">
                <span>筛选</span>
                <span class="up" @click="triangle_show = !triangle_show; consume_query.sort_direction = 1;" v-if="!triangle_show"></span>
                <span class="down" @click="triangle_show = !triangle_show; consume_query.sort_direction = 0;" v-if="triangle_show"></span>
                <input type="date" v-model="consume_query.begin_date">
                <input type="date" v-model="consume_query.end_date">
              </div>

              <div class="data" v-for="list in consumeList">
                <p>
                  <span>消费</span>
                  <span>-{{list.consume_money}}</span>
                </p>
                <p>{{list.current_date}}</p>
              </div>
            </div>

          </div>
          <div v-if="type === 'three' " class="two three">

            <ul class="first_part">
              <li>
                <p><img src="../../assets/img/chongzhi.png"><span>累计充值（元）</span></p>
                <p>{{recharge.c_money}}</p>
              </li>
              <li>
                <p><img src="../../assets/img/peisong.png"><span>累计配送（元）</span></p>
                <p>{{recharge.d_money}}</p>
              </li>
              <li>
                <p><img src="../../assets/img/tuikuan.png"><span>累计退款（元）</span></p>
                <p>{{recharge.f_money}}</p>
              </li>
            </ul>

            <div class="second_part">
              <div class="choose">
                  <span>筛选</span>
                  <span class="up" @click="triangle_show_recharge = !triangle_show_recharge; recharge_query.sort_direction = 1;" v-if="!triangle_show_recharge"></span>
                  <span class="down" @click="triangle_show_recharge = !triangle_show_recharge; recharge_query.sort_direction = 0;" v-if="triangle_show_recharge"></span>
                  <input type="date" v-model="recharge_query.begin_date">
                  <input type="date" v-model="recharge_query.end_date">
              </div>

              <div class="data" v-for="list in  rechargeList">
                <p>
                  <span>{{list.recharge_type_name}}</span>
                  <span>{{list.money}}</span>
                </p>
                <p>
                  <span>{{list.creation_date}}</span>
                  <span>{{list.reciprocal_nick_name}}</span>
                </p>
                <p>
                  <span>[{{list.description}}]</span>
                </p>
              </div>


            </div>

          </div>

        </div>
      </div>
    </div>

    <!--处理子类的页面跳转-->
    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>


    <!-- 修改预算 -->
    <!--  :value="show" @input="handleInput"  v-modal的缩写-->
    <modal v-model="budget_show">
      <div class="budget_show">
        <h2>修改每日预算</h2>
        <div class="tips">
          <p>当前账户每日预算 3,500/天</p>
          <p>每次修改幅度≥50元</p>
        </div>
        <form class="form">
          <div class="connect">
            <div class="input">
              <input v-model="money" placeholder="预算" type="number">
            </div>
            <span v-if="money < 100">请输入大于100的合法数字</span>
          </div>
          <div class="btn">
            <button type="button" @click="cancel()">取消</button>
            <button type="button" @click="ensure()">确定</button>
          </div>
        </form>
      </div>
    </modal>

  </div>
</template>
<script>
  import {homeInit, consumeRecord, rechargeRecord, updateMaxDayMoney, consumeList, rechargeList} from "../../services/service";


  export default {
    data() {
      return {
        type: 'one',
        report_data: {},
        advert_Total:{},
        account_info:{},
        budget_show: false,
        money: '',
        end_date: '',
        begin_date:'',
        consume: {},
        consumeList:[],
        rechargeList:[],
        triangle_show: false,
        triangle_show_recharge: false,
        consume_query:{
          begin_date: '',
          end_date: '',
          sort_direction: 0
        },
        recharge_query:{
          begin_date: '',
          end_date: '',
          sort_direction: 0
        },
        recharge: {}
      };
    },
    beforeCreate() {
    },
    created() {
      console.info('11')
     this.init();
      this.consume_query.begin_date = this.fmtDate();
      this.consume_query.end_date = this.fmtDate();
      this.recharge_query.begin_date = this.fmtDate();
      this.recharge_query.end_date = this.fmtDate();
    },
    mounted() {
    },
    watch:{
      type(val) {
        switch(val) {
          case 'one' :
            this.init()
                break;
          case 'two' :
            consumeRecord().then( res => {
              this.consume = res.result;
            })
            consumeList(this.consume_query).then( res => {
                  this.consumeList = res.result.items;
            })
            break;
          case 'three':
            rechargeRecord({}).then( res =>{
              this.recharge = res.result;
            })
            rechargeList(this.recharge_query).then( res => {
              this.rechargeList = res.result.items;
            })
                break;

        }
      },
      consume_query: {
        handler(val){
            consumeList(val).then( res => {
              this.consumeList = res.result.items;
            })
        },
        deep: true
      },
      recharge_query: {
        handler(val){
          rechargeList(this.recharge_query).then( res => {
            this.rechargeList = res.result.items;
          })
        },
        deep: true
      }

    },
    methods: {
      fmtDate(){
        let date =  new Date();
        let y = 1900+date.getYear();
        let m = "0"+(date.getMonth()+1);
        let d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },
      eventTouch(event) {
        if (event.position.y === 0) return;
        let scrollTop = this.$refs.scrollContent.scrollTop;
        let clientHeight = this.$refs.title.clientHeight;
        if (event.position.y > 0) { // 往下滑动
          this.$refs.title.classList.remove("slide");
        } else if (event.position.y < 0 && scrollTop >= clientHeight) { // 往上滑动
          this.$refs.title.classList.add("slide");
        }
      },
      init() {
        homeInit({}).then( res => {
          this.report_data = res.result.report_data;
          this.advert_Total = res.result.advert_Total;
          this.account_info = res.result.account_info;
        })
      },
      revise() {
        this.budget_show = true;
        this.money = this.account_info.max_day_money;
      },
      cancel() {
        this.budget_show = false;
      },
      ensure() {
        let obj = {
          userId: this.account_info.user_id,
          money: Number(this.money)
        }
        updateMaxDayMoney(obj).then( res => {
            if (res.success === 200){
              this.init();
              this.budget_show = false;
            }
        })
      }
    },
  };
</script>
<style lang="less" scoped>

  .title {
    transition: all 1s;
    background-color: white;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    height: 0.95rem;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    transition: top 0.2s ease-in-out;
    li {
      height: 100%;
      line-height: 0.95rem;
      text-align: center;
      flex: 1;
      color: #999999;
      font-size: 0.38rem;
      font-weight: 400;
      position: relative;
      &.active {
        color: #0e86e3;
        &::after{
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 0.06rem;
          background-color: #0e86e3;
        }
      }
    }
    &.slide {
      top: -0.95rem;
    }
  }

  .one {
    .user-header {
      box-shadow: 0 1px 0 rgba(204, 204, 204, 0.35);
      height: 1.8rem;
      background: url("../../assets/img/index-header.png") no-repeat center;
      background-size: auto 100%;
      display: flex;
      align-items: center;
      .user-head {
        width: 1rem;
        height: 1rem;
        margin: 0 0.35rem;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .user-info {
        p:nth-child(1) {
          color: #ffffff;
          font-size: 0.32rem;
          font-weight: 400;
          line-height: 0.32rem;
          padding: 0.1rem 0;
        }
        p:nth-child(2) {
          color: #ffffff;
          font-size: 0.28rem;
          font-weight: 400;
          line-height: 0.32rem;
          padding: 0.1rem 0;
        }
      }
      .user-right-go {
        background: url("../../assets/img/right-go.png");
        background-size: 100%;
        display: block;
        width: 0.2rem;
        height: 0.33rem;
        margin-left: auto;
        margin-right: 0.2rem;
      }
    }

    .data-card {
      background: #ffffff;
      padding: 0 0.3rem;
      &:last-child {
        .card-border {
          border-bottom: none;
        }
      }
      .card-border {
        padding: 0.3rem 0;
        border-bottom: 1px solid #efefef;
        display: flex;
        justify-content: space-around;
      }
      .item {
        width: 46%;
        &:nth-child(1) {
          border-right: 1px solid #ccc;
        }
        p:nth-child(1) {
          color: #333333;
          font-size: 0.52rem;
        }
        p:nth-child(2) {
          color: #999999;
          font-size: 0.28rem;
          font-weight: 400;
        }
      }
    }

    .account-info {
      padding: 0.3rem 0.3rem;
      margin-top: 0.25rem;
      .flex {
        align-items: center;
        &:first-child {
          margin-bottom: 0.15rem;
        }
      }
      .info-icon {
        width: 0.6rem;
        height: 0.6rem;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .info-text {
        color: #333333;
        font-size: 0.32rem;
        font-weight: 400;
        padding-left: 0.28rem;
      }
      .info-number {
        color: #333333;
        font-size: 0.52rem;
        font-weight: 400;
        padding: 0.15rem 0;
      }
      .budget-edit {
        margin-left: auto;
      }
      .status-item {
        flex: 1;
        padding-top: 0.15rem;
        p {
          text-align: center;
          &:nth-child(1) {
            color: #333333;
            font-size: 0.52rem;
            font-weight: 400;
          }
          &:nth-child(2) {
            color: #999999;
            font-size: 0.28rem;
            font-weight: 400;
          }
        }
      }
    }
  }
  .budget_show {
    text-align: center;
    h2 {
      color: #333333;
      font-size: 0.36rem;
      font-weight: 400;
      margin: 0.34rem auto;
    }
    .tips {
      p {
        margin-bottom: 0.23rem;
        color: #999999;
        font-size: 0.32rem;
        font-weight: 400;
      }
    }

    .form {
      .connect {
        margin: 0.44rem auto 0.8rem auto;
        width: 6.7rem;
        height: 0.82rem;
        position: relative;
        .input {
          width: 100%;
          height: 100%;
          border-radius: 0.055rem;
          border: 0.02rem solid #cccccc;
          input {
            width: 100%;
            height: 100%;
            border: none;
            color: #999999;
            font-size: 0.32rem;
            font-weight: 400;
            text-indent: 0.32rem;
          }
        }
        > span {
          position: absolute;
          left: 0.3rem;
          top: 110%;
          font-size: 0.28rem;
          font-weight: 400;
          color: red;
        }
      }
      .btn {
        display: flex;
        justify-content: space-around;
        color: #666666;
        font-size: 0.36rem;
        font-weight: 400;
        margin-bottom: 0.3rem;
        padding: 0;
        button {
          width: 3.2rem;
          height: 0.8rem;
          font-size: 0.36rem;
          border-radius: 0.055rem;
          &:nth-child(1) {
            color: #666666;
            background-color: #efefef;
          }
          &:nth-child(2) {
            color: #ffffff;
            background-color: #3090e6;
          }
        }
      }
    }
  }

  /* 消费记录  */

  .two {
    .first_part {
      background-color: white;
      padding: 0 0.2rem;
      li {
        height: 2.20rem;
        padding:0.44rem 0 0.54rem 0.34rem;
        border-bottom: 1px solid  #efefef;
        p{
          &:nth-child(1){
            display: flex;
            align-items: center;
            > img {
              min-width: 0.59rem;
              width: 0.59rem;
              height: 0.57rem;
              margin-right: 0.31rem;
            }
            color: #333333;
            font-size: 0.32rem;
            font-weight: 400;
          }
          &:nth-child(2){
            margin-top: 0.37rem;
            color: #333333;
            font-size: 0.52rem;
            font-weight: 400;
            font-family: "Arial MT";
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
    .second_part {
      background-color: white;
      margin-top: 0.19rem;
      .choose {
        height: 0.94rem;
        line-height: 0.94rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid  #efefef;
        span {
          color: #666666;
          font-size: 0.32rem;
          font-weight: 400;
          &.up{
            margin-left: -0.5rem;
            width:0;
            height:0;
            border-width:0 5px 5px;
            border-style:solid;
            border-color:transparent transparent red;/*透明 透明  灰*/
          }
          &.down {
            margin-left: -0.5rem;
            width:0;
            height:0;
            border-width:5px 5px 0;
            border-style:solid;
            border-color: red transparent transparent;/*灰 透明 透明 */
          }
        }
        input {
          height: 0.6rem;
          background-color: #f7f7f7;
          border: transparent;

        }
      }
      .data {
        height: 1.30rem;
        border-bottom: 1px solid  #efefef;
        padding: 0.34rem 0 0.27rem 0.27rem;
        p{
          font-weight: 400;
          &:nth-child(1){
            display: flex;justify-content: space-between;
            span {
              font-size: 0.30rem;
              &:nth-child(1){
                color: #333333;
              }
              &:nth-child(2){
                color: #ec7534;
                margin-right: 0.3rem;
              }
            }
          }
          &:nth-child(2){
            margin-top: 0.15rem;
            color: #999999;
            font-size: 0.2rem;
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
  .three {
    .second_part {
      .data {
        height: 2rem;
        p{
          font-weight: 400;
          &:nth-child(1), &:nth-child(2){
            display: flex;
            justify-content: space-between;
            span {
              font-size: 0.30rem;
              &:nth-child(1){
                color: #333333;
              }
              &:nth-child(2){
                color: #ec7534;
                margin-right: 0.3rem;
              }
            }
          }
          &:nth-child(2){
            margin-top: 0.15rem;
            span {
              color: #999999 !important;
              font-size: 0.2rem;
            }
          }
          &:nth-child(3){
            margin-top: 0.15rem;
            text-align: right;
            margin-right: 0.3rem;
            color: #999999 !important;
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }

</style>
