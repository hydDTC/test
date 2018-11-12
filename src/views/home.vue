<template>
  <div class="container-main">
    <div class="scroll-content" ref="containerFull">
      <div class="header" ref="header">
        <div class="left">
          <img src="../assets/home/quick-menu.png"/>
        </div>
        <div class="right">
          <img src="../assets/home/phone.png"/>
          <span>400-670-9927</span>
        </div>
      </div>


      <div class="containerFull">

        <div class="container-content" ref="containerCon">

          <!--首屏-->
          <div class="banner banner-top" ref="bannerTop" id="one">
            <!--<img src="../assets/home/first-screen_02.png">-->
            <div class="title"></div>
            <div class="banner-content banner-bg" ref="bannerMargin">
              <ul>
                <li v-for="arr in bannerTopArr">
                  <img :src="arr.img">
                  <p>{{arr.num}}</p>
                  <p>{{arr.text}}</p>
                </li>
              </ul>
            </div>
          </div>

          <!-- 决策引擎  -->
          <div class="banner banner-engine">
            <div class="title"></div>
            <div class="text">
              智橙V4运作核心 — 智橙决策引擎，由AI技术、大数据等打造而成。
              机器通过不断学习，基于大数据产出专属的智能决策，助力广告主进行营销、产品、用户体验等
              全方位智能营销策略，使其在广泛的场景应用中创造更大价值，轻松实现营销目标。
            </div>
            <div class="banner-content">
              <ul>
                <li v-for="engine in engineArr">
                  <div class="left">
                    <div class="img">
                      <img :src="engine.img">
                    </div>
                    <div>
                      <p>{{engine.text1}}</p>
                      <p>{{engine.text2}}</p>
                    </div>
                  </div>
                  <div class="right">
                    <div v-for="child in engine.arr">
                      <img class="icon" src="../assets/home/engine-4.png"><span>{{child.text}}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- 第三屏幕  -->
          <div class="banner banner-scheme">
            <div class="title"></div>
            <div class="text">
              三大核心能力为依托，为电商类、网服类、金融类、游戏类、工具类客户提供全面解决方案
            </div>
            <div class="banner-content">
              <div class="top">
                <div class="left">
                  <img src="../assets/home/scheme-1.png">
                </div>
                <div class="right">
                  <img src="../assets/home/scheme-2.png">
                </div>
              </div>
              <ul>
                <li><span class="icon">1</span> <span>当用户通过手机进行浏览行为时采集及整理其数据; </span></li>
                <li><span class="icon">2</span> <span>依托智橙三大核心能力精准定向、智能推荐、信息流流量;</span></li>
                <li><span class="icon">3</span> <span>当满足投放条件的用户再次产生手机浏览行为  触达投放 。 </span></li>
              </ul>
            </div>
          </div>

          <!-- 成功方案  -->
          <div class="banner banner-case">
            <div class="title"></div>
            <div class="text">
              <span v-for="case1 in success_title" @click="change_success(case1)" :class="{'active': isTrue=== case1.type}">{{case1.name}}</span>
            </div>
            <div class="banner-content">

              <div class="top">
                <div class="left">
                  <div class="top_title">
                    <div :style="{'background':'url('+success_obj.icon+') 0 0 no-repeat'}"></div>
                    <span style="vertical-align: middle; color: #fff; font-size: 0.26rem; margin-left: 0.2rem;">{{success_obj.name}}</span>
                  </div>
                  <!-- 这边的背景建议单独给一个div -->
                  <div class="top_bg">
                    <ul>
                      <li><span class="icon"></span> <span>{{success_obj.text.type}}</span></li>
                      <li><span class="icon"></span> <span>{{success_obj.text.platform}}</span></li>
                      <li v-if="success_obj.text.cpc"><span class="icon"></span> <span>{{success_obj.text.cpc}}</span></li>
                      <li v-if="success_obj.text.act"><span class="icon"></span> <span>{{success_obj.text.act}}</span>></li>
                      <li v-if="success_obj.text.cpr"><span class="icon"></span> <span>{{success_obj.text.cpr}} </span>></li>
                    </ul>

                  </div>
                </div>
                <div class="right">

                  <div class="parent">
                    <div ref="imgParentRef" style="transition: all 1s">
                      <img :src="y.bg" v-for=" y in success_arr">
                    </div>
                  </div>

                </div>
              </div>

              <div class="bottom">
                <div v-for="x in success_arr" :style="{'background':'url('+x.icon+') 0 -0.50rem no-repeat'}" :class="{'active': isTrueChild=== x.type}"></div>
              </div>

            </div>
          </div>

          <!-- 媒体资源  -->
          <div class="banner banner-media">
            <div class="title"></div>
            <div class="banner-content">
              <div v-for="media in mediaArr">
                <img :src="media.img"/>
              </div>
            </div>
          </div>

          <!-- 联系我们  -->
          <div class="banner banner-link">
            <div class="title"></div>
            <div class="text">
              请留下您的联系方式，我们的广告顾问将尽快与您取得联系，免费咨询……
            </div>
            <div class="banner-content">
              <div class="form">
                <form  id="consult" target="consult" @submit="goConsult" >

                  <iframe name='consult' style='display: none;'></iframe>
                  <div class="connect">
                    <img src="../assets/home/company-icon.png" class="img" />
                    <div class="input">
                      <input v-model="form.company_name" placeholder="企业名称(必填)" type="text" required>
                    </div>
                  </div>

                  <div class="connect">
                    <img src="../assets/home/name-icon.png" class="img" />
                    <div class="input">
                      <input v-model="form.customer_name" type="customer_name" placeholder="姓名(必填)" required >
                    </div>

                  </div>

                  <div class="connect">
                    <img src="../assets/home/phone-icon.png" class="img"/>
                    <div class="input">
                      <input v-model="form.phone" type="number" placeholder="以1开头的11位手机号码(必填)" required pattern="^1\d{10}$">
                    </div>
                  </div>

                  <div class="connect code">
                    <img class="icon img" src="../assets/css/login/yanzhengma.png"/>
                    <div class="input">
                      <input v-model="form.img_code" type="text" placeholder="验证码(必填)" required>
                    </div>
                    <a><img :src="vertCodeUrl" width="100%" height="100%"  title="看不清" @click="verifyCode()"></a>
                  </div>

                  <button type="submit">预约顾客咨询</button>
                </form>
              </div>

              <div class="center">
                <div class="left">
                  <img src="../assets/home/code.png">
                </div>
                <div class="right">
                  <p><img src="../assets/home/phone.png"> <span>400-670-9927</span></p>
                  <p>周一至周五 9:00-18:00 (节假日除外)</p>
                </div>
              </div>

              <button class="zhanghu">自动开通广告账户</button>
            </div>
          </div>

          <!-- footer -->
          <div class="footer" ref="footer">
            <p>Copyright (C) 2015~ 2019<a href="/">zcmobi.com</a>All Rights Reserved. </p>
            <p>沪ICP备09044414号</p>
            <!--Copyright (C) 2015~ {{year}}   <a href="/">{{domain}}</a>   All Rights Reserved. 沪ICP备09044414号-->
          </div>
        </div>

      </div>

      <div class="login" ref="login">
        <router-link to="/login">
          <button>登陆平台</button>
        </router-link>

        <router-link to="/register">
          <button>注册账号</button>
        </router-link>
      </div>

      <div class="slipping" ref="slipping">
        <!-- 这边要用相对路径-->
        <img src="../assets/home/slipping.png"/>
      </div>

      <!--<y-login v-if="login_show" @login_cancel="login_cancel"></y-login>-->
    </div>

    <transition name="custom-classes-transition" enter-active-class="animated nav-open" leave-active-class="animated nav-close">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {verify_code, customer} from "../services/service";
  export default {
    data() {
      return {
        /* 第一屏的背景图片的宽高 */
        topTwo: 0,
        path: true,
        topHeight: "",
        topWidth: "",
        /* 第一屏 */
        bannerTopArr: [
          {
            img: "img/yidongzhongduan.png",
            num: "9.5亿+",
            text: "移动终端"
          },
          {
            img: "img/rijunliuliang.png",
            num: "30亿+",
            text: "日均流量"
          },
          {
            img: "img/appziyuan.png",
            num: "20000+",
            text: "主流APP资源"
          },
          {
            img: "img/crowddingxiang.png",
            num: "精准",
            text: "人群定向"
          },
          {
            img: "img/toufangcelue.png",
            num: "智能推荐",
            text: "投放策略"
          }
        ],
        /* 第er 屏 */
        engineArr: [
          {
            img: "img/engine-1.png",
            text1: "智能",
            text2: "投放策略",
            arr: [
              {
                text: "模型、算法、分析"
              },
              {
                text: "归因、服务、策略"
              }
            ]
          },
          {
            img: "img/engine-2.png",
            text1: "智能",
            text2: "广告创意",
            arr: [
              {
                text: "内容洞察  素材洞察"
              },
              {
                text: "内容管理系统"
              },
              {
                text: "广告素材  动态落地页"
              }
            ]
          },
          {
            img: "img/engine-3.png",
            text1: "智能",
            text2: "决策分析",
            arr: [
              {
                text: "媒介策略  人群洞察  产品洞察"
              },
              {
                text: "DMP大数据平台"
              },
              {
                text: "第一方数据  第三方数据"
              }
            ]
          }
        ],
        /* 成功方案 */
        success_title: [
          {
            name: "工具类",
            type: "tool",
            type_child: "tool0",
            arr_1: 0,
            arr_2: 0
          },
          {
            name: "游戏类",
            type: "game",
            type_child: "game0",
            arr_1: 1,
            arr_2: 0
          },
          {
            name: "网服类",
            type: "network",
            type_child: "network0",
            arr_1: 2,
            arr_2: 0
          },
          {
            name: "电商类",
            type: "electric",
            type_child: "electric0",
            arr_1: 3,
            arr_2: 0
          },
          {
            name: "金融类",
            type: "money",
            type_child: "money0",
            arr_1: 4,
            arr_2: 0
          }
        ],
        success_program: [
          [
            {
              name: "UC浏览器",
              icon: "img/uc.png",
              bg:
                "http://img.zcdsp.com/common/1f809a7a9ac7e8f2a0c6ab1e9466a32b.jpg",
              type: "tool0",
              index: "0",
              text: {
                type: "案例类型：工具类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.56 元",
                act: "激活成本：5 元",
                cpr: "点击率：8.00%"
              }
            },
            {
              name: "快手",
              icon: "img/kuaishou.png",
              bg:
                "http://img.zcdsp.com/common/9ddefeff524898acd2a6992df9a0ee0c.jpg",
              type: "tool1",
              index: "1",
              text: {
                type: "案例类型：工具类",
                platform: "投放平台：智橙移动端",
                cpc: "CPA成本：<5元",
                act: "日均新增用户：500+"
              }
            }
          ],
          [
            {
              name: "魔域",
              icon: "img/moyu.png",
              bg:
                "http://img.zcdsp.com/common/fdea634cdac8fa30ce468cf34b590829.jpg",
              type: "game0",
              index: "0",
              text: {
                type: "案例类型：游戏类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.48元",
                act: "激活成本：39元",
                cpr: "点击率：1.76%"
              }
            }
          ],
          [
            {
              name: "饿了么",
              icon: "img/e.png",
              bg:
                "http://img.zcdsp.com/common/af7d5d135a5f7f70f7123214686066bb.jpg",
              type: "network0",
              index: "0",
              text: {
                target:
                  "营销目标：通过智橙平台精准广告推送，高效传递品牌信息，有效提升精准度和转化效果，为品牌带来更多有效用户。",
                type: "案例类型：网服类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.38元",
                act: "激活成本：6元",
                cpr: "点击率：3.4%"
              }
            },
            {
              name: "每日优鲜",
              icon: "img/xian.png",
              bg:
                "http://img.zcdsp.com/common/eb3de8e877a9119e92b7ec9d2b131e13.jpg",
              type: "network1",
              index: "1",
              text: {
                type: "案例类型：网服类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.50元",
                act: "激活成本：6元",
                cpr: "点击率：2.50%"
              }
            }
          ],
          [
            {
              name: "拼多多",
              icon: "img/duo.png",
              bg:
                "http://img.zcdsp.com/common/8a978bbc9e41d2b897c4c7982aa1b50d.jpg",
              type: "electric0",
              index: "0",
              text: {
                type: "案例类型：电商类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.28元",
                act: "激活成本：5元",
                cpr: "点击率：3.52%"
              }
            },
            {
              name: "网易考拉",
              icon: "img/bear.png",
              bg:
                "http://img.zcdsp.com/common/43f3410b2a17eedd8d6201ed059047d9.jpg",
              type: "electric1",
              index: "1",
              text: {
                type: "案例类型：电商类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.30元",
                act: "激活成本：15元"
              }
            }
          ],
          [
            {
              name: "拍拍贷",
              icon: "img/paipaidai.png",
              bg:
                "http://img.zcdsp.com/common/d57540d58befc5c680f82f3717734a25.jpg",
              type: "money0",
              index: "0",
              text: {
                type: "案例类型：金融类",
                platform: "投放平台：智橙移动端",
                cpc: "CPC成本：0.40元",
                act: "点击率：2.50%"
              }
            },
            {
              name: "你我贷",
              icon: "img/niwodai.png",
              bg:
                "http://img.zcdsp.com/common/4899ea625a7a279f6d5f8d8bedb25581.jpg",
              type: "money1",
              index: "1",
              text: {
                type: "案例类型：金融类",
                platform: "投放平台：智橙移动端",
                cpc: " CPC成本：0.30-0.50元",
                act: "激活成本：10-12元",
                cpr: "点击率：3.00%-5.00%"
              }
            }
          ]
        ],
        success_obj: {},
        success_arr: [],
        scroll_index: 0,
        isTrue: "tool",
        isTrueChild: "tool0",
        time: "",
        timeFlag: true,
        /* 媒体资源 */
        mediaArr: [],
        form: {
          company_name: "",
          customer_name:'',
          phone: "",
          img_code: ''
        },
        /*   */
        startx: 0,
        starty: 0,
        scrollTop: 0,
        endx: "",
        endy: "",
        nx: "",
        ny: "",
        angle: "",
        startTime: "",
        vertCodeUrl: ''
      };
    },

    created() {
      /*   这边虽然el没有找到 */
      for (let i = 0; i < 24; i++) {
        this.mediaArr.push({img: `img/2-${1 + i}.png`});
      }
      this.success_obj = this.success_program[0][0];
      this.success_arr = this.success_program[0];
      let obj = {
        _: Date.now(),
        w: 90,
        h: 25
      };
      this.vertCodeUrl = verify_code(obj)
    },
    mounted() {
      //  动态计算高度
      this.$refs.bannerTop.style.height =
        window.document.body.offsetHeight - this.$refs.header.offsetHeight + "px";
      this.scrollSetInterval();
      this.$refs.containerFull.addEventListener("scroll", event => {
        if (
          this.$refs.containerFull.scrollTop +
          window.document.body.offsetHeight >=
          this.$refs.containerFull.scrollHeight -
          100 -
          this.$refs.footer.offsetHeight
        ) {
          this.$refs.login.style.opacity = 1;
          this.$refs.login.style.bottom =
            -this.$refs.containerFull.scrollTop +
            this.$refs.footer.offsetHeight * 1.5 +
            "px";
        }
      });

      this.$refs.containerFull.addEventListener("touchstart", event => {
        let touch = event.touches[0];
        this.startx = touch.pageX;
        this.starty = touch.pageY;
        this.scrollTop = this.$refs.containerFull.scrollTop;
      });

      this.$refs.containerFull.addEventListener("touchmove", event => {
        let touch = event.touches[0]; // 距离窗口的距离改变了
        if (this.path) {
          event.preventDefault(); // 阻止滑动事件
          this.$refs.containerCon.style.top = touch.pageY - this.starty + "px";
        }

        /*  第二屏幕的时候 */
        if (
          this.$refs.containerFull.scrollTop === 0 &&
          !this.path &&
          touch.pageY - this.starty > 0
        ) {
          //往上哦
          event.preventDefault();
          this.topTwo =
            touch.pageY - this.starty - this.$refs.bannerTop.offsetHeight;
          this.$refs.containerCon.style.top =
            touch.pageY - this.starty - this.$refs.bannerTop.offsetHeight + "px";
        }
      });

      this.$refs.containerFull.addEventListener("touchend", event => {
        this.endy = event.changedTouches[0].pageY;
        this.endx = event.changedTouches[0].pageX;
        this.ny = this.endy - this.starty;
        this.nx = this.endx - this.startx;
        this.$refs.containerCon.classList.add("transition");

        if (this.path) {
          if (-this.ny >= this.$refs.bannerTop.offsetHeight / 3) {
            this.path = false;
            setTimeout(() => {
              this.$refs.containerCon.style.top =
                -this.$refs.bannerTop.offsetHeight + "px";
              /* 对于login和箭头的控制  */
              this.$refs.slipping.style.opacity = 0;
              this.$refs.login.style.opacity = 0;
              setTimeout(() => {
                this.$refs.containerCon.classList.remove("transition");
              }, 200);
            });
          } else {
            this.path = true;
            setTimeout(() => {
              this.$refs.containerCon.style.top = 0 + "px";
              setTimeout(() => {
                this.$refs.containerCon.classList.remove("transition");
              }, 200);
            });
          }
        }
        //通过滑动的角度判断触摸的方向  向下滑动
        this.angle = (Math.atan2(this.ny, this.nx) * 180) / Math.PI;
        if (this.angle <= -45 && this.angle >= -135) {
        } else if (this.angle < 135 && this.angle >= 45) {
          if (!this.path && this.$refs.containerFull.scrollTop === 0) {
            if (-this.topTwo < this.$refs.bannerTop.offsetHeight / 1.5) {
              this.$refs.containerCon.style.top = 0;
              this.$refs.slipping.style.opacity = 1;
              this.$refs.login.style.opacity = 1;
              this.$refs.login.style.bottom = "10%";
              this.path = true;
            } else {
              this.$refs.containerCon.style.top =
                -this.$refs.bannerTop.offsetHeight + "px";
            }
          }
        }
      });
    },

    methods: {
      verifyCode() {
        let obj = {
          _: Date.now(),
          w: 90,
          h: 25
        };
        this.vertCodeUrl = verify_code(obj)
      },
      goConsult() {
        customer(this.form).then( res => {
            if (res.success === 200) {
              alert('预约成功!')
              this.form = {};
            }
        })
      },
      change_success: function (obj) {
        this.isTrue = obj.type;
        this.isTrueChild = obj.type_child;
        this.success_obj = this.success_program[obj.arr_1][obj.arr_2];
        this.success_arr = this.success_program[obj.arr_1];
        this.scroll_index = 0;
        this.$refs.imgParentRef.style.transform = `translate(0, ${-3.7 * 0}rem)`;
      },
      /*  动画  */
      scrollAdd: function () {
        clearInterval(this.time);
        this.$refs.imgParentRef.style.transform = `translate(0, ${-3.7 *
        this.scroll_index}rem)`;
      },
      scrollMunus: function () {
        this.time = setInterval(() => {
          this.setIntervalFun();
        }, 1000);
      },
      setIntervalFun: function () {
        // 2张或者以上图片才滑动
        if (this.success_arr.length > 1) {
          if (this.timeFlag) {
            if (this.scroll_index < this.success_arr.length - 1) {
              this.scroll_index++;
              if (this.$refs.imgParentRef) {
                this.$refs.imgParentRef.style.transform = `translate(0, ${-3.7 *
                this.scroll_index}rem)`;
              }
            } else {
              this.timeFlag = false;
            }
          } else {
            if (this.scroll_index > 0) {
              this.scroll_index--;
              if (this.$refs.imgParentRef) {
                this.$refs.imgParentRef.style.transform = `translate(0, ${-3.7 *
                this.scroll_index}rem)`;
              }
            } else {
              this.timeFlag = true;
            }
          }
          this.success_obj = this.success_arr[this.scroll_index];
          this.isTrueChild = this.success_obj.type;
        }
      },
      scrollSetInterval: function () {
        this.time = setInterval(() => {
          this.setIntervalFun();
        }, 1000);
      },
      /* 动画  */
    }
  };
