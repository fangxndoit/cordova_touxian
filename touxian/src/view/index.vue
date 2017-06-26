<template>
 
  <div>
    
    <mu-appbar>     
        <div class="logo" slot="left" @click="tomain"></div>
        
        <mu-icon-button class="icon-search"  slot="right" @click="tosearch"/>
        
      </mu-appbar>
      
      <router-view></router-view>
      <div class="botton-bar">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange" class="view-tabs">
      <mu-bottom-nav-item value="main" title="主页" class="icon-home"/>
      <mu-bottom-nav-item value="book" title="书架" class="icon-book"/>
      <mu-bottom-nav-item value="comm" title="社区" class="icon-bubbles"/>
      <mu-bottom-nav-item value="person" title="个人" class="icon-user-tie"/>
    </mu-bottom-nav>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bottomNav: 'main'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push({ path: '/index/' + val })
      console.log(1)
    },
    changeTitle (vm) {
      if (vm.pageTitle) {
        document.title = `${vm.pageTitle}`
      }
    },
    tosearch () {
      this.$router.push({path: '/search'})
    },
    tomain () {
      this.$router.push({path: '/index/main'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/stylus/style.css';
@import '../common/stylus/theme.less';
.mu-appbar{
   width: 100%;
   background-color:@primaryColor;
   height: 48px; 
   position: fixed;
   top: 0px;
   z-index: 9999;
   div .right{
     height: 100px;
   }
   
  
}
.logo{
  width: 100px;
  height: 28px;
  background: url("../assets/log.png") no-repeat left center;
  background-size: cover;
  
}
.botton-bar{
    font-size: 22px;
    width: 100%;
    position: fixed;
    bottom: 0px;  
    z-index: 99;
} 
.mu-bottom-nav-shift{
  background-color:@primaryColor;
  
}
.mu-bottom-nav-shift .mu-buttom-item{
  color: hsla(0,0%,100%,1);
}

</style>

