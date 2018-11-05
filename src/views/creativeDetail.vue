<template>
    <div class="content-modal">
        <y-header title="创意详情"></y-header>
        <div class="content">
            <div class="scroll-content"  margin-header>

              <div class="img">

              </div>
              <div class="img-text">
                <span>1280x720-信息流广告 平实产品功能11-16号   临时修改副本2</span>
                <span>ID:800267</span>
              </div>


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


              <div class="detail">
                <div>
                  <span>投放日期：<span class="status">2016-11-12至2016-11-22</span> </span>
                </div>
                <div>
                  <span>创意出价：<span class="status">&0.1 </span></span>
                  <button>修改</button>
                </div>
                <div>
                  <span>创意状态：<span class="status">投放中</span> </span>
                </div>
              </div>

              <div class="detail detail-bottom">
                <div>
                  <span>推广活动：<span class="status">2016-11-12至2016-11-22</span> </span>
                </div>
                <div>
                  <span>投放时间：<span class="status">2016-11-12至2016-11-22</span> </span>
                </div>
                <div>
                  <span>投放平台：<span class="status">&0.1 </span></span>
                </div>
                <div>
                  <span>投放规格：<span class="status">投放中</span> </span>
                </div>
              </div>




                <!--<span><router-link to="/creative">返回</router-link></span>-->
                <!--<span>创意详情</span>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="less">

  .img {
    height: 3.60rem;
    border: 1px solid red;
  }
  .img-text {
    background-color: white;
    height: 2.01rem;
    padding: 0.3rem;
    font-weight: 400;
    font-family: "Microsoft Ya Hei";
    border-bottom: 1px solid #efefef;
    > span:nth-child(1){
      color: #333333;
      font-size: 0.36rem;
   }
    >span:nth-child(2){
      display:block;
      color: #999999;
      font-size: 0.28rem;
      font-weight: 400;
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
      &:nth-child(1){
        border-right : 1px solid #ccc;
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

  .detail {
    background-color: white;
    margin: 0.25rem 0;
    padding: 0 0.3rem;
    &.detail-bottom{
      margin-bottom: 0.63rem;
    }
    > div {
      border-bottom: 1px solid #efefef;
      height: 1rem;
      line-height: 1rem;
      span {
        font-family: "Microsoft Ya Hei";
        font-size: 0.28rem;
        font-weight: 400;
        color: #999999;
        .status {
          color: #333333;
        }
      }
      button {
        color: white;
        margin-left: 3.27rem;
        width: 1.24rem;
        height: 0.60rem;
        border-radius: 0.05rem;
        background-color: #3090e6;
      }
    }
  }
</style>
