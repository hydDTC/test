<template>
  <div class="content-modal">
    <div class="content">
      <div class="scroll-content" style="margin-bottom:  0.85rem">
        <div class="caveat">
          <p>
            拒绝原因：请完善网站内容，需公司的详细介绍和推广产品的展示及介绍，以协助我们确定推广行业。
          </p>
        </div>

        <div class="panle-container">
          <h2 class="title-text">基本信息</h2>

          <div class="input-control" v-file-upload="fileChange">

          </div>

          <div class="input-control">
            <input type="date" placeholder="请填写时间">
          </div>

          <div class="input-control">
            <input type="text" placeholder="请填写公司名称">
          </div>

          <div class="input-control">
            <input type="text" placeholder="请填写推广域名">
          </div>

          <div class="input-control">
            <input type="text" placeholder="请选择行业属性">
          </div>

          <h2 class="title-text">营业执照</h2>

          <div class="input-control">
            <input type="text" placeholder="请填写营业执照资质编号">
          </div>

          <div class="input-control">
            <input type="text" placeholder="请填写营业执照有效期">
          </div>

          <div class="card-upload">
            <h2 class="title-upload">营业执照正面</h2>
            <div class="upload-box" v-file-upload="fileChange">
              <div class="upload-prompt">
                <p>+</p>
                <p>立即上传</p>
              </div>
            </div>
          </div>

          <h2 class="title-text">资质信息</h2>

          <div class="card-upload">
            <h2 class="title-upload">法人身份证正反面</h2>
            <div class="upload-box" v-file-upload="fileChange">
              <div class="upload-prompt">
                <p>+</p>
                <p>立即上传</p>
              </div>
            </div>

            <h2 class="title-upload">IPC备案信息</h2>
            <div class="upload-box" v-file-upload="fileChange">
              <div class="upload-prompt">
                <p>+</p>
                <p>立即上传</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="flex operating-btn">
        <button>重置</button>
        <button>确定</button>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
    },
    methods: {
      fileChange(file) {
        console.info(file[0]);
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
    }
  }

  .input-control {
    display: flex;
    height: 0.68rem;
    border-radius: 0.1rem;
    background-color: #ffffff;
    margin-bottom: 0.3rem;
    input {
      flex: 1;
      border: none;
      color: #333333;
      font-size: 0.26rem;
      text-indent: 0.3rem;
      background: transparent;
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
