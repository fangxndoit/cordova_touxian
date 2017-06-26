<template>
    <div class="talk">
        <mu-appbar style="background-color: #12dff5;">
            <mu-icon-button class="icon-arrow-left2" @click="back" slot="left"/>
            <mu-flat-button   slot="right" label="发表" class="push"/>
        </mu-appbar>
        <div class="why_talk">
        <div class="mu-text">
        <mu-text-field hintText="说点什么吧..." multiLine :rows="5" :rowsMax="10"
        :fullWidth="true"  :underlineShow="false"/>
        <div class="carma" @click="open('bottom')">
          <div class="icon-image"></div>
          <div class="talk_text">照片/视频</div>
        </div>
        </div>
        <hr/>
        <div class="talk_address"><span>地点</span><span class="talk_right_add">〉</span></div>
        <hr/>
        <div class="talk_mm"><span>谁能看见</span><span class="talk_all">所有人可见</span><span class="talk_right_mm">〉</span></div>
        <hr/>
        </div>
        <div>
            
            <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
            <mu-list>
              <mu-list-item title="从手机选择"/>
              <mu-list-item title="精美配图"/>
              <mu-list-item title="拍照"/>
              <mu-list-item title="取消" @click="close('bottom')"/>
            </mu-list>
            </mu-popup>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    open (position) {
      this.bottomPopup = true
    },
    close (position) {
      this.bottomPopup = false
    }
  },
  data () {
    return {
      bottomPopup: false
    }
  }
}
</script>
<style lang="less">
@import '../common/stylus/theme.less';
.push span{
  font-size: 17px;
  line-height: 1.5em;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;

}


.mu-text{
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  color: #000;
.mu-text-field-hint{
  color: #989898;
}
textarea{
  color: #000;
}
}

.carma{
  width: 80px;
  height: 80px;
  border: 1px solid #F7F7F7;
  background-color: #F7F7F7;
  margin-left: 10px;

}
.carma .icon-image{
  font-size: 30px;
  color: #D4D4D4;
  text-align: center;
  margin-top: 20px;
}
.talk_text{
  font-size: 12px;
  text-align: center;
  color: #D4D4D4;
}
hr{
  margin-left: 5px;
  margin-right: 5px;
  
}
.talk_address{
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.talk_right_add{
  position: absolute;
  right: 5px;
  color: #CFCFCF;
  padding-top: 1px;
}
.talk_mm{
  font-size: 18px;
  margin-left: 5px;
  margin-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.talk_all{
  position: absolute;
  color: #B5B5B5;
  right: 30px;
  font-size: 16px;
  padding-top: 2px;
}
.talk_right_mm{
  position: absolute;
  right: 5px;
  color: #CFCFCF;
  padding-top: 1px;
}
.demo-popup-bottom{
  width: 100%;
  text-align: center;
}
</style>
