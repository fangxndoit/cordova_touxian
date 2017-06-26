<template>
    <div class="person">
        <div class="slider">
             <img src="../assets/headpic/bg1.jpg" @click="clickImg($event)">
            <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
        </div>
            <div class="msg" v-if="message">
                <h3>_spark ♀ </h3>
                <div id="xi">关注<span>&nbsp;&nbsp;0&nbsp;&nbsp;</span> |&nbsp;&nbsp;粉丝<span>&nbsp;&nbsp;0&nbsp;&nbsp;</span></div>
                <div class="my-msg"><router-link :to="{path: '/mydata'}">我的资料</router-link></div>
            </div>
    
        <img src="../assets/headpic/bg1.jpg" alt="" class="bg slideLeft" id="bg1" />
    <div> 
        <div class="aboutmesometings">
        <mu-tabs :value="activeTab" @change="hangdleTabChange" style="background-color:#fff;" class="my-tabs">
            <mu-tab value="footprint" title="足迹"/>
            <mu-tab value="dynamic" title="动态"/>
            <mu-tab value="aboutme" title="关于我"/>
        </mu-tabs>
        <div v-if="activeTab === 'footprint'">
            <mu-list class="orginlist">
              <mu-list-item title="时间简史">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">刚刚</mu-avatar>
              </mu-list-item>
              <mu-list-item title="半落">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">昨天</mu-avatar>
              </mu-list-item>
              <mu-list-item title="世界的凛冬">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">前天</mu-avatar>
              </mu-list-item>
              <mu-list-item title="摩登时代">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">6.1</mu-avatar>
              </mu-list-item>
              <mu-list-item title="web前端">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">5.1</mu-avatar>
              </mu-list-item>
              <mu-list-item title="一米阳光">
                 <mu-icon-button class="icon-circle-right"  slot="right" />
                 <mu-avatar color="#989898" style="font-size:12px;" backgroundColor="transparent" slot="leftAvatar">很久前</mu-avatar>
              </mu-list-item>
            </mu-list>
            
        </div>
        <div v-if="activeTab === 'dynamic'">
        <div class="personcomm" v-for="data in datas">
          <div class="headpic"></div>
          <div class="name">{{data.name}}</div>
          <div class="time">{{data.time}}</div>
          <div class="flower">+关注</div>
          <div class="text">{{data.text}}</div>
          <div class="pic">
             <mu-flexbox>
                <mu-flexbox-item class="flex-demo" v-for="img in data.imgs">
                      <img :src="img.src"/>
                </mu-flexbox-item>               
              </mu-flexbox>
          </div>
          <div class="oper">
            <mu-flexbox>
                <mu-flexbox-item class="oper-demo">
                  <span class="zan">
                    <img src="../assets/zan1.png"/>
                    000
                  </span>
                </mu-flexbox-item>
                <mu-flexbox-item class="oper-demo">
                  <span class="icon-twitch"></span>
                  <span>888</span>
                </mu-flexbox-item>
                <mu-flexbox-item class="oper-demo">
                   <span class="icon-share2"></span>
                   <span>999</span>
                </mu-flexbox-item>
                 
              </mu-flexbox>
          </div>
        </div>
        </div>
         <div v-if="activeTab === 'aboutme'">
            <h4>个人信息</h4>
            <p>等级：{{level}}</p>
            <p>年龄：{{age}}</p>
            <p>性别：{{gender}}</p>
            <p>地区：{{address}}</p>
            <h4>个人介绍</h4>
            <p>这个人很懒，没有留下任何介绍</p>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import BigImg from '../components/BigImg'
