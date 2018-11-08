<template>
  <div class="content-modal">
    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../assets/img/left.png">
        <span>返回</span>
      </template>
      <span>活动详情</span>
    </y-header>
    <div class="content">

      <div class="scroll-content" margin-tabbar margin-header>

        <div class="title">
          <span>{{init.campaign_name}}</span>
        </div>

        <div class="data-card">
          <div class="card-border flex">
            <div class="item">
              <p>{{init.PV}}</p>
              <p>曝光量（次）</p>
            </div>
            <div class="item">
              <p>{{init.Click}}</p>
              <p>点击量（次）</p>
            </div>
          </div>
        </div>

        <div class="data-card">
          <div class="card-border flex">
            <div class="item">
              <p>{{init.CTR}}</p>
              <p>点击率（%）</p>
            </div>
            <div class="item">
              <p>{{init.CPC}}</p>
              <p>点击均价（元）</p>
            </div>
          </div>
        </div>

        <div class="data-card">
          <div class="card-border flex">
            <div class="item">
              <p>{{init.CPM}}</p>
              <p>展示均价（元）</p>
            </div>
            <div class="item">
              <p>{{init.ADMoney}}</p>
              <p>今日消耗（元）</p>
            </div>
          </div>
        </div>

        <div class="consume">
          <div class="left"><span>每日消耗：</span> <span>{{init.day_budget}}</span></div>
          <button class="btn btn-primary" @click="revise()">修改</button>
        </div>


        <div class="campaign">
          <div class="campaign-title"><span>此活动包含{{creatives.length}}个创意：</span></div>
          <ul>
            <li v-for="creative in  creatives">
              <div>{{creative.creative_name}} <span>[{{creative.zc_audit_status_name}}]</span></div>
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
            </li>

          </ul>
        </div>


        <!--<span><router-link to="/campaign">返回</router-link></span>-->
        <!--<span>活动详情</span>-->
      </div>

      <div class="footer">
        <span>状态：<span class="status">投放中</span></span>
        <switch-input v-model="valueStatus"></switch-input>
      </div>

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
                <input v-model="day_budget" placeholder="预算" type="text">
              </div>
              <span v-if="day_budget < 100">请输入大于100的合法数字</span>
            </div>
            <div class="btn">
              <button type="button" @click="cancel()">取消</button>
              <button type="button" @click="ensure()">确定</button>
            </div>
          </form>
        </div>
      </modal>

    </div>
  </div>
</template>

<script>
  import {campaignDetail} from "../services/service";
  import {campaignUpdateBudget} from "../services/service";

  export default {

    data() {
      return {
        init: {},
        valueStatus: false,
        day_budget: '',
        budget_show: false,
        creatives: []
      };
    },
    created() {
     this.initList();
    },
    methods: {
      initList(){
        campaignDetail(this.$route.query).then( res => {
          this.init = JSON.parse(JSON.stringify(res.result.campaign)); // 这边budget需要修改
          this.creatives = res.result.creatives
        })
      },
      // 修改预算
      revise() {
        this.budget_show = true;
        this.day_budget =  this.init.day_budget;
      },
      ensure() {
        let obj = {
          campaign_id: this.$route.query.campaign_id,
          day_budget: Number(this.day_budget)
        }
        campaignUpdateBudget(obj).then( res => {
            if (res.success === 200) {
              this.budget_show = false;
              this.initList();
            }
        })
      },
      cancel() {
        this.budget_show = false;
      },
      btnLeft() {
        this.$router.replace({name:'campaign'})
      },
      btnRight() {
        this.$router.replace({name:'campaign'})
      },
      btnTitle() {
        this.$router.replace({name:'campaign'})
      },
    }
  };
</script>

<style scoped lang="less">
  .title {
    line-height: 0.97rem;
    height: 0.97rem;
    color: #333333;
    font-size: 0.32rem;
    font-weight: 400;
    background-color: white;
    border-bottom: 1px solid #efefef;
    span {
      margin-left: 0.32rem;
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

  .consume {
    background-color: white;
    height: 1.21rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      margin-left: -0.6rem;
      span:nth-child(1) {
        color: #999999;
        font-size: 0.28rem;
      }
      span:nth-child(2) {
        color: #333333;
        font-size: 0.32rem;
        font-weight: 400;
      }
    }
  }

  .campaign {
    margin-top: 0.21rem;
    background-color: white;
    .campaign-title {
      height: 0.94rem;
      line-height: 0.94rem;
      color: #333333;
      font-size: 0.32rem;
      font-weight: 400;
      border-bottom: 1px solid #efefef;
      span {
        margin-left: 0.31rem;
      }
    }
    ul {
      li {
        margin: 0 auto;
        width: 94%;
        padding: 0.3rem;
        height: 1.83rem;
        color: #999999;
        font-family: "Arial MT";
        font-size: 0.32rem;
        font-weight: 400;
        border-bottom: 1px solid #efefef;
        display: flex;
        align-items: center;
        &:last-child {
          border-bottom: none;
        }
        span {
          color: #999999;
          font-size: 0.24rem;
          font-weight: 400;
          margin-left: 0.25rem;
        }
        .status-go {
          width: 0.2rem;
          min-width: 0.2rem;
          height: 0.33rem;
          display: block;
          margin-left: auto;
          font-size: 0.2rem;
        }
      }
    }
  }

  .footer {
    padding: 0 0.35rem;
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #333333;
      font-size: 0.32rem;
      font-weight: 400;
      /* Text style for "状态：" */
      .status {
        color: #999999;
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
