<template>
  <div class="content-modal">
    <div class="content">
      <div class="scroll-content" style="margin-bottom:  0.85rem">
        <div class="caveat">
          <p>
            拒绝原因：请完善网站内容，需公司的详细介绍和推广产品的展示及介绍，以协助我们确定推广行业。
          </p>
        </div>

        <!-- AUDITED === '审核通过  就不能修改资质信息' -->

        <div class="panle-container">
          <form  id="myform" ref="myform" target="frameFile" @submit="ensure()" @reset="cancel()">

            <iframe name='frameFile' style='display: none;'></iframe>,
            <h2 class="title-text">基本信息</h2>


          <div class="input-control">
            <input type="text" placeholder="请填写公司名称" v-model="user.nick_name" :readonly="user.zc_audit_status === 'AUDITED' " required>
          </div>

          <div class="input-control">
            <input type="text" placeholder="请填写推广域名(eg:http://34432.com)" v-model="user.site_domain_name" :readonly="user.zc_audit_status === 'AUDITED' " required  pattern="^([hH]{1}[tT]{2}[pP]:\/\/|[hH]{1}[tT]{2}[pP][sS]:\/\/)[\d,a-z,A-Z]+[\w,\W]*$">
          </div>

          <div class="input-control">
            <select v-model="user.ad_category_id" v-if="user.zc_audit_status !== 'AUDITED'" required>
              <option v-for="a in ad_category_list" :value="a.ad_category_id">{{a.ad_category_name}}</option>
            </select>
            <input type="text" v-model="user.ad_category_id" v-if="user.zc_audit_status === 'AUDITED'" :readonly="user.zc_audit_status === 'AUDITED' ">
          </div>



          <h2 class="title-text">营业执照</h2>

          <div v-for="a in list1">
            <div class="input-control">
              <input type="text" placeholder="请填写营业执照资质编号" v-model="a.quatification_number" :readonly="user.zc_audit_status === 'AUDITED' " required>
            </div>

            <div class="input-control">
              <input type="date" v-model="a.begin_date" :readonly="user.zc_audit_status === 'AUDITED' " required>
              <span>~</span>
              <input type="date" v-model="a.end_date" :readonly="user.zc_audit_status === 'AUDITED' " required>
            </div>

            <div class="card-upload">
              <h2 class="title-upload">营业执照正面</h2>
              <div class="upload-box" v-file-upload="{data:a,func: fileChange}" v-if="user.zc_audit_status !== 'AUDITED' ">

                <div class="upload-prompt" v-if="!a.url">
                  <p>+</p>
                  <p>立即上传</p>
                </div>

                <div class="img" v-if="a.url">
                  <img :src="a.url">
                </div>

              </div>
              <div class="upload-box" v-if="user.zc_audit_status === 'AUDITED' ">

                <div class="img">
                  <img :src="a.url">
                </div>

              </div>
            </div>
          </div>



          <h2 class="title-text">资质信息</h2>

          <div class="card-upload">
            <div v-for="b in list2" class="second_part">
              <h2 class="title-upload">{{b.item_type_name}}</h2>

              <div class="upload-box" v-file-upload="{data:b,func: fileChange, disabled: user.zc_audit_status === 'AUDITED'}">
                <div class="upload-prompt" v-if="!b.url">
                  <p>+</p>
                  <p>立即上传</p>
                </div>
                <div class="img" v-if="b.url">
                  <img :src="b.url">
                </div>
              </div>

            </div>
          </div>
          </form>
        </div>

      </div>

      <div class="flex operating-btn">
        <button type="reset" form="myform" :disabled="user.zc_audit_status === 'AUDITED'">重置</button>
        <button type="submit" form="myform">确定</button>
      </div>

    </div>
  </div>
