<template>
  <div class="content-modal">
    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../assets/img/left.png">
        <span>返回</span>
      </template>
      <span>注册页面</span>
    </y-header>
    <div class="content">

      <div class="scroll-content"  margin-header style="background-color: white">
            <div class="form">
              <form  target="frameFile1" @submit="goRegister()" >
                  <iframe name='frameFile1' style='display: none;'></iframe>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/mail.png" />
                    <div class="input">
                      <input v-model="user.user_name" placeholder="登录邮箱" type="text" required pattern="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$" @blur="userNameVaild" :class="{'active': exist_flag}">
                    </div>
                  </div>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/pwd.png" />
                    <div class="input">
                      <input v-model="user.password" placeholder="密码(8~18位字母和数字或符号的组合!)" type="text" required  pattern="((?=.*\d)(?=.*[A-Za-z]))^[A-Za-z\d]{6,18}$" >
                    </div>
                  </div>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/pwd.png" />
                    <div class="input">
                      <input v-model="user.old_pwd" placeholder="确认密码" type="text" required :class="{'active': flag_pwd}">
                    </div>
                  </div>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/company.png" />
                    <div class="input">
                      <input v-model="user.nick_name" placeholder="企业名称" type="text" required>
                    </div>
                  </div>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/link-people.png" />
                    <div class="input">
                      <input v-model="user.link_user" type="text" placeholder="联系人" required>
                    </div>
                  </div>

                  <div class="connect">
                    <img class="icon" src="../assets/css/login/loginphone.png" />
                    <div class="input">
                      <input v-model="user.mobile_phone" placeholder="联系电话" type="text" required pattern="^1\d{10}$">
                    </div>
                  </div>

                  <div class="connect code">
                    <img class="icon" src="../assets/css/login/yanzhengma.png" />
                    <div class="input">
                      <input v-model="user.verify_code" type="text" placeholder="验证码" required>
                    </div>
                    <button @click="verifyCode()" :disabled="flagCode" type="button">{{codeText}} <span>{{countdown}}</span></button>
                  </div>
                  <button type="submit">注册</button>
                </form>
            </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {existUser, register, verifycode} from "../services/service";
  import md5 from 'spark-md5';
  let Base64 = require('js-base64').Base64;

  export default {
    data() {
      return {
        flag_pwd: false,
        exist_flag: false,
        user : {
          nick_name:'',
          link_user:'',
          user_name:'',
          password:'',
          old_pwd:'',
          mobile_phone:'',
          verify_code:''
        },
        countdown :  60,
        flagCode : false,
        codeText : '获取验证码'
      }
    },
    watch: {
      user: {
        handler(newValue) {
          this.flag_pwd = newValue.password === newValue.old_pwd ? false : true;
        },
        deep: true
      }
    },
    methods: {
      /* register */
      userNameVaild() {
        if (this.user.user_name) {
          existUser({user_name: this.user.user_name}).then (res => {
               this.exist_flag = res.result;  // false说明账户不存在
          })
        }
      },
      goRegister() {
        this.user.new_pwd = md5.hash(this.user.password);
        this.user.base64_pwd = Base64.encode(this.user.password);
        register(this.user).then( res => {
          if (res.success != 200) {
              alert (res.errorList[0]._description)
          }
        })
      },
      verifyCode() {
        if (!this.user.mobile_phone) {
          alert('请输入手机号');
          return;
        }
        this.countdown --;
        localStorage.setItem('countdown', this.countdown + '');
        this.codeTest();
        verifycode({mobile_number: this.user.mobile_phone}).then( res => {

        })
        // this._publicService.RegisterVerifyCode({mobile_number: this.user.mobile_phone}).subscribe( res => {})
      },
      codeTest() {
        if (localStorage.getItem('countdown') && +localStorage.getItem('countdown') <  60 && +localStorage.getItem('countdown') > 0) {
          this.countdown = +localStorage.getItem('countdown');
          this.countdown --;
          this.flagCode = true;
          this.codeText = '重新发送';
          localStorage.setItem('countdown', this.countdown + '');
          setTimeout( () => {
            this.codeTest();
          }, 1000)
        } else {
          this.countdown = 60;
          this.flagCode = false;
          this.codeText = '获取验证码';
          localStorage.setItem('countdown', this.countdown + '');
        }
      },
      btnLeft() {
        this.$router.replace('/')
      },
      btnRight() {
        this.$router.replace('/')
      },
    }
  }
</script>

<style scoped lang="less">
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
    border-radius: 0.03rem;
  input {
    width : 100%;
    height: 100%;
    text-indent: 0.9rem;
    border: none;
    &.active {
       color: red;
      &::-webkit-input-placeholder, &:-moz-placeholder, &::-moz-placeholder,  &:-ms-input-placeholder{
        color: red;
      }
     }
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
     justify-content: space-between;
  input {
    width : 3rem;
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
  button[type='submit']{
    width : 5rem;
    height: 0.55rem;
    border-radius: 0.03rem;
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
    background-color: #12a6ff;
    color: white;
  }
  }

</style>
