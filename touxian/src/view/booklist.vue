<template>
  <div id="booklist">
     <div>
         <h4 style="padding-top:15px; margin-bottom:5px;">热门推荐</h4>
  <mu-flexbox>
    <mu-flexbox-item class="flex-demo">
      <img src="/static/booklist/worldwinter.jpg"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="/static/booklist/Origin.jpg"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="/static/booklist/banluo.jpg"/>
    </mu-flexbox-item>
  </mu-flexbox>
<mu-flexbox style="text-align:center;">
    <mu-flexbox-item class="flex-text" >
     世界的凛冬
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-text">
      万物起源
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-text">
      半落
    </mu-flexbox-item>
  </mu-flexbox>



   <mu-flexbox>
    <mu-flexbox-item class="flex-demo">
      <img src="../assets/booklist/es6.jpg"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="../../static/booklist/webface.jpg"/>
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <img src="/static/booklist/web.jpg"/>
    </mu-flexbox-item>
  </mu-flexbox>

  <mu-flexbox style="text-align:center;">
    <mu-flexbox-item class="flex-text" >
      ES6标准入门
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-text">
      前端面试江湖
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-text">
      Web前端开发
    </mu-flexbox-item>
  </mu-flexbox>
</div>
    <h4 style="padding-top:15px; margin-bottom:5px;margin-top:10px;">精选分类</h4>
    <div class="bookclassify">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="男生喜爱"/>
    <mu-tab value="tab2" title="女生喜爱"/>
    <mu-tab value="tab3" title="经典创作"/>
    <mu-tab value="tab4" title="国外名著"/>
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <h4 style="margin-bottom:5px;">男生喜爱</h4>
    <p style="margin:0px;">
        好好学习，天天向上
    </p>
    <div class="bookshelf" v-for="data in allbooklist">
          <div :v-model="data.bookid" @click="tobookdata(data.bookid)">
            <img :src="data.bookimg"/>
            <div class="book_data">
                <h5 class="bookname">{{data.bookname}}</h5>
                <p class="bookdes">{{data.bookevaluate}}</p>
                <h5 class="bookauthor">{{data.bookauthor}}</h5>
            </div>
          </div>
        </div>
  </div>
  <div v-if="activeTab === 'tab2'">
    <h4 style="margin-bottom:5px;">女生喜爱</h4>
    <p style="margin:0px;">
      好好学习，天天向上
    </p>
    <div class="bookshelf" v-for="data in allbooklist">
            <img :src="data.bookimg"/>
            <div class="book_data">
                <h5 class="bookname">{{data.bookname}}</h5>
                <p class="bookdes">{{data.bookevaluate}}</p>
                <h5 class="bookauthor">{{data.bookauthor}}</h5>
            </div>
        </div>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h4 style="margin-bottom:5px;">经典创作</h4>
    <p style="margin:0px;">
      好好学习，天天向上
    </p>
    <div class="bookshelf" v-for="data in allbooklist">
            <img :src="data.bookimg"/>
            <div class="book_data">
                <h5 class="bookname">{{data.bookname}}</h5>
                <p class="bookdes">{{data.bookevaluate}}</p>
                <h5 class="bookauthor">{{data.bookauthor}}</h5>
            </div>
        </div>
  </div>
  <div v-if="activeTab === 'tab4'">
    <h4 style="margin-bottom:5px;">国外名著</h4>
    <p style="margin:0px;">
      上帝为你关上一扇门 却打开了一扇天窗
    </p>
    <div class="bookshelf" v-for="data in allbooklist">
            <img :src="data.bookimg"/>
            <div class="book_data">
                <h5 class="bookname">{{data.bookname}}</h5>
                <p class="bookdes">{{data.bookevaluate}}</p>
                <h5 class="bookauthor">{{data.bookauthor}}</h5>
            </div>
        </div>
  </div>
</div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      datas: [
        {
          img: require('../assets/booklist/hats.jpg'),
          bookname: '我与世界只差一个你',
          bookdes: '12温馨治愈的情感故事，给年轻人爱的正能量',
          bookauthor: '张皓宸'
        },
        {
          img: require('../assets/booklist/morning.jpg'),
          bookname: '可以不可以',
          bookdes: '致青春路上毫不犹豫,勇往直前，青春无限',
          bookauthor: '韩寒'
        },
        {
          img: require('../assets/booklist/water-plant.jpg'),
          bookname: '三国志',
          bookdes: '国家级漫画家蔡志忠，妙笔重现烽火连天的三国',
          bookauthor: '蔡志忠'
        },
        {
          img: require('../assets/booklist/hats.jpg'),
          bookname: '我与世界只差一个你',
          bookdes: '12温馨治愈的情感故事，给年轻人爱的正能量',
          bookauthor: '张皓宸'
        }
      ],
      allbooklist: [],
      allbookapiUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/allBooklist'
    }
  },
  mounted () {
    this.getAllbook()
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    getAllbook () {
      this.$http.get(this.allbookapiUrl).then(function (response) {
        console.log(response)
        this.allbooklist = response.body
        console.log(this.allbooklist)
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
<style lang="less">
#booklist{
 margin-left: 5px;
 margin-right: 5px;
.flex-demo {
  margin-top: 10px;
  height: 120px;
.flex-text {

}  
 
}
.bookclassify{
  margin-bottom: 66px;
    div .mu-tab-text{
        color: #989898;
    }
   .mu-tab-link-highlight{
        background-color: #7cedf5;
    }
}
}


</style>