export default {
  data () {
    return {
      activeTab: 'footprint',
      showImg: false,
      message: true,
      imgSrc: '',
      level: 'lv7',
      gender: '男',
      age: '15后摩羯座',
      address: '北京朝阳区',
      datas: [
        {
          data: 'data1',
          name: 'perfect',
          time: '10:58',
          text: '人生四句话：活着就是胜利，挣钱只是游戏，健康才是目的，快乐才是真谛！',
          imgs: [
            {
              src: require('../assets/personpic/01.jpg')
            },
            {
              src: require('../assets/personpic/02.jpg')
            },
            {
              src: require('../assets/personpic/03.jpg')
            }
          ]
        },
        {
          data: 'data2',
          name: 'sprake',
          time: '00:00',
          text: '人生四句话：活着就是胜利，挣钱只是游戏，健康才是目的，快乐才是真谛！',
          imgs: [
            {
              src: require('../assets/personpic/01.jpg')
            },
            {
              src: require('../assets/personpic/01.jpg')
            }
          ]
        }
      ]
    }
  },
  methods: {
    hangdleTabChange (val) {
      this.activeTab = val
    },
    clickImg (e) {
      this.showImg = true
      this.imgSrc = e.currentTarget.src
    },
    viewImg () {
      this.showImg = false
    }
  },
  components: {
    'big-img': BigImg
  }
}
</script>
<style lang="less">
@import '../common/stylus/style.css';
@import '../common/stylus/theme.less';
img.bg {
    width: 100%;
    height:36%;
   -webkit-filter: brightness(0.7);
    filter: brightness(0.7);
    
}
.person{
    margin-top: 48px;
  .icon-circle-right{
    color: @lighterPrimaryColor;
    
  }
  .aboutmesometings{
    margin-bottom: 46px;
  }
}



.slider img{
    width: 100%;
    text-align: center;
    top: 12%;
    content: "";
    display: block;
    height: 100px;
    width: 100px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 10;
   
}

.msg{
    position: absolute;
    width: 100px;
    height: 40px;
    text-align: center;
    top:31%;
    left: 50%;
    margin-left: -50px;
    z-index: 20;

}
h3{
    
    color: #fff;
    font-size: 10px;
    margin: 0;
    height: 20px;
    
}
#xi{
    font-size: 10px;
    color: #fff;
    
}
.my-tabs{
    margin-top: -5px;
    background-color: #fff;
    
}
.mu-tab-text{
    color: #2C91DE;
}
.my-tabs {
    margin-top: -5px;
    background-color: #fff;
    
    >.mu-tab-link-highlight {
      background-color: #2C91DE;
    }
}
.aboutmesometings{
    width: 100%;
    
}
.my-msg{
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 15px;
    padding-bottom: 2px;
    padding-top: 2px;
}
.my-msg a{
    color: #fff;
}


.personcomm{
  padding-top: 5px;
  width: 100%;
  height: 220px;
  border: 1px solid #fff;
  position: relative;
  color: #000;
 
}
.headpic{
 width: 50px;
 height: 50px;
 border: 1px solid #000;
 border-radius: 25px;
 position: absolute;
 left: 3px;
}
.name{
 
 height: 20px;
  font-size: 14px;
  border: 1px solid #fff;
  position: absolute;
  left: 60px;
  top: 3px;
  padding: 2px;
}
.time{
  position: absolute;
  left: 60px;
  border: 1px solid #fff;
  font-size: 10px;
  top: 22px;
  padding: 4px 2px 2px 4px ;
  color: #999999;
}
.flower{
  font-size: 14px;
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 2px;
  color: #12dff5;
}
.text{
  border:1px solid #fff;
  position: absolute;
  left: 60px;
  right: 5px;
  top: 44px;
  padding: 2px;
}
.pic{
  
  position: absolute;
  border:1px solid #fff;
  left: 60px;
  right: 5px;
  padding: 2px;
  top: 90px;
}
.flex-demo{
  height: 80px;
  border: 1px solid #fff;
  img{
    height: 80px;
  }
}
.oper{
  position: absolute;
  border:1px solid #fff;
  left: 60px;
  right: 5px;
  padding: 2px;
  top: 180px;
}
.zan{
  padding-left: 20px;
}
.zan img{
  position: absolute;
  left: 0px;
  top: -1px;
  

}
.oper-demo span{
 color: #999999;
 font-size: 14px;
 
}
.pic{
  height: 80px;
}
</style>

