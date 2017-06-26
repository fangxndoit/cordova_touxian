<template>
    <div class="my_data">
        <mu-appbar style="background-color: #12dff5;position: absolute; top:0px;z-index:999;">
          <div class="title_data">我的资料</div>
            <mu-icon-button class="icon-arrow-left2" @click="back" slot="left"/>
        </mu-appbar>
        <div class="all_data">

            <div class="detial_data">
              <span>头像</span><span class="headimg_data"><img v-bind:src="personalData.headimg"/></span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data">
              <span>个人主页背景</span><span class="backimg_data"><img v-bind:src="personalData.backgroundimg"/></span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data">
              <span>昵称</span><span class="name_data" v-bind:style="publicstyle">{{personalData.username}}</span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data" @click="sexdata">
              <span>性别</span><span class="sex_data" v-bind:style="publicstyle">{{personalData.gender}}</span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data">
              <span>二维码</span><span></span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data">
              <span>生日</span><span class="birth_data" v-bind:style="publicstyle"><mu-date-picker :hintText="personalData.brithday"/> </span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data" @click="open">
              <span>地区</span><span class="address_data" v-bind:style="publicstyle">{{address[0]}}-{{address[1]}}</span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            <div class="detial_data">
              <span>大学</span><span class="college_data" v-bind:style="publicstyle">{{personalData.university}}</span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
             <div class="detial_data">
              <span>签名</span><span class="git_data" v-bind:style="publicstyle">{{personalData.signature}}</span>
            </div>
            <div class="hr" style="height:1px;border:0px;background-color:#D5D5D5;color:#D5D5D5;"></div>
            
        </div>
        <mu-dialog :open="dialogaddress"  title="请选择省区" @close="close">
              <addressPicker @address = "getData"></addressPicker>
            </mu-dialog>   

    </div>
</template>

<script>
import addressPicker from '@/components/addresspicker'
export default {
  mounted: function () {
    this.getPersonalData()
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    open () {
      this.dialogaddress = true
    },
    close () {
      this.dialogaddress = false
    },
    sexdata () {
      this.dialogsex = true
    },
    getData (msg) {
      this.address = msg
      console.log(this.address)
    },
    getPersonalData () {
      this.$http.get(this.apiDataUrl + this.userId).then(function (response) {
        console.log(response)
        this.personalData = response.body
        console.log(this.personalData)
      })
    }
  },
  data () {
    return {
      userId: 1,
      personalData: [],
      apiDataUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/personData?userId=',
      publicstyle: {
        position: 'absolute',
        right: '5px',
        color: '#989898',
        fontSize: '16px'
      },
      dialogaddress: false,
      dialogsex: false,
      address: ['北京', '北京'],
      addressProvince: '北京',
      addressCity: '北京'
    }
  },
  components: {
    addressPicker

  }
}
</script>
<style lang="less">
@import '../common/stylus/theme.less';
@import '../common/stylus/color.css';
.title_data{
  font-size: 18px;
  
}
.all_data{
  margin-left: 5px;
  margin-right: 5px;
div .mu-text-field{
  width: 80px;
 position: absolute;
 top: -25px;
 right: -1px;

}

}
.detial_data{
  font-size: 18px;
  border: 1px solid #fff;
  padding-top: 10px;
  padding-bottom: 5px;
  margin-top: 5px; 
  position: relative;
  
 
}
.hr{
  margin-top: 10px;
  margin-bottom: 10px;
}
.headimg_data{
  border: 1px solid #fff;
  width: 42px;
  height: 42px;
  border-radius: 26px;
}
.headimg_data img{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: absolute; 
  right: 5px;
  bottom: 1px;
}
.backimg_data{
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
}
.backimg_data img{
  width: 40px;
  height: 40px;
  position: absolute; 
  right: 5px;
  bottom: 1px;
}
.birth_data{
  .mu-text-field-hint{
    width: 90px;
  }
div .mu-text-field-line{
  color: #fff;
  background-color: #fff;
}
div .mu-text-field-hint{
  color: #989898;
}
div .mu-text-field-input{
  color: #989898;
}
}
</style>
