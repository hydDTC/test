<template>
    <div class="container-main">
        <div class="header">
            <div class="left">
                <img src="../assets/home/quick-menu.png" />
            </div>
            <div class="right">
                <img src="../assets/home/phone.png" />
                <span>400-670-9927</span>
            </div>
        </div>




        <div class="containerFull" ref="containerFull">

            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <!-- 第一屏 -->
                    <div class="swiper-slide" id="one">

                        <div class="banner banner-top" ref="bannerTop">
                            <!--<img src="../assets/home/first-screen_02.png">-->
                            <div class="banner-content" ref="bannerMargin">
                                <ul>
                                    <li v-for="arr in bannerTopArr">
                                        <img :src="arr.img">
                                        <p>{{arr.num}}</p>
                                        <p>{{arr.text}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div class="swiper-slide" id="two">

                        <!-- 第二屏幕  -->
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
                                            <ul>
                                                <li  v-for="child in engine.arr">{{child.text}}</li>
                                            </ul>
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
                                <span v-for="case1 in success_title">{{case1.name}}</span>
                            </div>
                            <div class="banner-content">

                                <div class="top">
                                    <div class="left">
                                        <div class="top_title">
                                            <span>icon:</span>
                                            <span>uc浏览器</span>
                                        </div>
                                        <!-- 这边的背景建议单独给一个div -->
                                        <div class="top_bg"></div>
                                    </div>
                                    <div class="right"></div>
                                </div>

                                <div class="bottom">
                                    <img src="../assets/home/uc-light.png">
                                </div>

                            </div>
                        </div>

                        <!-- 媒体资源  -->
                        <div class="banner banner-media">
                            <div class="title"></div>
                            <div class="banner-content">
                                <div v-for="media in mediaArr">
                                    <img :src="media.img" />
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
                                    <div class="connect">
                                        <input v-model="form.company_name" placeholder="企业名称(必填)" type="text">
                                        <img src="../assets/home/company-icon.png" />
                                    </div>

                                    <div class="connect">
                                        <input v-model="form.userName" type="customer_name" placeholder="姓名(必填)">
                                        <img src="../assets/home/name-icon.png" />
                                    </div>

                                    <div class="connect">
                                        <input v-model="form.phone" type="text" placeholder="以1开头的11位手机号码(必填)">
                                        <img src="../assets/home/phone-icon.png" />
                                    </div>
                                    <button>预约顾客咨询</button>
                                </div>

                                <div class="center">
                                    <div class="left">
                                        <img src="../assets/home/code.png">
                                    </div>
                                    <div class="right">
                                        <p><img src="../assets/home/phone.png">  <span>400-670-9927</span></p>
                                        <p>周一至周五 9:00-18:00 (节假日除外)</p>
                                    </div>
                                </div>

                                <button class="zhanghu">自动开通广告账户</button>
                            </div>
                        </div>

                        <!-- footer -->

                        <div class="footer">
                            <p>Copyright (C) 2015~ 2019<a href="/">zcmobi.com</a>All Rights Reserved. </p>
                            <p>沪ICP备09044414号</p>
                            <!--Copyright (C) 2015~ {{year}}   <a href="/">{{domain}}</a>   All Rights Reserved. 沪ICP备09044414号-->
                        </div>

                    </div>


                </div>
            </div>




        </div>





        <div class="login" ref="login">
            <button>登陆平台</button>
            <button>注册账号</button>
        </div>
        <div class="slipping" ref="slipping">
            <!-- 这边要用相对路径-->
            <img src="../assets/home/slipping.png" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /* 第一屏的背景图片的宽高 */
                topHeight: '',
                topWidth: '',
                /* 第一屏 */
                bannerTopArr : [
                    {
                        'img': 'img/yidongzhongduan.png',
                        'num': '9.5亿+',
                        'text': '移动终端'
                    },
                    {
                        'img': 'img/rijunliuliang.png',
                        'num': '30亿+',
                        'text': '日均流量'
                    },
                    {
                        'img': 'img/appziyuan.png',
                        'num': '20000+',
                        'text': '主流APP资源'
                    },
                    {
                        'img': 'img/crowddingxiang.png',
                        'num': '精准',
                        'text': '人群定向'
                    },
                    {
                        'img': 'img/toufangcelue.png',
                        'num': '智能推荐',
                        'text': '投放策略'
                    }
                ],
                /* 第er 屏 */
                engineArr: [
                    {
                        img:'img/engine-1.png',
                        text1: '智能',
                        text2: '投放策略',
                        arr: [
                            {
                                text: '模型、算法、分析'
                            },
                            {
                                text:'归因、服务、策略'
                            }

                        ]
                    },
                    {
                        'img':'img/engine-2.png',
                        text1: '智能',
                        text2: '广告创意',
                        arr: [
                            {
                                text: '内容洞察  素材洞察'
                            },
                            {
                                text:'内容管理系统'
                            },
                            {
                                text:'广告素材  动态落地页'
                            }

                        ]
                    },
                    {
                        'img':'img/engine-3.png',
                        text1: '智能',
                        text2: '决策分析',
                        arr: [
                            {
                                text: '媒介策略  人群洞察  产品洞察'
                            },
                            {
                                text:'DMP大数据平台'
                            },
                            {
                                text:'第一方数据  第三方数据'
                            }

                        ]
                    }
                ],
                /* 成功方案 */
                success_title: [
                    {
                        'name': '工具类'
                    },
                    {
                        'name': '游戏类'
                    },
                    {
                        'name': '网服类'
                    },
                    {
                        'name': '电商类'
                    },
                    {
                        'name': '金融类'
                    },

                ],
                success_program : [
                    [
                        {
                            'name': 'UC浏览器',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_uc.png',
                            'bg': 'http://img.zcdsp.com/common/1f809a7a9ac7e8f2a0c6ab1e9466a32b.jpg',
                            'type': 'tool0',
                            'index': '0',
                            'text': {
                                'type': '案例类型：工具类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.56 元',
                                'act': '激活成本：5 元',
                                'cpr':'点击率：8.00%'
                            }
                        },
                        {
                            'name': '快手',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_kuai.png',
                            'bg': 'http://img.zcdsp.com/common/9ddefeff524898acd2a6992df9a0ee0c.jpg',
                            'type': 'tool1',
                            'index': '1',
                            'text': {
                                'type': '案例类型：工具类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPA成本：<5元',
                                'act':'日均新增用户：500+'
                            }
                        }
                    ],
                    [
                        {
                            'name': '魔域',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_moyu.png',
                            'bg': 'http://img.zcdsp.com/common/fdea634cdac8fa30ce468cf34b590829.jpg',
                            'type': 'game0',
                            'index': '0',
                            'text': {
                                'type': '案例类型：游戏类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.48元',
                                'act':'激活成本：39元',
                                'cpr':'点击率：1.76%'
                            }
                        }
                    ],
                    [
                        {
                            'name': '饿了么',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_e.png',
                            'bg': 'http://img.zcdsp.com/common/af7d5d135a5f7f70f7123214686066bb.jpg',
                            'type': 'network0',
                            'index': '0',
                            'text': {
                                'target': '营销目标：通过智橙平台精准广告推送，高效传递品牌信息，有效提升精准度和转化效果，为品牌带来更多有效用户。',
                                'type': '案例类型：网服类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.38元',
                                'act':'激活成本：6元',
                                'cpr':'点击率：3.4%'
                            }
                        },
                        {
                            'name': '每日优鲜',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_xian.png',
                            'bg': 'http://img.zcdsp.com/common/eb3de8e877a9119e92b7ec9d2b131e13.jpg',
                            'type': 'network1',
                            'index': '1',
                            'text': {
                                'type': '案例类型：网服类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.50元',
                                'act':'激活成本：6元',
                                'cpr':'点击率：2.50%'
                            }
                        }
                    ],
                    [
                        {
                            'name': '拼多多',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_ping.png',
                            'bg': 'http://img.zcdsp.com/common/8a978bbc9e41d2b897c4c7982aa1b50d.jpg',
                            'type':'electric0',
                            'index': '0',
                            'text': {
                                'type': '案例类型：电商类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.28元',
                                'act':'激活成本：5元',
                                'cpr':'点击率：3.52%'
                            }
                        },
                        {
                            'name': '网易考拉',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_bear.png',
                            'bg': 'http://img.zcdsp.com/common/43f3410b2a17eedd8d6201ed059047d9.jpg',
                            'type':'electric1',
                            'index': '1',
                            'text': {
                                'type': '案例类型：电商类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.30元',
                                'act':'激活成本：15元',
                            }
                        }
                    ],
                    [
                        {
                            'name': '拍拍贷',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_pai.png',
                            'bg': 'http://img.zcdsp.com/common/d57540d58befc5c680f82f3717734a25.jpg',
                            'type':'money0',
                            'index': '0',
                            'text': {
                                'type': '案例类型：金融类',
                                'platform': '投放平台：智橙移动端',
                                'cpc': 'CPC成本：0.40元',
                                'act':'点击率：2.50%',
                            }
                        },
                        {
                            'name': '你我贷',
                            'icon': 'https://img.zcdsp.com/zcmobi-assets/index/cont3_logo_dai.png',
                            'bg': 'http://img.zcdsp.com/common/4899ea625a7a279f6d5f8d8bedb25581.jpg',
                            'type':'money1',
                            'index': '1',
                            'text': {
                                'type': '案例类型：金融类',
                                'platform': '投放平台：智橙移动端',
                                'cpc':' CPC成本：0.30-0.50元',
                                'act':'激活成本：10-12元',
                                'cpr':'点击率：3.00%-5.00%',
                            }
                        }
                    ],
                ],
                /* 媒体资源 */
                mediaArr: [],
                form: {
                    company_name:'',
                    userName:'',
                    phone: ''

                }
            }
        },
        created() {
            for (let i = 0; i < 24; i ++) {
                this.mediaArr.push( {'img': `img/2-${1+i}.png`})
            }
        },
        mounted(){
            /* swiper */
            console.log(this.$refs.containerFull)

            let that = this;


            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical', // 垂直切换选项
                loop: false, // 循环模式选项
                autoHeight: true, //高度随内容变化

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                on: {
                    slideChangeTransitionStart: function() {
                        // 这边 event没有这个参数 。所以用that了
                        if (this.activeIndex === 1) {
                            // that.$refs.containerFull.style.overflow = 'auto';
                            that.$refs.swiper.style.overflow = 'auto';
                            that.$refs.slipping.style.opacity = '0';
                            that.$refs.login.style.opacity = '0';
                        } else {
                            that.$refs.swiper.style.overflow = 'hidden';
                            // that.$refs.containerFull.style.overflow = 'hidden';
                        }
                    },
                },
            })


            /* width58vh  height 55vh top 61vh   innerHeight  */
            let height = window.document.body.offsetHeight;
            let width = window.document.body.offsetWidth;
            this.topHeight = (58 * height / 667) + 'vh';
            this.topWidth  = (55 * width / 375) + 'vh';

            this.$refs.bannerTop.style.backgroundSize = `${this.topWidth},${this.topHeight}`

            window.addEventListener('resize', (event)=>{

            })
        }
    }
