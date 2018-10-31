<template>



    <div class="mask">
        <div class="mask-content">
            <div class="scroll-mask">

              <div class="close" @click="cancel()">
                <img src="../assets/css/login/close.png">
              </div>

              <div class="title">
                <span @click="flag ='login'" :class="{'active': flag ==='login'}">登陆</span>
                <span @click="flag ='register'" :class="{'active': flag ==='register'}">注册</span>
              </div>

                <!-- login-->
              <div class="form" v-if=" flag ==='login' ">
                <div class="connect">
                  <img class="icon" src="../assets/css/login/mail.png" />
                  <!-- 套一层 因为input边框每个浏览器渲染的样式不一样 -->
                  <div class="input">
                    <input v-model="form.userName" placeholder="邮箱" type="text">
                  </div>
                </div>

                <div class="connect">
                  <img class="icon" src="../assets/css/login/pwd.png" />
                  <div class="input">
                    <input v-model="form.passWord" type="customer_name" placeholder="密码">
                  </div>
                </div>

                <div class="connect code">
                  <img class="icon" src="../assets/css/login/yanzhengma.png" />
                  <div class="input">
                    <input v-model="form.vertCode" type="text" placeholder="验证码">
                  </div>
                  <a><img src="../assets/css/login/code.png"></a>
                </div>
                <button>登陆</button>
            </div>


              <!--register-->
              <div class="form" v-if=" flag ==='register' ">

                <div class="connect">
                  <img class="icon" src="../assets/css/login/mail.png" />
                  <div class="input">
                    <input v-model="user.user_name" placeholder="登录邮箱" type="text">
                  </div>
                </div>

                <div class="connect">
                  <img class="icon" src="../assets/css/login/pwd.png" />
                  <div class="input">
                    <input v-model="user.password" placeholder="设置密码" type="text">
                  </div>
                </div>

                <div class="connect">
                  <img class="icon" src="../assets/css/login/pwd.png" />
                  <div class="input">
                    <input v-model="user.old_pwd" placeholder="确认密码" type="text">
                  </div>
                </div>


                <div class="connect">
                  <img class="icon" src="../assets/css/login/company.png" />
                  <div class="input">
                    <input v-model="user.nick_name" placeholder="企业名称" type="text">
                  </div>
                </div>

                <div class="connect">
                  <img class="icon" src="../assets/css/login/link-people.png" />
                  <div class="input">
                    <input v-model="user.link_user" type="customer_name" placeholder="联系人">
                  </div>
                </div>

                <div class="connect">
                  <img class="icon" src="../assets/css/login/loginphone.png" />
                  <div class="input">
                    <input v-model="user.mobile_phone" placeholder="联系电话" type="text">
                  </div>
                </div>

                <div class="connect code">
                  <img class="icon" src="../assets/css/login/yanzhengma.png" />
                  <div class="input">
                    <input v-model="user.verify_code" type="text" placeholder="验证码">
                  </div>
                  <a><img src="../assets/css/login/code.png"></a>
                </div>
                <button>登陆</button>
              </div>


            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'y-login',
        // props:['money'],
        data() {
          return {
            form : {
              userName: '',
              passWord:'',
              vertCode:''
            },
            flag: 'login',
            user : {
              nick_name:'',
              link_user:'',
              user_name:'',
              password:'',
              old_pwd:'',
              mobile_phone:'',
              verify_code:''
            }
          }
        },
        methods:{
            cancel(){
              this.form = {};
              this.user = {};
              this.$emit('login_cancel', 1000)
            }
        }

    }
</script>

<style scoped lang="less">
  /* 背景  */
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0;
        display: flex;
        width: 100%;
        height:100%;
        background: rgba(0,0,0,0.7);
        align-items: center;
        justify-content: center;
    }
    /* 框的大小  */
    .mask-content {
        width:6.1rem;
    }
    .scroll-mask {
        position: relative;
        height:100%;
        background-color: white;
        border-radius: 15px;
        font-size:0.24rem;
        > .close {
            position:absolute;
            width:0.28rem;
            height:0.28rem;
            top: 0.2rem;
            right: 0.2rem;
            img {
              min-width: 100%;
            }
        }

    }


    .title {
      height:1.08rem;
      line-height: 0.58rem;
      text-align: center;
      background: #fcfcfc;
      display: flex;
      align-items: flex-end;
      justify-content: space-evenly;
      span {
        display:inline-block;
        width:0.9rem;
        height: 0.74rem;
        &.active {
          border-bottom: 2px solid blue;
        }
      }
    }

  .form {
    text-align: center;
    margin-top:0.52rem;
   .connect{
     margin: 0 auto 0.25rem auto;
     width : 5rem;
     height: 0.55rem;
     position: relative;
     .input {
       border: 1px solid #e1e3e5;
       height: 100%;
       input {
         width : 100%;
         height: 100%;
         border-radius: 0.03rem;
         text-indent: 0.9rem;
         border: none;
       }
     }
     .icon {
       width: 0.23rem;
       height:0.31rem;
       position: absolute;
       left: 0.3rem;
       top: 0.1rem;
     }
     /* 验证码 */
     &.code {
       display: flex;
       text-align: left;
       input {
         width : 3.54rem;
       }
       a {
         img {
           width: 1.32rem;
           height: 0.55rem;
         }
       }
     }
   }
    button {
      width : 5rem;
      height: 0.55rem;
      border-radius: 0.03rem;
      margin-top: 0.2rem;
      margin-bottom: 0.6rem;
      background-color: #12a6ff;
    }
  }

</style>
