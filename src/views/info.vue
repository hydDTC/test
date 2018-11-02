<template>
  <div class="push">
    <div class="tab-content">
    <div class="content">
      <div class="scroll-content">


          <ul class="title">
            <li>今天</li>
            <li>昨天</li>
            <li >近7天</li>
            <li>近30天</li>
          </ul>

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

        <canvas ref="canvasInfo" class="canvas"></canvas>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {

      }
    },
    created(){

    },
    mounted() {
      console.log(this.$refs.canvasInfo)
      let myChart = this.$echarts.init(this.$refs.canvasInfo);
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          splitLine: {
            show: true
          },
          boundaryGap: true,
          axisTick: {
            show : true
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true
          }
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          itemStyle: {
            normal: {
              color: "blue",
              lineStyle: {
                color: "blue"
              }
            }
          },
        }]
      };
      myChart.setOption(option);

    }

  }
</script>
<style lang="less" scoped>
  .title {
    li {
      color: #999;
      display: inline-block;
      width: 25%;
      height: .47rem;
      line-height: .47rem;
      text-align: center;
      font-size: .18rem;
    }
  }
  .canvas{
    width: 7.5rem;
    height:6.32rem;
    border:1px solid red;
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

</style>
