# mobile-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```



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


          var mySwiper = new Swiper('.swiper-container', {

                        draggable: true,

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
