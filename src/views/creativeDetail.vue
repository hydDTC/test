<template>
  <div class="content-modal">
    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../assets/img/left.png">
        <span>返回</span>
      </template>
      <span>创意详情</span>
    </y-header>
    <div class="content">
      <div class="scroll-content" margin-header>

        <!-- <div class="material-list-box"> -->
          <div class="material-box" v-for="ma in material">
            <template v-for="ele in ma.title_list">
              <p>{{ele[ele.name]}}</p>
            </template>

            <preview-img>
              <div class="img-box" v-for="ele in ma.file_list">

                <img v-if="ele.element_type === 'img'" :src="ele[ele.name]">
                <video v-if="ele.element_type === 'video'" :src="ele[ele.name]" autoplay loop></video>
                <!-- <span>{{ele.file_size}}</span> -->
                <!-- <div class="mask"></div> -->

              </div>
            </preview-img>

            <template v-for="ele in ma.text_list">
              <p>{{ele[ele.name]}}</p>
            </template>
          </div>
        <!-- </div> -->



        <div class="img-text">
          <span>{{creative.creative_name}}</span>
          <span>ID:{{creative.creative_id}}</span>
        </div>


        <div>
          <div class="data-card">
            <div class="card-border flex">
              <div class="item">
                <p>{{creative.PV}}</p>
                <p>曝光量（次）</p>
              </div>
              <div class="item">
                <p>{{creative.Click}}</p>
                <p>点击量（次）</p>
              </div>
            </div>
          </div>

          <div class="data-card">
            <div class="card-border flex">
              <div class="item">
                <p>{{creative.CTR}}</p>
                <p>点击率（%）</p>
              </div>
              <div class="item">
                <p>{{creative.CPC}}</p>
                <p>点击均价（元）</p>
              </div>
            </div>
          </div>

          <div class="data-card">
            <div class="card-border flex">
              <div class="item">
                <p>{{creative.CPM}}</p>
                <p>展示均价（元）</p>
              </div>
              <div class="item">
                <p>{{creative.ADMoney}}</p>
                <p>今日消耗（元）</p>
              </div>
            </div>
          </div>
        </div>


        <div class="detail">
          <div>
            <span>投放日期：<span class="status">{{creative.begin_date}}至{{creative.end_date}}</span> </span>
          </div>
          <div>
            <span>创意出价：<span class="status">{{creative.ad_price}}</span></span>
            <button>修改</button>
          </div>
          <div>
            <span>创意状态：<span class="status">{{creative.current_state_meaning}}</span> </span>
          </div>
        </div>

        <div class="detail detail-bottom">
          <div>
            <span>推广活动：<span class="status">{{creative.campaign_name}}</span> </span>
          </div>
          <div>
            <span>投放时间：<span class="status">{{creative.today_show_hours_meaning}}</span> </span>
          </div>
          <div>
            <span>投放媒体：<span class="status">{{creative.media_name}}</span></span>
          </div>
          <div>
            <span>投放规格：<span class="status">{{creative.ad_width}}X{{creative.ad_height}}</span> </span>
          </div>
        </div>


        <!--<span><router-link to="/creative">返回</router-link></span>-->
        <!--<span>创意详情</span>-->
      </div>
    </div>
  </div>
</template>

<script>
import {creativeEdit} from '../services/service'
export default {
  data() {
    return {
      query: undefined,
      creative: {},
      material: [],
    };
  },
  created() {
    this.query = this.$route.query;
    creativeEdit(this.query).then(res => {
      this.creative = res.result.creative
      let value = res.result.creative.elements.data_list
      let material = res.result.creative.material_elements.data_list
      this.assignDefaultData(material, value);
      material.forEach((item) => {
        let title = item.text_list.find(t => t.name === 'title')
        if(title) {
          item.title_list = [title]
          item.text_list.splice(item.text_list.indexOf(title), 1)
        }
      })
      this.material = material;
    })
  },
  mounted() {},
  methods: {
    assignDefaultData(target, source) {
      Object.keys(source).forEach(sk => {
        if (typeof target[sk] === 'object' && typeof source[sk] === 'object') {
          this.assignDefaultData(target[sk], source[sk]);
        }
        if (!target[sk]) {
          target[sk] = source[sk];
        }
      });
    },
    btnLeft() {
      this.$router.replace({name:'creative'})
    },
    btnRight() {
      this.$router.replace({name:'creative'})
    },
    btnTitle() {
      this.$router.replace({name:'creative'})
    },
  }
};
</script>

<style scoped lang="less">
.material-box{
  border-bottom: 1px solid #efefef;
  background: #fff;
  overflow: hidden;
  > p{
    padding: 0.1rem 0;
  }
  .img-box {
    height: 3.6rem;
    background: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      max-width: 100%;
      max-height: 100%;
    }
    > span {
      text-shadow: 0 1px 1px rgba(0, 3, 4, 0.5);
      color: #ffffff;
      font-size: 0.32rem;
      font-weight: 400;
      text-transform: uppercase;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 4;
      padding: 0.2rem 0.3rem;
    }
    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 3;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}

.img-text {
  background-color: white;
  // height: 2.01rem;
  padding: 0.3rem;
  font-weight: 400;
  font-family: "Microsoft Ya Hei";
  border-bottom: 1px solid #efefef;
  > span:nth-child(1) {
    color: #333333;
    font-size: 0.36rem;
  }
  > span:nth-child(2) {
    display: block;
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

.detail {
  background-color: white;
  margin: 0.25rem 0;
  padding: 0 0.3rem;
  &.detail-bottom {
    margin-bottom: 0.63rem;
  }
  > div {
    border-bottom: 1px solid #efefef;
    height: 1rem;
    line-height: 1rem;
    &:last-child {
      border-bottom: none;
    }
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
      height: 0.6rem;
      border-radius: 0.05rem;
      background-color: #3090e6;
    }
  }
}
</style>