</script>

<style scoped lang="less">
  /*<!--@topWidth:  this.topWidth;-->
      <!--@topHeight:  this.topHeight;-->
      <!--@topMargin: this.topMargin;-->*/
  .container-main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #02030c;
  }

  .scroll-content {
    background-color: #02030c;
  }

  .containerFull {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 0.64rem;
    color: white;
    .container-content {
      width: 100%;
      position: relative;
      &.transition {
        transition: all 200ms ease;
      }
      .banner {
        width: 100%;
        /* 处理margin-top有问题 */
        padding-top: 0.01rem;
        &.banner-top {
          height: 100%;
          .title {
            height: 53vh;
            background: url("../assets/home/first-screen_02.png") no-repeat top center;
            /*background-size: contain; 要写再下方哦  auto是不会让图片变形 会自动调整*/
            background-size: auto 100%;
          }
          .banner-content {
            margin-top: 10vh;
            ul {
              text-align: center;
              li {
                display: inline-block;
                width: 20%;
                line-height: 0.45rem;
                height: 1.42rem;
                img {
                  width: 0.52rem;
                  height: 0.53rem;
                }
                p:nth-child(2) {
                  font-size: 0.2rem;
                }
                p:nth-child(3) {
                  font-size: 0.16rem;
                }
              }
            }
          }
        }
        &.banner-engine {
          padding-bottom: 1rem;
          background-color: #161734;
          .title {
            margin-top: 1rem;
            background: url("../assets/home/engine.png") no-repeat center center;
            background-size: auto 100%;
            height: 0.48rem;
            /* 这块的背景图貌似不太清晰 */
          }
          .text {
            /*transform: scale(0.95);*/
            padding: 0.09rem;
            font-size: 0.16rem;
            text-indent: 0.6rem;
            margin-top: 0.3rem;
          }
          .banner-content {
            padding: 0 0.4rem;
            > ul {
              margin-left: 0.3rem;
              > li {
                align-items: center;
                display: flex;
                justify-content: space-between;
                margin-top: 0.8rem;
                line-height: 0.5rem;
                .left {
                  margin-right: 0.3rem;
                  font-size: 0.2rem;
                  text-align: center;
                  width: 2.98rem;
                  height: 1.46rem;
                  background-color: #0f1d47;
                  display: table;
                  > .img {
                    display: table-cell;
                    vertical-align: middle;
                    width: 0.69rem;
                    height: 0.66rem;
                    > img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  div {
                    vertical-align: middle;
                    display: table-cell;
                  }
                }
                .right {
                  font-size: 0.16rem;
                  width: 3.4rem;
                  height: 1.1rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;

                  div {
                    .icon {
                      margin-right: 0.24rem;
                      width: 0.18rem;
                      height: 0.18rem;
                    }
                  }
                  /*> ul {*/
                  /*li {*/
                  /*list-style: circle outside url('../assets/home/engine-4.png')*/
                  /*}*/
                  /*}*/
                }
              }
            }
          }
        }
        &.banner-scheme {
          padding-bottom: 1rem;
          color: black;
          background-color: #e7effe;
          .title {
            margin-top: 1rem;
            background: url("../assets/home/scheme.png") no-repeat center center;
            background-size: auto 100%;
            height: 0.48rem;
            /* 这块的背景图貌似不太清晰 */
          }
          .text {
            padding: 0.09rem;
            font-size: 0.16rem;
            text-indent: 0.6rem;
            margin-top: 0.3rem;
          }
          .banner-content {
            margin-top: 0.6rem;
            .top {
              display: flex;
              justify-content: space-around;
              .left {
                img {
                  width: 2.47rem;
                  height: 4.67rem;
                }
              }
              .right {
                width: 2.47rem;
                height: 4.67rem;
              }
            }
            ul {
              margin-left: 0.3rem;
              margin-top: 0.8rem;
              li {
                font-size: 0.19rem;
                line-height: 0.54rem;
                margin-left: 0.5rem;
                .icon {
                  display: inline-block;
                  width: 0.26rem;
                  text-align: center;
                  height: 0.26rem;
                  line-height: 0.26rem;
                  border-radius: 50%;
                  background-color: #128bf8;
                  margin-right: 0.2rem;
                }
                span {
                  vertical-align: middle;
                }
              }
            }
          }
        }
        &.banner-case {
          padding: 1rem 0.4rem;
          color: white;
          background-color: #161734;
          .title {
            background: url("../assets/home/case.png") no-repeat center center;
            width: 100%;
            background-size: auto 100%;
            height: 0.48rem;
            /* 这块的背景图貌似不太清晰 */
          }
          .text {
            text-align: center;
            margin-top: 0.28rem;
            font-size: 0.16rem;
            span {
              border: 1px solid #3f4051;
              display: inline-block;
              width: 1.06rem;
              height: 0.39rem;
              margin-right: 0.23rem;
              &.active {
                background-color: #133379;
              }
            }
          }
          .banner-content {
            margin-top: 0.55rem;
            .top {
              .left {
                vertical-align: bottom;
                display: inline-block;
                .top_title {
                  height: 0.9rem;
                  > div {
                    width: 0.49rem;
                    height: 0.49rem;
                    display: inline-block;
                    vertical-align: middle;
                    background-size: 100% !important;
                  }
                }
                .top_bg {
                  background: url("../assets/home/case-bg.png") no-repeat center center;
                  width: 4.19rem;
                  height: 3.84rem;
                  background-size: 4.19rem 3.84rem;
                  font-size: 0.24rem;
                  line-height: 0.1rem;
                  ul > li {
                    padding: 0.5rem 0 0 0.1rem;
                    .icon {
                      display: inline-block;
                      width: 0.1rem;
                      height: 0.1rem;
                      border-radius: 50%;
                      background-color: #0d83ed;
                      margin-right: 0.2rem;
                    }
                  }
                }
              }
              .right {
                margin-left: -0.3rem;
                display: inline-block;
                background: url("../assets/home/case-iphone.png") no-repeat center center;
                width: 2.49rem;
                height: 4.74rem;
                background-size: 2.49rem 4.74rem;
                padding-left: 0.12rem;
                padding-top: 0.57rem;
                .parent {
                  overflow: hidden;
                  height: 3.7rem;
                  img {
                    width: 2.2rem;
                    height: 3.7rem;
                  }
                }
              }
            }
            .bottom {
              margin-top: 0.5rem;
              > div {
                display: inline-block;
                width: 0.49rem;
                height: 0.49rem;
                margin-right: 0.2rem;
                background-size: 100% !important;
                &.active {
                  background-position: 0 0 !important;
                }
              }
            }
          }
        }
        &.banner-media {
          padding: 1rem 0.4rem;
          color: black;
          background-color: #e7effe;
          .title {
            background: url("../assets/home/media.png") no-repeat center center;
            background-size: auto 100%;
            height: 0.48rem;
          }
          .banner-content {
            margin-top: 0.42rem;
            text-align: center;
            line-height: 0.5rem;
            > div {
              margin-left: 0.2rem;
              display: inline-block;
              img {
                width: 1.44rem;
                height: 0.6rem;
              }
            }
          }
        }
        &.banner-link {
          margin-bottom: 1.5rem;
          padding: 1rem 0.4rem;
          color: white;
          background-color: #0a0b26;
          .title {
            background: url("../assets/home/link.png") no-repeat center center;
            background-size: auto 100%;
            height: 0.48rem;
          }
          .text {
            font-size: 0.24rem;
            color: white;
            margin-top: 0.3rem;
            text-indent: 0.6rem;
          }
          .banner-content {
            margin-top: 0.42rem;
            .form {
              .connect {
                position: relative;
                width: 92%;
                margin-left: 0.2rem;
                margin-top: 0.32rem;
                height: 0.6rem;
                .input {
                  height: 100%;
                  border: 1px solid #e1e3e5;
                  /* input默认的背景图是白色的 */
                  background-color: white;
                  input {
                    color: black;
                    text-indent: 0.5rem;
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                }
                .img {
                  width: 0.27rem;
                  height: 0.28rem;
                  position: absolute;
                  left: 0.1rem;
                  top: 0.15rem;
                }
                /* 验证码 */
                &.code {
                  display: flex;
                  text-align: left;
                  justify-content: space-between;
                  input {
                    width : 3.8rem;
                  }
                  button {
                    width: 1.9rem;
                    background-color: #12a6ff;
                    color: white;
                    &:disabled {
                      background-color: gray;
                      color: white;
                    }
                  }
                }
              }
            }
            .center {
              text-align: center;
              margin: 0.5rem auto;
              display: table;
              .left {
                padding-right: 0.5rem;
                vertical-align: middle;
                display: table-cell;
                img {
                  width: 1rem;
                  height: 1rem;
                }
              }
              .right {
                text-align: left;
                display: table-cell;
                vertical-align: bottom;
                line-height: 0.5rem;
                img {
                  width: 0.34rem;
                  height: 0.35rem;
                  vertical-align: middle;
                  margin-right: 0.1rem;
                }
              }
            }
            button {
              background: transparent;
              width: 92%;
              font-size: 0.18rem;
              height: 0.65rem;
              margin-left: 0.2rem;
              margin-top: 0.37rem;
              border: 2px solid #9d9eaa;
              color: white;
              &.zhanghu {
                background-color: #0371d7;
                border: none;
              }
            }
          }
        }
      }
      .footer {
        background-color: #06081f;
        font-size: 0.12rem;
        text-align: center;
      }
    }
  }

  /* absolute和flex可以同时使用，但是记得absolute的块级要加width */
  .header {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    height: 0.64rem;
    line-height: 0.64rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: #14163b;
    > .left {
      margin-left: 0.21rem;
      img {
        width: 0.3rem;
        height: 0.25rem;
        vertical-align: middle;
      }
    }
    > .right {
      margin-right: 0.21rem;
      img {
        margin-right: 0.14rem;
        width: 0.31rem;
        height: 0.31rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.28rem;
        vertical-align: middle;
      }
    }
  }

  .login {
    position: absolute;
    /*position: fixed;*/
    bottom: 10%;
    left: 0;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 0 0.5rem;
    button {
      width: 3.11rem;
      height: 0.71rem;
      background: #0360c4;
      color: white;
      font-size: 0.3rem;
    }
  }

  .slipping {
    position: absolute;
    bottom: 3%;
    left: 0;
    text-align: center;
    width: 100%;
    img {
      width: 0.54rem;
      height: 0.25rem;
    }
  }

  @media screen and(max-width: 320px) {
    .banner-content {
      ul li {
        width: auto !important;
        margin-left: 0.2rem;
      }
    }
  }


</style>
