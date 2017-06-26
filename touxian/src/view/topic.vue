<template>
    <div class="topic">
        <mu-appbar style="background-color: #12dff5; height:48px;">
            <span></span>
            <mu-icon-button class="icon-arrow-left2" @click="back" slot="left"/>
            <mu-icon-button   slot="right" class="icon-share2"/>
        </mu-appbar>    
        <div class="topiccomm">
            <img src="../assets/topic/topic1.png"/>
            <p style="font-size:12px;font-family: sans-serif;letter-spacing:1px;">你还记得自己毕业前的最后一节课吗，老师说了什么，你的同学都彼此交流了什么，把那些充满感情的回忆分享出来吧！</p>
            <h4>热门动态</h4>
           <div class="personcommlist">
      
        <div class="personcomm" v-for="data in datas">
          <div class="headpic"></div>
          <div class="name">{{data.name}}</div>
          <div class="time">{{data.time}}</div>
          <div class="flower">+关注</div>
          <div class="egtopic" style="font-size:14px;font-family: sans-serif;letter-spacing:1px;">{{data.egtopic}}</div>
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
              <div>
         <span class="setting"  @click="open">┇</span>        
              </div>
              </div>
          </div>
        </div>
        </div>

    </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      datas: [
        {
          data: 'data1',
          name: 'perfect',
          time: '10:58',
          egtopic: '#还记得自己毕业前的最后一堂课吗#',
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
          egtopic: '#还记得自己毕业前的最后一堂课吗#',
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
  }
}
</script>
<style lang="less">
@import '../common/stylus/style.css';
@import '../common/stylus/theme.less';
.topiccomm{
     
        
    img{
        width: 100%;
        height: 200px;
    }
    p{
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
       
    }
    h4{
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        margin-bottom: 10px;
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
.egtopic{
  border:1px solid #fff;
  position: absolute;
  left: 63px;
  right: 5px;
  top: 40px;
  padding: 2px;
}
.text{
  border:1px solid #fff;
  position: absolute;
  left: 60px;
  right: 5px;
  top: 60px;
  padding: 2px;
}
.pic{
  
  position: absolute;
  border:1px solid #fff;
  left: 60px;
  right: 5px;
  padding: 2px;
  top: 105px;
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
  top: 190px;
}
.zan{
  padding-left: 20px;
}
.zan img{
  position: absolute;
  left: 0px;
  top: -1px;
  width: 22px;
  height: 22px;
  

}
.oper-demo span{
 color: #999999;
 font-size: 14px;
 
}
.setting{
  position: absolute;
  right: 3px;
  bottom: 5px;
 
}
.pic{
  height: 80px;
}
}
</style>