</script>

<style scoped lang="less">
    /*<!--@topWidth:  this.topWidth;-->
    <!--@topHeight:  this.topHeight;-->
    <!--@topMargin: this.topMargin;-->*/
    .container-main {
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background-color: #08061a;
    }
    .containerFull {
        overflow: auto;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin-top: 0.64rem;
        color: white;
        .swiper-container {
            overflow: hidden    ;
            width: 100%;
            height: 100%;
            #two {
                height: auto;
            }
        }
        .banner {
            width: 100%;
            /* 处理margin-top有问题 */
            padding-top:0.01rem;
            &.banner-top{
                height:100%;
                background: url('../assets/home/first-screen_02.png') no-repeat top center;
                img {
                    width: 7.50rem;
                    height: 50vh;
                }
                .banner-content {
                    margin-top: 60vh;
                    ul {
                        text-align: center;
                        li {
                            display: inline-block;
                            width: 20%;
                            line-height: 0.45rem;
                            height: 1.42rem;
                            img {
                                width: 0.52rem;
                                height:0.53rem;
                            }
                            p:nth-child(2){
                                font-size: 0.2rem;
                            }
                            p:nth-child(3){
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
                    background: url('../assets/home/engine.png') no-repeat center center;
                    width: 100%;
                    height: 1rem;
                    /* 这块的背景图貌似不太清晰 */
                }
                .text {
                    padding:0.09rem;
                    font-size: 0.16rem;
                    text-indent: 0.6rem;
                    margin-top: 0.3rem;
                }
                .banner-content {
                   > ul {
                        > li {
                            display: flex;
                            justify-content: space-between;
                            margin-top: 0.8rem;
                            line-height: 0.5rem;
                            .left {
                                font-size: 0.2rem;
                                margin-left:0.4rem;
                                text-align: center;
                                width: 2.98rem;
                                height:1.46rem;
                                background-color: #0f1d47;
                                display:table;
                                >.img {
                                    display:table-cell;
                                    vertical-align: middle;
                                    width:0.69rem;
                                    height:0.66rem;
                                    img {
                                        width:100%;
                                        height:100%;
                                    }
                                }
                                div {
                                    vertical-align: middle;
                                    display:table-cell;
                                }
                            }
                            .right {
                                font-size:0.16rem;
                                width:3.10rem;
                                height:1.10rem;
                                > ul {
                                    li {
                                        list-style: circle outside url('../assets/home/engine-4.png')
                                    }
                                }
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
                    background: url('../assets/home/scheme.png') no-repeat center center;
                    width: 100%;
                    height: 1rem;
                    /* 这块的背景图貌似不太清晰 */
                }
                .text {
                    padding:0.09rem;
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
                        margin-top: 0.8rem;
                        li {
                            font-size: 0.19rem;
                            line-height: 0.54rem;
                            margin-left:0.5rem;
                            .icon {
                                display: inline-block;
                                width:0.26rem;
                                text-align: center;
                                height:0.26rem;
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
                    background: url('../assets/home/case.png') no-repeat center center;
                    width: 100%;
                    height: 1rem;
                    /* 这块的背景图貌似不太清晰 */
                }
                .text {
                    text-align: center;
                    margin-top: 0.28rem;
                    font-size: 0.16rem;
                    span {
                        border: 1px solid #3f4051;
                        display: inline-block;
                        width:1.06rem;
                        height:0.39rem;
                        margin-right:0.23rem;
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
                            }
                            .top_bg {
                                background: url('../assets/home/case-bg.png') no-repeat center center;
                                width: 4.19rem;
                                height: 3.84rem;
                                background-size: 4.19rem 3.84rem;
                            }
                        }
                        .right {
                            margin-left:-0.3rem;
                            display: inline-block;
                            background: url('../assets/home/case-iphone.png') no-repeat center center;
                            width: 2.49rem;
                            height: 4.74rem;
                            background-size: 2.49rem  4.74rem;
                        }
                    }
                    .bottom {
                        margin-top: 0.5rem;
                        img {
                            width: 0.44rem;
                            height:0.44rem;
                        }
                    }
                }

            }
            &.banner-media{
                padding: 1rem 0.4rem;
                color: black;
                background-color: #e7effe;
                .title {
                    background: url('../assets/home/media.png') no-repeat center center;
                    width: 100%;
                    height: 1rem;
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
            &.banner-link{
                padding: 1rem 0.4rem;
                color: white;
                background-color: #0a0c2b;
                .title {
                    background: url('../assets/home/link.png') no-repeat center center;
                    width: 100%;
                    height: 1rem;
                    /*background-size: 5.44rem 0.74rem;*/
                }
                .text {
                    font-size: 0.16rem;
                    color: white;
                    margin-top: 0.3rem;
                }
                .banner-content {
                    margin-top: 0.42rem;
                   .form {
                       .connect {
                           position:relative;
                           width:92%;
                           margin-left: 0.2rem;
                           margin-top: 0.32rem;
                           input {
                               text-indent: 0.5rem;
                               width:100%;
                               height: 0.4rem;
                           }
                           img {
                               width:0.17rem;
                               height:0.18rem;
                               position: absolute;
                               left: 0.1rem;
                               top: 0.1rem;
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
                                width:0.34rem;
                                height: 0.35rem;
                                vertical-align: middle;
                                margin-right: 0.1rem;
                            }

                        }
                    }
                    button {
                        background: transparent;
                        width:92%;
                        font-size: 0.18rem;
                        height: 0.45rem;
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
            height: 0.35rem;
            font-size: 0.12rem;
            text-align: center;
        }
    }

    /* absolute和flex可以同时使用，但是记得absolute的块级要加width */
    .header {
        z-index:2;
        position: absolute;
        top:0;
        left:0;
        color: white;
        height: 0.64rem;
        line-height: 0.64rem;
        width:100%;
        display: flex;
        justify-content: space-between;
        background: #14163b;
        > .left {
            margin-left: 0.21rem;
            img {
                width: 0.30rem;
                height: 0.25rem;
                vertical-align: middle;
            }
        }
        > .right {
            margin-right: 0.21rem;
            img {
                margin-right:0.14rem;
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
        bottom:10%;
        left:0;
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-around;
        padding:0 0.5rem;
         button {
             width: 3.11rem;
             height:0.71rem;
             background: #0360c4;
             color: white;
             font-size: 0.3rem;
        }
    }

    .slipping{
        position: absolute;
        bottom:3%;
        left:0;
        text-align: center;
        width: 100%;
         img {
            width: 0.54rem;
            height:0.25rem;
        }
    }


    /*!*ipad*!*/
    /*@media screen and(min-width: 768px) {*/
        /*.banner-content {*/
            /*margin-top: 65vh !important;*/
        /*}*/
    /*}*/
    /*!*iphonex*!*/
    /*@media all and(min-height: 812px) and (max-height: 812px) {*/
        /*.banner-content {*/
            /*margin-top: 55vh !important;*/
        /*}*/
    /*}*/
    /*ihone5*/
    @media screen and(max-width: 320px) {
        .banner-content {
            ul  li {
                    width:auto !important;
                    margin-left: 0.2rem;
            }
        }
    }


</style>