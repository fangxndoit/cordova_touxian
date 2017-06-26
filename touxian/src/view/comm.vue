<template>
    <div id="comm">
      <div class="swiper">
         <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items">
              <img :src="item.src" @click="openpage(item.src)"/>  
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>
        </div>
        <h4 style="margin-left:4px;margin-bottom:10px;">热门动态</h4>
        <div class="personcommlist">
      
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
              <div>
         <span class="setting"  @click="open">┇</span>        
              </div>
              </div>
          </div>
        </div>
          <div class="footer" @click="show = !show"><span class="icon-plus"></span></div>
        <transition name="funs">
          <div v-if="show" class="funthings">
           <router-link :to="{path: '/talk'}">
            <div class="talk">                       
            <div class="icon-twitch"></div>
            <div class="talkmore">说说</div>      
            </div>
            
           </router-link>
            <router-link :to="{path: '/talk'}">
            <div class="photo">
            <div class="icon-image"></div>
            <div class="photomore">相册</div>
            </div>
            </router-link>
            <router-link :to="{path: '/talk'}">
            <div class="camera">
            <div class="icon-video-camera"></div>
            <div class="cameramore">拍摄</div>
            </div> 
            </router-link> 
          </div>
        </transition>

  <mu-dialog :open="dialog"  @close="close">
              <div class="qu1">不感兴趣，减少这类推荐</div>
              <div class="qu2">不再显示推荐动态</div>
              <div class="qu3">举报</div>
            </mu-dialog>        
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  },
  methods: {
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    openpage (val) {
      console.log(val)
      this.$router.push({path: '/topic'})
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      items: [{
        src: require('../assets/topic/topic1.png')
      }, {
        src: require('../assets/topic/topic2.png')
      }, {
        src: require('../assets/topic/topic3.png')
      }, {
        src: require('../assets/topic/topic4.png')
      }],
      swiperSlide: [1, 2, 3, 4],
      show: false,
      dialog: false,
      datas: [
        {
          data1: 'data1',
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
          data2: 'data2',
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
        },
        {
          data2: 'data2',
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
  }
}
</script>
<style lang="less" scoped>
@import '../common/stylus/style.css';
@import '../common/stylus/theme.less';
@import '../common/stylus/animate.css';
#comm{
  .personcommlist{
    margin-bottom: 56px;
  }
  .swiper{
    margin-top: 48px;
    width: 100%;
    height: 200px;
    img{
    width: 100%;
    height: 200px;
    }
  }
}
.footer{
  
  position: fixed;
  bottom:40px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  
  line-height: 50px;
  text-align: center;
  left: 50%;
  margin-left: -20px;
  z-index: 98;
  background-color: @lighterPrimaryColor;
  animation: myfirst 1s,bounce 2s;
}
.select{
  margin-top: 48px;
}
.icon-plus{
  color: #fff;
  
}
.funthings{
  
  position: fixed;
  bottom: 90px;
  width:200px;
  height: 60px;
  left: 50%;
  margin-left: -80px;
  
  
  
}
.funthings .talk{
  width: 50px;
  height: 50px;
  float:left;
  text-align: center;
  border-radius: 25px;
  border: 1px solid @lighterPrimaryColor;
  color: #fff;
  background-color:@lighterPrimaryColor; 
  margin-right: 10px;
}
.funthings .photo{
  width: 50px;
  height: 50px;
  float:left;
  text-align: center;
  border-radius: 25px;
  border: 1px solid @lighterPrimaryColor;
  color: #fff;
  background-color:@lighterPrimaryColor;
  margin-right: 10px;
}
.funthings .camera{
  width: 50px;
  height: 50px;
  float:left;
  text-align: center;
  border-radius: 25px;
  border: 1px solid @lighterPrimaryColor;
  color: #fff;
  background-color:@lighterPrimaryColor;
}
.camera div{
  width: 50px;
  height: 20px;
  font-size: 16px;
}
.talk div{
  width: 50px;
  height: 20px;
  font-size: 16px;
}
.photo div{
  width: 50px;
  height: 20px;
  font-size: 16px;
}

.icon-image{ 
  margin-top: 5px;
  padding-top: 3px;
}
.icon-video-camera{
  margin-top: 5px;
  padding-top: 3px;
}
.icon-twitch{
  margin-top: 5px;
  padding-top: 3px;
}
.funs-enter-active{
 animation: wobble 1s;

}
.funs-leave-active{
  animation: bounceOut 0.5s;
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
.setting{
  position: absolute;
  right: 3px;
  bottom: 5px;
 
}
.pic{
  height: 80px;
}
.qu1{
  font-size: 16px;
  padding: 4px;
}
.qu2{
  font-size: 16px;
  padding: 4px;
}
.qu3{
  font-size: 16px;
  padding: 4px;
}

</style>
