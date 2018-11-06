<template>
  <div class="content-modal">
    <y-header title="活动详情"></y-header>
    <div class="content">

      <div class="scroll-content" margin-tabbar margin-header>

        <div class="title">
          <span>[平实型]产品功能</span>
        </div>

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

        <div class="consume">
          <div class="left"><span>每日消耗：</span> <span>￥9,000</span></div>
          <button class="btn btn-primary">修改</button>
        </div>


        <div class="campaign">
          <div class="campaign-title"><span>此活动包含8个创意：</span></div>
          <ul>
            <li>
              <div>800267-1280x720-信息流广告 <span>[启用中]</span></div>
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

            <li>
              <div>800267-1280x720-信息流广告 <span>[启用中]</span></div>
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

            <li>
              <div>800267-1280x720-信息流广告 800267-1280x720-信息流广告<span>[启用中]</span></div>
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

            <li>
              <div>
                800267-1280x720-信息流广告 <span>[启用中]</span></div>
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

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        campaignName: "",
        valueStatus: false
      };
    }
  };
</script>

<style scoped lang="less">
  .title {
    line-height: 0.97rem;
    height: 0.97rem;
    color: #333333;
    font-family: "Microsoft Ya Hei";
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
        font-family: "Microsoft Ya Hei";
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
      font-family: "Microsoft Ya Hei";
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
      font-family: "Microsoft Ya Hei";
      font-size: 0.32rem;
      font-weight: 400;
      /* Text style for "状态：" */
      .status {
        color: #999999;
      }
    }
  }
</style>
