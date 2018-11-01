<template>
  <div class="push">

    <div class="tab-content">
      <!-- <y-header title="首页"></y-header> margin-header -->

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

      <div class="content">
        <div class="scroll-content" margin-tabbar style="margin-top: 1.8rem;">

          <div>
            <div class="data-card">
              <div class="card-border flex">
                <div class="item">
                  <p>1,000</p>
                  <p>曝光量（次）</p>
                </div>
                <div class="item">
                  <p>100</p>
                  <p>点击量（次）</p>
                </div>
              </div>
            </div>

            <div class="data-card">
              <div class="card-border flex">
                <div class="item">
                  <p>10.00</p>
                  <p>点击率（%）</p>
                </div>
                <div class="item">
                  <p>0.5</p>
                  <p>点击均价（元）</p>
                </div>
              </div>
            </div>

            <div class="data-card">
              <div class="card-border flex">
                <div class="item">
                  <p>1.00</p>
                  <p>展示均价（元）</p>
                </div>
                <div class="item">
                  <p>50.00</p>
                  <p>今日消耗（元）</p>
                </div>
              </div>
            </div>
          </div>

          <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../assets/img/index-balance.png" alt="">
                </div>
                <p class="info-text">账户余额 （元）</p>
              </div>
              <p class="info-number">￥9,500</p>
          </div>

          <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../assets/img/index-budget.png" alt="">
                </div>
                <p class="info-text">每日预算 （元）</p>
              </div>
              <div class="flex">
                <p class="info-number">￥3,500</p>
                <button class="budget-edit btn btn-primary">修改</button>
              </div>
          </div>

          <div class="data-card account-info">
              <div class="flex">
                <div class="info-icon">
                  <img src="../assets/img/index-statistics.png" alt="">
                </div>
                <p class="info-text">广告统计</p>
              </div>
              <div class="flex">
                <div class="status-item">
                  <p>0</p>
                  <p>待审核</p>
                </div>
                <div class="status-item">
                  <p>3</p>
                  <p>未通过</p>
                </div>
                <div class="status-item">
                  <p>0</p>
                  <p>有效广告</p>
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

  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hyd",
      budget_show: false,
      money: 100
    };
  },
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
    open() {
      this.budget_show = true;
    },
    change_budget(e) {
      console.log("接收到了");
      console.log(e);
      this.budget_show = false;
      this.money = e;
    }
  },
  beforeRouteLeave(to, from, next) {
    // console.log(to)
    // console.log(from)
    next();
  }
};
</script>
<style lang="less" scoped>
.user-header {
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
  width: 100%;
  box-shadow: 0 1px 0 rgba(204, 204, 204, 0.35);
  height: 1.8rem;
  background: url("../assets/img/index-header.png") no-repeat center;
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
    background: url("../assets/img/right-go.png");
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
  }
  .item {
    width: 50%;
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



</style>
