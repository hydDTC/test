<template>
  <div class="content-modal">
    <y-header @btnLeft="btnLeft()" @btnRight="btnRight()" @btnTitle="btnTitle()">
      <template slot="btn-left">
        <img src="../assets/img/left.png">
        <span>返回</span>
      </template>
      <span>登陆页面</span>
    </y-header>
    <div class="content">
      <div class="scroll-content" margin-header style="background-color: white">
        <div class="form">
          <form  id="myform" ref="myform" target="frameFile" @submit="goLogin()" >

            <iframe name='frameFile' style='display: none;'></iframe>

            <div class="connect">
              <img class="icon" src="../assets/css/login/mail.png" />
              <!-- 套一层 因为input边框每个浏览器渲染的样式不一样 -->
              <div class="input">
                <input v-model="form1.username" placeholder="用户名" type="text" required>
              </div>
            </div>

            <div class="connect">
              <img class="icon" src="../assets/css/login/pwd.png" />
              <div class="input">
                <input v-model="form1.password" type="customer_name" placeholder="密码" required >
              </div>
            </div>

            <div class="connect code">
              <img class="icon" src="../assets/css/login/yanzhengma.png" />
              <div class="input">
                <input v-model="form1.veritycode" type="text" placeholder="验证码" required>
              </div>
              <a><img :src="vertCodeUrl" width="100%" height="100%"  title="看不清" @click="verifyCode()"></a>
            </div>
            <button  type="submit">登陆</button>
          </form>

        </div>

      </div>
    </div>



  </div>
</template>
<script>
  import {jurisdictionLogin, verify_code} from "../services/service";
  import md5 from 'spark-md5';
  export default {
    data() {
      return {
        vertCodeUrl: '',
        form1 : {
          username: '',
          password:'',
          veritycode:''
        }
      }
    },
    created() {
      let obj = {
        _: Date.now(),
        w: 90,
        h: 34
      };
      this.vertCodeUrl = verify_code(obj);
    },
    mounted() {

    },
    methods: {
      verifyCode() {
        let obj = {
          _: Date.now(),
          w: 90,
          h: 34
        };
        this.vertCodeUrl = verify_code(obj)
      },
      btnLeft() {
        this.$router.replace('/')
      },
      btnRight() {
        this.$router.replace('/')
      },
      /*login */
      goLogin() {
        this.form1.password = md5.hash(this.form1.password);
        jurisdictionLogin(this.form1).then( res => {
          if (res.success != 200) {
            alert(res.errorList[0]._description)
          }
        })
      },
    }
  };
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