</template>
<script>
  import {editInit} from "../services/service";
  import {imgQualification} from "../services/service";
  import {editUpdate} from "../services/service";

  export default {
    data(){
      return {
        nick_name: '',
        site_domain_name: '',
        ad_category_list: [],
        main_qualification_list:[],
        list1:[],
        list2:[],
        user: {},
        ad_category_id: ''
      }
    },
    created() {
      editInit({}).then( res => {
        this.ad_category_list = res.result.ad_category_list;
        this.main_qualification_list = res.result.main_qualification_list;
        this.main_qualification_list.filter( item => {
          if (item.item_type_id === 103) {
            this.list1.push(item)
          } else {
            // item.
            this.list2.push(item)  // 有顺序
          }
        })
        console.log( this.main_qualification_list[0])
        this.user = res.result.user;
      })
    },
    mounted() {

    },
    methods: {
      ensure() {
        console.log('hahhaha')
        //  能到这里说明表单验证通过
        let obj = {
          user: this.user,
          main_qualification_list: this.list1.concat(this.list2)
        }
        editUpdate(obj).then( res => {

        })
      },
      cancel() {
        console.log('cancel')
      },
      fileChange(file, data) {
        console.info(file[0]);
        console.log(data);
        // 这边的图片类型的判断方法
        let type = file[0].type.split('/')[1];
        if (type !== 'jpg' && type !== 'jpeg' && type !== 'bmp' && type !== 'png') {
            console.log('仅支持jpg,jpeg,bmp,png')
          alert('仅支持jpg,jpeg,bmp,png')
          return;
        }
        if (file[0].size > 5 * 1024 *1024) {
            console.log('图片大小不超过5M')
          alert('图片大小不超过5M')
           return;
        }
        imgQualification({
          'file': file[0],
        }).then( res => {
          console.log(res)
            data.url = res.result.filePath;
        })
      }
    }
  };

</script>
<style lang="less" scoped>
  .operating-btn {
    height: 0.85rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    button {
      flex: 1;
      font-size: 0.32rem;
      font-weight: 400;
    }
    button:nth-child(1) {
      background: #eaf4fe;
      color: #398ded;
      &:disabled{
        background: lightgray;
        color: black;
      }
    }
    button:nth-child(2) {
      background: #3090e6;
      color: #ffffff;
    }
  }

  .upload-box + .title-upload {
    margin-top: 0.3rem;
  }

  .card-upload {
    padding: 0.3rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-bottom: 0.3rem;
    .title-upload {
      color: #333333;
      font-size: 0.26rem;
      font-weight: 400;
      margin-bottom: 0.3rem;
    }
    .upload-box {
      height: 2.39rem;
      background-color: #efefef;
      display: flex;
      align-items: center;
      justify-content: center;
      .upload-prompt {
        p {
          color: #999999;
          text-align: center;
        }
        p:nth-child(1) {
          font-size: 0.9rem;
          line-height: 0.8;
          font-weight: 100;
        }
        p:nth-child(2) {
          font-size: 0.26rem;
        }
      }
      // .img {
      //   width: 100%;
      //   height: 100%;
      //   display: flex;
      //   vertical-align: center;
      //   justify-content: center;
      //   img {

      //   }
      // }
    }
    > .second_part{
      &:nth-child(2){
        margin-top: 0.3rem;
      }
    }
  }

  .input-control {
    align-items: center;
    display: flex;
    height: 0.68rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-bottom: 0.3rem;
    input, select {
      flex: 1;
      border: none;
      color: #333333;
      font-size: 0.26rem;
      text-indent: 0.3rem;
      background: transparent;
    }
    input[type='date']{
      text-align: center;
    }
  }

  .panle-container {
    padding: 0.3rem;
  }

  .caveat {
    padding: 0.3rem;
    background: #ffffff;
    > p {
      color: #ff453a;
      font-size: 0.26rem;
      font-weight: 400;
      &::before {
        content: "";
        background: url("../assets/img/caveat-icon.png") no-repeat center;
        background-size: 100%;
        width: 0.28rem;
        height: 0.28rem;
        display: inline-block;
        margin-right: 0.2rem;
      }
    }
  }

  .title-text {
    color: #333333;
    font-size: 0.28rem;
    font-weight: 400;
    position: relative;
    padding-left: 0.2rem;
    margin-bottom: 0.3rem;
    &::before {
      content: "";
      display: inline-block;
      width: 0.1rem;
      border-radius: 0.05rem;
      background-color: #398ded;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>
