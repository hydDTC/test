<template>
  <div class="push">
    <div class="tab-content" v-touch-event="eventTouch">
      <div class="search-box flex" ref="searchBox">
        <div class="flex search">
          <i class="input-search-icon"></i>
          <input type="search" v-model="query.search_text" placeholder="请输入客户的名称、ID ……" @search="change()">
        </div>
        <div class="flex search-screen" @click="show = !show">
          <span>筛选</span>
          <svg :class="{'active': show}" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 23 12">
            <defs>
              <path d="M708.49997,183.99986l-11.50002,-12.00004h22.99999z" id="Path-0"/>
            </defs>
            <desc>Generated with Avocode.</desc>
            <g transform="matrix(1,0,0,1,-697,-172)">
              <g>
                <use xlink:href="#Path-0" fill="#666666" fill-opacity="1"/>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div class="content">
        <div class="scroll-content" margin-tabbar style="padding-top: 0.94rem;" ref="scrollContent" v-listener-event:scroll="scrollLoadMore">

          <div class="card-data flex" v-for="item in list" :key="item.creative_id" @click="go(item)">
            <div class="status-item">
              <div class="flex">
                <div class="status-img">
                  <img v-if="item.zc_audit_status == 'PENGING_AUDIT'" src="../../assets/img/user-wait-icon.png" alt="">

                  <img v-if="item.zc_audit_status == 'AUDITED'" src="../../assets/img/user-adopt-icon.png" alt="">

                  <img v-if="item.zc_audit_status == 'AUDIT_FAILED'" src="../../assets/img/user-fail-icon.png" alt="">

                  <img v-if="item.zc_audit_status == 'FREEZE'" src="../../assets/img/user-frozen-icon.png" alt="">
                </div>
                <div class="status-info">
                  <p>{{item.nick_name}}</p>
                  <p>账号：{{item.user_name}}</p>
                </div>
              </div>
              <p>[{{item.zc_audit_status_meaning}}] <span style="margin-left: 3.2rem;position: absolute;left: 0;">余额：{{item.balance}}</span></p>
            </div>
            <i class="status-go">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 33"><defs><path id="sxdya" d="M700.86 300.8l3.01-3 16.1 16.08-16.1 16.08-3-3 13.08-13.08z"/></defs><g><g opacity=".8" transform="translate(-701 -297)"><use fill="#ccc" xlink:href="#sxdya"/></g></g></svg>
            </i>
          </div>

          <p @click="dataList()" style="text-align: center;font-size: 0.32rem;padding: 0.15rem;color: #5b5b5b;">加载中。。。</p>

        </div>
      </div>
    </div>

    <action-sheet v-model="show">
      <div>
        <div class="operating">
          <h3 class="title-text">状态</h3>
          <div class="flex item">
            <span :class="{'selected': query.zc_audit_status===''}"   @click="query.zc_audit_status = '' ">全部</span>
            <span v-for="ad_states in zc_audit_status" @click="query.zc_audit_status = ad_states.lookup_code" :class="{'selected': query.zc_audit_status=== ad_states.lookup_code}">{{ad_states.meaning}}</span>
          </div>
        </div>
        <div class="flex operating-btn">
          <button @click="recover()">重置</button>
          <button @click="change();show = !show">确定</button>
        </div>
      </div>
    </action-sheet>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
import { userInit, userList, userLogin } from "../../services/service";
export default {
  data() {
    return {
      show: false,
      init: {},
      list: [],
      loadData: false,
      zc_audit_status: [],
      query: {
        page_index: 1,
        page_size: 25,
        search_text: "",
        sort_expression: "",
        zc_audit_status: ""
      }
    };
  },
  created() {
    userInit().then(res => {
      this.zc_audit_status = res.result.zc_audit_status;
    });
    this.dataList();
  },
  methods: {
    go(data) {
      const tem = window.open(); // 先打开页面
      userLogin({ user_id: data.user_id }).then(
        res => {
          if (res.success == 200) {
            tem.location.href =
              window.location.origin + "/home?token=" + res.result;
          }
        },
        () => {
          tem.close();
        }
      );
    },
    recover() {
      this.query.show_state = "";
      this.query.sort_expression = "";
      this.query.current_state = "";
    },
    change() {
      this.list.length = 0;
      this.query.page_index = 1;
      this.dataList();
    },
    dataList() {
      userList(this.query).then(res => {
        if (res.success == 200 && res.result.items.length) {
          this.list.push(...res.result.items);
          this.loadData = false;
        }
      });
    },
    scrollLoadMore(event) {
      let n =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
      if (n > 150 || this.loadData) return;
      this.loadData = true;
      ++this.query.page_index;
      this.dataList();
    },
    eventTouch(event) {
      let scrollTop = this.$refs.scrollContent.scrollTop;
      let clientHeight = this.$refs.searchBox.clientHeight;
      if (event.position.y === 0) return;
      if (event.position.y > 0) {
        this.$refs.searchBox.classList.remove("slide");
      } else if (event.position.y < 0 && scrollTop >= clientHeight) {
        this.$refs.searchBox.classList.add("slide");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.search-box {
  &.slide {
    top: -0.94rem;
  }
  left: 0;
  top: 0;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 0.94rem;
  box-shadow: 0 1px 0 rgba(204, 204, 204, 0.35);
  background-color: #ffffff;
  padding: 0 0.3rem;
  align-items: center;
  transition: top 0.2s ease-in-out;
  .input-search-icon {
    width: 0.28rem;
    height: 0.28rem;
    display: block;
    background: url("../../assets/img/input-search.png") no-repeat center;
    background-size: 100%;
  }
  .search {
    flex: 1;
    height: 0.58rem;
    border-radius: 0.1rem;
    background-color: #eeeeee;
    align-items: center;
    margin-right: 0.4rem;
    .input-search-icon {
      margin: 0 0.2rem;
    }
    input {
      flex: 1;
      height: 100%;
      border: none;
      background: transparent;
      font-size: 0.28rem;
      font-weight: 400;
    }
  }
  .search-screen {
    margin-left: auto;
    align-items: center;
    > span {
      color: #666666;
      font-size: 0.32rem;
      font-weight: 400;
      padding-right: 0.1rem;
    }
    > svg {
      width: 0.23rem;
      height: 0.12rem;
      transform: rotate(0deg);
      transition: all 200ms;
      &.active {
        transform: rotate(180deg);
      }
    }
  }
}

.card-data + .card-data {
  margin-top: 1px;
}

.card-data {
  padding: 0.3rem;
  background: #ffffff;
  align-items: center;
  .status-img {
    width: 0.8rem;
    min-width: 0.8rem;
    height: 0.8rem;
  }
  .status-info {
    padding-left: 0.3rem;
    p:nth-child(1) {
      color: #333333;
      font-size: 0.36rem;
      font-weight: 400;
    }
    p:nth-child(2) {
      color: #666666;
      font-size: 0.24rem;
      font-weight: 400;
      padding: 0.08rem 0;
    }
    span {
      color: #333333;
    }
  }
  .status-item {
    // min-width: 6rem;
    > p {
      color: #999999;
      font-size: 0.24rem;
      font-weight: 400;
      padding-left: 1.1rem;
    }
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
</style>
