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

        <div class="canvas-title">
          <span>曝光量</span>
          <span>点击量</span>
          <span>消费</span>
        </div>
        <canvas ref="canvasInfo" class="canvas" style="width:7.5rem; height:5.4rem;"></canvas>

        <table>
          <thead>
            <tr>
              <th>事件</th>
              <th>曝光量</th>
              <th>点击量</th>
              <th>消费</th>
            </tr>
            <tr v-for="data in canvaData">
              <td>{{data.time}}</td>
              <td>{{data.baoguang}}</td>
              <td>{{data.dianji}}</td>
              <td>{{data.consume}}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canvaData: [
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        },
        {
          time: 19,
          baoguang: "1000",
          dianji: "2000",
          consume: 2000
        }
      ]
    };
  },
  created() {},
  mounted() {
    console.log(this.$refs.canvasInfo);
    let myChart = this.$echarts.init(this.$refs.canvasInfo);
    // let option = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //     splitLine: {
    //       show: true
    //     },
    //     boundaryGap: true,
    //     axisTick: {
    //       show : true
    //     }
    //   },
    //   yAxis: {
    //     type: 'value',
    //     splitLine: {
    //       show: true
    //     }
    //   },
    //   series: [{
    //     data: [820, 932, 901, 934, 1290, 1330, 1320],
    //     type: 'line',
    //     itemStyle: {
    //       normal: {
    //         color: "blue",
    //         lineStyle: {
    //           color: "blue"
    //         }
    //       }
    //     },
    //   }]
    // };

    let option = {
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "4%",
        right: "4%",
        bottom: "3%",
        top: "18%",
        containLabel: true,
        backgroundColor: "blue"
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7],
          axisLine: {
            lineStyle: {
              color: "#bfc4cd"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#f8f8f8"],
              width: 1,
              type: "solid"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#bfc4cd"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#f8f8f8"],
              width: 1,
              type: "solid"
            }
          }
        }
      ],
      series: [
        {
          name: "hahahha",
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: "#47a4df" //图标颜色
            }
          },
          lineStyle: {
            normal: {
              color: "#47a4df" //连线颜色
            }
          },
          data: [2, 3, 4, 5, 6, 7, 8]
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>
<style lang="less" scoped>
.title {
  border-bottom: 1px solid #d9d9d9;
  li {
    display: inline-block;
    width: 25%;
    height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    color: #999999;
    font-family: "Microsoft Ya Hei";
    font-size: 0.38rem;
    font-weight: 400;
  }
}

.canvas-title {
  margin-top: 0.27rem;
  background-color: white;
  width: 7.5rem;
  height: 0.93rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  span {
    display: inline-block;
    width: 30%;
    height: 100%;
    line-height: 0.93rem;
    color: #3090e6;
    font-family: "Microsoft Ya Hei";
    font-size: 0.38rem;
    font-weight: 400;
    &:nth-child(1) {
      border-bottom: 1px solid #0e86e3;
    }
  }
}
.canvas {
  background-color: white;
  border: 1px solid red;
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

table {
  margin-top: 0.27rem;
  background-color: white;
  width: 100%;
  tr {
    border-bottom: 1px solid #d9d9d9;
    th {
      color: #666666;
      font-family: "Microsoft Ya Hei";
      font-size: 0.38rem;
      font-weight: 400;
      padding: 0.3rem;
    }
    td {
      padding: 0.3rem;
      text-align: center;
      color: #999999;
      font-family: "Arial MT";
      font-size: 0.28rem;
      font-weight: 400;
    }
  }
}
</style>
