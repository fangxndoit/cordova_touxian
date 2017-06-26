<template>
    <!-- 过渡动画 -->
    <transition name="fade">
        <div class="img-view" >
            <!-- 遮罩层 -->
            <div class="img-layer"></div>
            
            <div class="img" >
                <img :src="imgSrc" @click="bigImg">  
                <div class="my-msg" @click="open">更换头像</div>   
                    <mu-dialog :open="dialog" title="更换头像" @close="close">
                        <div class="photo01">拍照</div>
                         <div class="photo02">从相册中选择</div>
                    </mu-dialog>   
            </div>
            

        </div>
    </transition>
</template>
<script>
export default {
  props: ['imgSrc'],
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    bigImg () {
     // 发送事件
      this.$emit('clickit')
    },
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    }
  }
}
</script>
<style scoped>

/*动画*/
.fade-enter-active,
.fade-leave-active {
    transition: all .2s linear;
    transform: translate3D(0, 0, 0);
    z-index: 999;
}

.fade-enter,
.fade-leave-active {
    transform: translate3D(100%, 0, 0);
    z-index: 999;
}
/* bigimg */

.img-view {
    position: absolute;
    width: 100%;
    height: 100%;
}

/*遮罩层样式*/
.img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/*不限制图片大小，实现居中*/
.img-view .img img {
    width: 300px;
    height: 300px;
    max-width: 100%;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
    
}
.my-msg{
    z-index: 999;
    position: absolute;
    font-size: 14px;
    top: 400px;
   padding: 5px 20px 5px 20px;
   left: 50%;
   margin-left: -50px;
}
.photo01  {
    font-size: 22px;
    padding: 10px;
}
.photo02{
    font-size: 22px;
     padding: 10px;
}

</style>
