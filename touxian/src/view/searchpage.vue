<template>
  <div id="searchPage">
    <mu-appbar>
        <mu-icon-button class="icon-arrow-left2" @click="back" slot="left"/>
        <mu-text-field class="appbar-search-field"   hintText="请输入搜索内容" v-on:focus="toggle" v-on:blur="togle"/>
    </mu-appbar>
    <mu-list v-show = "open" title="历史记录" class="for_data">
        <mu-list-item title="少年派"/>
        <mu-list-item title="水浒传"/>
        <mu-list-item title="夜"/>
        <mu-list-item title="北国"/>
        <div style="text-align:center;">历史记录</div>
    </mu-list>
    <div class="eg_book">
      <p>大家都在搜</p>
      <ul style="padding-left: 10px;">
        <li>
          <span>宇宙的起源</span><span>求婚大作战</span><span>一千零一夜</span>
        </li>
        <li>
          <span>我与世界只差一个你</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    toggle () {
      this.open = !this.open
      console.log(2222)
    },
    togle () {
      this.open = false
    }
  },
  data () {
    return {
      open: false
    }
  }
}
</script>
<style lang="less">
@import '../common/stylus/theme.less';
@import '../common/stylus/color.css';
.searchPage{
  position: relative;
}
.for_data{
  position: absolute;
  background-color: #fff;
 
  border: 1px solid #fff;
  z-index: 999;
}
.eg_book{
  margin-left: 5px;
  color: rgba(0, 0,0, 1);
  position: absolute;
  top: 56px;
  span{
    border: 1px solid #989898;
    padding: 3px 6px 3px 6px;
    margin-right: 20px;
    
  }
  ul li {
    list-style: none;
    margin-bottom: 20px;
    padding-left: 5px;
  }
}
</style>

