<template>
    <div id="mian">
        <Banner></Banner>
        <div class="wraper">
            <div class="booklist"><span class="icon-file-text"></span>今日推送 <router-link :to="{path: '/index/booklist'}">更多></router-link></div>
            <div class="book">
              <mu-grid-list class="list">
                  <mu-grid-tile v-for="tile in booklist0">
                    
                      <img :v-model="tile.bookid" :src="tile.bookimg" @click="tobookdata(tile.bookid)"/>
                      <span slot="title">{{tile.bookname}}</span>
                      <span slot="subTitle"><b>{{tile.bookauthor}}</b></span>
                      <mu-icon-button class="icon-star-half" slot="action"/>
                    
                  </mu-grid-tile>
              </mu-grid-list>
            </div>

              <div class="booklist"><span class="icon-list2"></span>独家推送 <router-link :to="{path: '/index/booklist'}">更多></router-link></div>
            <div class="book" id="eg2">
              <mu-grid-list class="list">
                  <mu-grid-tile v-for="tile in booklist1">
                      <img :v-model="tile.bookid" :src="tile.bookimg" @click="tobookdata(tile.bookid)"/>
                      <span slot="title">{{tile.bookname}}</span>
                      <span slot="subTitle"> <b>{{tile.bookauthor}}</b></span>
                      <mu-icon-button class="icon-star-half" slot="action"/>
                  </mu-grid-tile>
              </mu-grid-list>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/banner'
export default {
  components: {
    Banner
  },
  data () {
    return {
      list: [{
        image: require('../assets/booklist/breakfast.jpg'),
        title: 'Breakfast',
        author: 'Myron'
      },
      {
        image: require('../assets/booklist/hats.jpg'),
        title: 'Hats',
        author: 'kakali'
      },
      {
        image: require('../assets/booklist/morning.jpg'),
        title: 'Morning',
        author: 'mokayi'
      },
      {
        image: require('../assets/booklist/water-plant.jpg'),
        title: 'water',
        author: 'MyTd'
      }
      ],
      booklist0: [],
      booklist1: [],
      booklistapiUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/booklist?bookSign='
    }
  },
  mounted: function () {
    this.getbooklist0()
    this.getbooklist1()
  },
  methods: {
    getbooklist0 () {
      this.$http.get(this.booklistapiUrl + 0).then(function (response) {
        console.log(response)
        this.booklist0 = response.body
        console.log(this.booklist0)
      })
    },
    getbooklist1 () {
      this.$http.get(this.booklistapiUrl + 1).then(function (response) {
        console.log(response)
        this.booklist1 = response.body
        console.log(this.booklist1)
      })
    },
    tobookdata (val) {
      history.go(0)
      console.log(val)
      this.$router.push({ path: '/booklistdata/' + val })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/stylus/style.css';
@import '../common/stylus/theme.less';
.select{
  margin-top: 48px;
}
.booklist{
  width: 100%;
font-size: 16px;
height: 35px;
line-height: 35px;
position: absolute;
padding-left: 15px;
color: #777;
span{
  padding-right: 5px;
  font-size: 16px;
  color: @primaryColor;
}
a{
  float: right;
  font-size: 12px;
  color: #666;
  padding-right: 10px;
}
}
.book{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
 padding-top: 35px;
 .mu-icon-button{
   color: #fff;
 }
}
.list{
  width:600px;
  height: 380px;
  overflow-y :auto;
  
}
.icon-star-empty{
  color: #fff;
  font-size: 26px;
}
#eg2{
  padding-bottom: 60px;
}
</style>
