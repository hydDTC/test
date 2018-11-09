<template>
  <div class="push">
    <div class="tab-content" v-touch-event="eventTouch">

      <ul class="title" ref="title">
        <li @click="flag = 'one' " :class="{'active': flag === 'one'}">今天</li>
        <li @click="flag = 'two' " :class="{'active': flag === 'two'}">昨天</li>
        <li @click="flag = 'three' " :class="{'active': flag === 'three'}">近7天</li>
        <li @click="flag = 'four' " :class="{'active': flag === 'four'}">近30天</li>
      </ul>

      <div class="content">
        <div class="scroll-content" style="padding-top: 0.94rem;" ref="scrollContent">
              <div>
                <div class="data-card">
                  <div class="card-border flex">
                    <div class="item">
                      <p>{{total.PV}}</p>
                      <p>曝光量（次）</p>
                    </div>
                    <div class="item">
                      <p>{{total.CPC}}</p>
                      <p>点击量（次）</p>
                    </div>
                  </div>
                </div>

                <div class="data-card">
                  <div class="card-border flex">
                    <div class="item">
                      <p>{{total.CTR}}</p>
                      <p>点击率（%）</p>
                    </div>
                    <div class="item">
                      <p>{{total.CPC}}</p>
                      <p>点击均价（元）</p>
                    </div>
                  </div>
                </div>

                <div class="data-card">
                  <div class="card-border flex">
                    <div class="item">
                      <p>{{total.CPM}}</p>
                      <p>展示均价（元）</p>
                    </div>
                    <div class="item">
                      <p>{{total.ADMoney}}</p>
                      <p>今日消耗（元）</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="canvas-title">
                <span :class="{'active': type === 'PV'}" @click="type = 'PV'" >曝光量</span>
                <span :class="{'active': type === 'Click'}" @click="type = 'Click'">点击量</span>
                <span :class="{'active': type === 'ADMoney'}" @click="type = 'ADMoney'">消费</span>
              </div>

              <div class="canvas" ref="canvasInfo"></div>

              <table v-if="tableList && tableList.length">
                <thead>
                <tr>
                  <th>曝光量</th>
                  <th>点击量</th>
                  <th>消费</th>
                </tr>
                <tr v-for="data in tableList">
                  <td>{{data.PV}}</td>
                  <td>{{data.Click}}</td>
                  <td>{{data.ADMoney}}</td>
                </tr>
                </thead>
              </table>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { initData } from "../../services/service";

export default {
  data() {
    return {
      type: "PV",
      flag: "one",
      begin_date: "",
      end_date: "",
      total: [],
      tableList: [],
      chats: {},
      myChartRef: "",
      query: {
        begin_date: new Date().formatDate("yyyy-MM-dd"),
        end_date: new Date().formatDate("yyyy-MM-dd")
      }
    };
  },
  created() {
    this.init();
  },
  mounted() {
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

    // 初次加载echarts
    this.myChartRef = this.$echarts.init(this.$refs.canvasInfo);
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
          data: [],
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
          data: []
        }
      ]
    };
    this.myChartRef.setOption(option);
  },
  watch: {
    flag(val) {
      switch (val) {
        case "one":
          this.query.begin_date = new Date().formatDate("yyyy-MM-dd");
          this.query.end_date = new Date().formatDate("yyyy-MM-dd");
          this.init();
          break;
        case "two":
          this.query.begin_date = new Date()
            .calendar(1, -1)
            .formatDate("yyyy-MM-dd");
          this.query.end_date = new Date()
            .calendar(1, -1)
            .formatDate("yyyy-MM-dd");
          this.init();
          break;
        case "three":
          this.query.begin_date = new Date()
            .calendar(1, -6)
            .formatDate("yyyy-MM-dd");
          this.query.end_date = new Date().formatDate("yyyy-MM-dd");
          this.init();
          break;
        case "four":
          this.query.begin_date = new Date()
            .calendar(1, -29)
            .formatDate("yyyy-MM-dd");
          this.query.end_date = new Date().formatDate("yyyy-MM-dd");
          this.init();
          break;
      }
      console.info(this.query);
    },
    type(val) {
      this.myChartRef.setOption({
        xAxis: [
          {
            data: this.chats.xAxisData
          }
        ],
        series: [
          {
            data: this.chats.yAxisData[val]
          }
        ]
      });
    }
  },
  methods: {
    eventTouch(event) {
      let scrollTop = this.$refs.scrollContent.scrollTop;
      let clientHeight = this.$refs.title.clientHeight;
      if (event.position.y === 0) return;
      if (event.position.y > 0) {
        // 往下滑动
        this.$refs.title.classList.remove("slide");
      } else if (event.position.y < 0 && scrollTop >= clientHeight) {
        // 往上滑动
        this.$refs.title.classList.add("slide");
      }
    },
    init() {
      initData(this.query).then(res => {
        if (res.success != 200) return;
        this.total = res.result.total;
        this.tableList = res.result.tableList;
        this.chats = res.result.chats;
        // 加载echarts
        this.myChartRef.setOption({
          xAxis: [
            {
              data: this.chats.xAxisData
            }
          ],
          series: [
            {
              data: this.chats.yAxisData[this.type]
            }
          ]
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  transition: top 0.2s ease-in-out;
  li {
    height: 0.94rem;
    line-height: 0.94rem;
    flex: 1;
    text-align: center;
    color: #999999;
    font-size: 0.38rem;
    font-weight: 400;
    position: relative;
    &.active {
      color: #0e86e3;
      &::after {
        content: "";
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
    top: -1.28rem;
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
    color: #999999;
    font-size: 0.38rem;
    font-weight: 400;
    position: relative;
    &.active {
      color: #0e86e3;
      &::after {
        content: "";
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

.canvas {
  background-color: white;
  width:100wh;
  height:5.4rem;
  margin-bottom: 1rem;
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
