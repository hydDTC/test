<template>
  <div class="push">

    <div class="tab-content">

      <div class="content">
        <div class="scroll-content" margin-tabbar  ref="scrollContent">

          <div class="one">
            <router-link :to="{name:'uuser'}">
              <div class="user-header">
                <div class="user-head">
                  <img src="img/index-default-head.png">
                </div>
                <div class="user-info">
                  <p>{{user.nick_name}}</p>
                  <p>用户名：{{user.user_name}}</p>
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

            <!-- <div class="data-card account-info">
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
            </div> -->

            <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../../assets/img/index-statistics.png" alt="">
                </div>
                <p class="info-text">客户统计</p>
              </div>
              <div class="flex">
                <div class="status-item">
                  <p>{{advert_Total.penging_audit}}</p>
                  <p>待审核</p>
                </div>
                <div class="status-item">
                  <p>{{advert_Total.audited}}</p>
                  <p>审核通过</p>
                </div>
                <div class="status-item">
                  <p>{{advert_Total.audit_failed}}</p>
                  <p>审核失败</p>
                </div>
                <div class="status-item">
                  <p>{{advert_Total.freeze}}</p>
                  <p>冻结</p>
                </div>
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
              <input v-model="money" placeholder="邮箱" type="text">
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
  import {usInit, current} from "../../services/service";
  import {updateMaxDayMoney} from "../../services/service";

  export default {
    data() {
      return {
        type: 'one',
        user: {},
        report_data: {},
        advert_Total:{},
        account_info:{},
        budget_show: false,
        money: '',
        end_date: '',
        begin_date:''
      };
    },
    beforeCreate() {
    },
    created() {
     this.init();
      current().then(res => {
       if(res.success == 200){
         this.user = res.result.user || {};
       }
     })
    },
    mounted() {
    },
    methods: {
      init() {
        usInit({}).then( res => {
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


</style>
