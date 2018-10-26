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
        <div class="containerFull" ref='containerFull'>
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
            <div class="banner banner-engine">
                <div class="title">

                </div>
                <div class="text"></div>
                <div class="banner-content">
                </div>
            </div>



        </div>
        <div class="login">
            <button>登陆平台</button>
            <button>注册账号</button>
        </div>
        <div class="slipping">
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
                topMargin: '',
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
                ]
            }
        },
        mounted(){
            console.log( this.$refs.containerFull);
            this.$refs.containerFull.addEventListener('scroll', (event)=>{

            })

            /* width58vh  height 55vh top 61vh   innerHeight  */
            let height = window.document.body.offsetHeight;
            let width = window.document.body.offsetWidth;
            this.topHeight = (58 * height / 667) + 'vh';
            this.topWidth  = (55 * width / 375) + 'vh';
            this.topMargin = (61 * height / 667) + 'vh';

            this.$refs.bannerTop.style.backgroundSize = `${this.topWidth}, ${this.topHeight}`
            this.$refs.bannerMargin.style.marginTop = `${this.topMargin }`

            window.addEventListener('resize', (event)=>{
                height = event.target.innerHeight;
                width = event.target.innerWidth;
                // 这边按照6的尺寸来
                this.topHeight = (58 * height / 667) + 'vh';
                this.topWidth  = (55 * width / 375) + 'vh';
                this.topMargin = (61 * height / 667) + 'vh';
                console.log(this.$refs.bannerTop)
                this.$refs.bannerTop.style.backgroundSize = `${this.topWidth}, ${this.topHeight}`
                this.$refs.bannerMargin.style.marginTop = `${this.topMargin }`
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
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin-top: 0.64rem;
        color: white;
        .banner {
            width: 100%;
            height:100%;
            /* 处理margin-top有问题 */
            padding-top:0.01rem;
            &.banner-top{
                background: url('../assets/home/first-screen_02.png') no-repeat;
               /* <!--background-size: @topWidth @topHeight;-->*/
                img {
                    width: 7.50rem;
                    height: 50vh;
                }
                .banner-content {
                   /* margin-top: @topMargin;*/
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
              background-color: #161734;
            }

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


    /*ipad*/
    @media screen and(min-width: 768px) {
        .banner-content {
            margin-top: 10% !important;
        }
    }
    /*iphonex*/
    @media all and(min-height: 812px) and (max-height: 812px) {
        .banner-content {
            margin-top: 20% !important;
        }
    }
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