<template>
  <div class="content-modal">
    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../../assets/img/left.png">
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
          <span>点击地址：<a :href="creative.click_link">{{creative.click_link}}</a></span>
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
            <span>投放日期： </span>
            <span class="status">{{creative.begin_date}}至{{creative.end_date}}</span>
          </div>
          <div class="flex" style="justify-content: center;align-items: center;">
            <span>创意出价：</span>
            <span class="status">{{creative.ad_price}}</span>
            <button class="btn btn-primary" @click="show = !show;ad_price = creative.ad_price">修改</button>
          </div>
          <div>
            <span>创意状态： </span>
            <span class="status">{{creative.current_state_meaning}}</span>
          </div>
        </div>

        <div class="detail detail-bottom">
          <div class="flex">
            <span>推广活动：</span>
            <span class="status">{{creative.campaign_name}}</span>
          </div>
          <div class="flex">
            <span>投放时间：</span>
            <span class="status">{{creative.today_show_hours_meaning}}</span>
          </div>
          <div class="flex">
            <span>投放媒体：</span>
            <span class="status">{{creative.media_name}}</span>
          </div>
          <div class="flex">
            <span>投放规格：</span>
            <span class="status">{{creative.ad_width}}X{{creative.ad_height}}</span>
          </div>
        </div>


        <!--<span><router-link to="/creative">返回</router-link></span>-->
        <!--<span>创意详情</span>-->
      </div>
    </div>

    <modal v-model="show">
      <div class="update-price-box">
        <h1>修改出价</h1>
        <p>当前账户每日预算 <span>0.10</span> 元</p>
        <p>出价范围在0.10~100元</p>
        <div class="input-ctrl" :class="{'error':ad_price_error}">
          <input type="number" v-model="ad_price" @input="ad_price_error = false;" autofocus name="ad_price">
        </div>
        <div class="flex modal-btn">
          <button @click="show =! show">取消</button>
          <button @click="updatePrice()">确定</button>
        </div>
      </div>
    </modal>

  </div>
</template>

<script>
import {creativeEdit, creativeUpdatePrice} from '../../services/service'
export default {
  data() {
    return {
      show: false,
      query: undefined,
      ad_price: '',
      ad_price_error: false,
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
    updatePrice(){
      let reg = /(^[0-9]\d*\.?\d{0,2}$)/
      if(!reg.test(this.ad_price)){
        this.ad_price_error = true;
        return;
      }
      let body = {
        creative_id:this.creative.creative_id,
        ad_price: this.ad_price
      }
      this.show =! this.show
      creativeUpdatePrice(body).then(res => {
        if(res.success == 200){
          this.creative.ad_price = this.ad_price
        }
      })
    },
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
.update-price-box{
  padding: 0.25rem;
  > h1{
    color: #333333;
    font-size: 0.36rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  >p{
    color: #999999;
    font-size: 0.32rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 0.15rem;
  }
  >span{
    color: #3090e6;
  }
  .input-ctrl{
    height: 0.82rem;
    border-radius: 0.05rem;
    border: 0.02rem solid #cccccc;
    margin: 0.4rem 0 0.8rem 0;
    &.error{
      border-color: red;
    }
    input[type=number]{
      border: none;
      width: 100%;
      height: 100%;
      text-indent: 0.3rem;
      font-size: 0.32rem;
    }
  }
  .modal-btn{
    button{
      height: 0.80rem;
      border-radius: 0.05rem;
      font-size: 0.36rem;
      font-weight: 400;
      flex: 1;
    }
    button:nth-child(1){
      margin-right: 0.15rem;
      color: #666666;
      background-color: #efefef;
    }
    button:nth-child(2){
      margin-left: 0.15rem;
      color: #ffffff;
      background-color: #3090e6;
    }
  }
}
.material-box{
  border-bottom: 1px solid #efefef;
  background: #fff;
  overflow: hidden;
  > p{
    padding: 0.1rem 0.3rem;
    font-size: 0.28rem;
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
  border-bottom: 1px solid #efefef;
  > span{
    padding-bottom: 0.05rem;
  }
  > span:nth-child(1) {
    color: #333333;
    font-size: 0.36rem;
    display: block;
  }
  > span:nth-child(2) {
    display: block;
    color: #333333;
    font-size: 0.28rem;
    font-weight: 400;
  }
  > span:nth-child(3){
    display: block;
    color: #333333;
    font-size: 0.28rem;
    font-weight: 400;
    >a{

      color: #398ded;
    }
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
    line-height: 1rem;
    &:last-child {
      border-bottom: none;
    }
    > span{
      font-size: 0.28rem;
      font-weight: 400;
    }
    > span:nth-child(1){
      color: #999999;
      min-width: 1.4rem;
      white-space: nowrap;
    }
    > span:nth-child(2) {
      color: #333333;
    }
    button {
      margin-left: auto;
    }
  }
}
</style>
