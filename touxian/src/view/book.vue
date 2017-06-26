<template>
      <div id="booklist">
        <div class="bookshelf" v-for="data in bookshelf" >
          <div :v-model="data.bookid" @click="tobookdata(data.bookid)">
            <img v-bind:src="data.bookimg"/>
            <div class="book_data">
                <h5 class="bookname">{{data.bookname}}</h5>
                <p class="bookdes">{{data.bookevaluate}}</p>
                <h5 class="bookauthor">{{data.bookauthor}}</h5>
            </div>
            </div>
        </div>
       
       
        
    </div>
</template>

<script>
export default {
  data () {
    return {
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
        }
      ],
      bookshelf: [],
      bookid: '',
      apiBookshelfUri: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/Home/index/bookshelf'
    }
  },
  mounted: function () {
    this.getbook()
  },
  methods: {
    tobookdata (val) {
      history.go(0)
      console.log(val)
      this.$router.push({ path: '/bookdata/' + val })
    },
    getbook () {
      this.$http.get(this.apiBookshelfUri).then(function (response) {
        console.log(response)
        this.bookshelf = response.body
        console.log(this.bookshelf)
      })
    }
  }
}
</script>
<style lang="less">
#booklist{
    margin-top: 46px;
    margin-bottom: 66px;
    img{
    width: 100px;
    height: 120px;
    position: absolute;
}

}
.bookshelf{
    width: 100%;
    height: 100%;
    padding-top: 20px;
    margin-left: 15px;
    position: relative;
    margin-top: 10px; 
    

.book_data{
border: 1px solid #fff;
margin-left: 120px;
padding-right: 20px;

}
.bookname{
    margin-top: 10px;
    font-size: 18px;
    margin-bottom: 5px;
    
}
.bookdes{
    margin-top: 0px;
    margin-bottom: 0px;
    color: #454545;
    height: 40px;
    border: 1px solid #fff;
}
.bookauthor{
    margin-top: 10px;
    margin-bottom: 5px;
    color: #787878;
}
}
</style>

