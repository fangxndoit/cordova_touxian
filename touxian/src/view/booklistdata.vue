<template>
  <div id="bookdata" >
    <div>
        <mu-appbar>
        
            <mu-icon-button class="icon-arrow-left2" @click="back" slot="left"/>
            <mu-icon-button class="icon-share2" @click="sharp" slot="right"/>
        </mu-appbar>
    </div>
    <div class="aboutbook">
        <img v-bind:src="findbooklist.bookimg"/>
        <div class="aboutright">
            <h5 class="book_name">{{findbooklist.bookname}}</h5>
            <h4 class="book_author">{{findbooklist.bookauthor}}</h4>
           <div class="book_satr">
            <span class="icon-star-full"></span><span class="icon-star-full"></span>
            <span class="icon-star-full"></span><span class="icon-star-full"></span>
            <span class="icon-star-half"></span><span class="book_mark">{{findbooklist.bookscore}}</span>
            </div>
        </div>
    </div>
    <div class="book_introduce">
       <mu-tabs :value="activeTab" @change="handleTabChange">
         <mu-tab value="tab1" title="简介"/>
         <mu-tab value="tab2" title="目录"/>
         <mu-tab value="tab3" title="关于作者"/>
       </mu-tabs>
       <div v-if="activeTab === 'tab1'" class="booktab1">
          <h4>前言</h4>
          <p class="booktext">
              {{findbooklist.bookintroduction}}
          </p>
       </div>
       <div v-if="activeTab === 'tab2'" class="booktab1">
         <mu-list>
             <mu-list-item title="1，前言"/>
             <mu-list-item title="2，ECMAScript 6简介"/>
             <mu-list-item title="3，let 和 const 命令"/>
             <mu-list-item title="4，变量的解构赋值"/>
             <mu-list-item title="5，字符串的扩展"/>
             <mu-list-item title="6，正则的扩展"/>
             <mu-list-item title="7，数值的扩展"/>
             <mu-list-item title="8，数组的扩展"/>
             <mu-list-item title="9，函数的扩展"/>
             <mu-list-item title="10，对象的扩展"/>
             
             

         </mu-list>
       </div>
       <div v-if="activeTab === 'tab3'" class="booktab1">
         <h4>{{findbooklist.bookauthor}}</h4>
         <div  class="booktext">
             {{findbooklist.aboutauthor}}
            </div>
       </div>
       <div>
           <p style="text-align: center;">···下拉加载更多···</p>
       </div>
       <h4 > 用户评论</h4>
       <div class="bookevaluation" v-for="data in datas">
           
          <div class="headpic"></div>
          <div class="name">{{data.name}}</div>
          <div class="time">{{data.time}}</div>
          
          <div class="text">{{data.text}}</div>
          
          
       </div>
      
       
    </div>
  
    

    <mu-bottom-nav  :value="bottomNav" class="bookbottom" @change="handdown" >
    
      <mu-bottom-nav-item v-if="findbooklist.booksign !== 3" value="shelf" title="+书架" class="addshelf" ref="ref" id="addshelf"/>
      <mu-bottom-nav-item v-else value="shelf" title="已加入" class="addshelf" ref="ref"/>
      <mu-bottom-nav-item  value="read" title="开始阅读" class="nowreading" />
      <mu-bottom-nav-item  value="down" title="下载" class="download" />
    </mu-bottom-nav>
  </div>
</template>
<script>
  export default {
    created () {
      console.log(this.$route.params.bookid)
      this.getbooklist(this.$route.params.bookid)
    },
    methods: {
      getbooklist (val) {
        this.$http.get(this.findbooklistapiUrl + val).then(function (response) {
          console.log(response)
          this.findbooklist = response.body[0]
          console.log(this.findbooklist)
        })
      },
      handdown (val) {
        this.bottomNav = 'shelf'
        if (val === 'shelf') {
          document.getElementById('addshelf').innerHTML = '已加入'
          console.log(this.findbooklist.bookid)
          this.$http.post(this.insetapiUrl + this.findbooklist.bookname + '&bookAuthor=' + this.findbooklist.bookauthor + '&bookEvaluate=' +
          this.findbooklist.bookevaluate + '&bookIntroduction=' + this.findbooklist.bookintroduction + '&aboutAuthor=' + this.findbooklist.aboutauthor +
          '&bookImg=' + this.findbooklist.bookimg + '&bookScore=' + this.findbooklist.bookscore + '&bookSign=' + 3).then((response) => {
            console.log(response)
          })
        }
      },
      addbookshelf () {
        console.log('xxxx')
      },
      back () {
        this.$router.go(-1)
      },
      sharp () {
      },
      handleTabChange (val) {
        this.activeTab = val
      }
    },
    data () {
      return {
        insetapiUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/insertBookshelf?bookName=',
        updataapiUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/updataBookData?bookId=',
        bottomNav: '',
        findbooklistapiUrl: 'http://1.touxianapp.applinzi.com/touxian_sae/index.php/home/index/findBooklist?bookId=',
        findbooklist: [],
        activeTab: 'tab1',
        datas: [{
          id: 'data1',
          name: 'sparker',
          time: '11:00',
          text: '人生四句话：活着就是胜利，挣钱只是游戏，健康才是目的，快乐才是真谛!'
        },
        {
          id: 'data2',
          name: 'sparker',
          time: '11:00',
          text: '人生四句话：活着就是胜利，挣钱只是游戏，健康才是目的，快乐才是真谛!'
        },
        {
          id: 'data3',
          name: 'sparker',
          time: '11:00',
          text: '人生四句话：活着就是胜利，挣钱只是游戏，健康才是目的，快乐才是真谛!'
        }]
      }
    }
  }
</script>
<style lang="less">
@import '../common/stylus/theme.less';
@import '../common/stylus/color.css';
@import '../common/stylus/style.css';
.aboutbook{
  

img{
    width: 100px;
    height: 120px;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;

}
}
.aboutright{
    border: 1px solid #fff;
    margin-left: 140px;
    margin-top: 5px; 
}
.book_name{
    
    margin-bottom: 0px;
    font-size: 18px;
}
.book_author{
    margin-top: 5px;
    margin-bottom: 5px;
    color: #898989;
}
.book_satr{
    color: #12dff5; 
    .book_mark{
        color: #989898;
        margin-left: 5px;
    }
}
.book_introduce{

    margin-top: 40px;
    
    position: absolute;
    width: 100%;
    h2{
        margin-left: 10px;
    }
    h4 {
        margin-left: 10px;
    }
    .mu-list{
      height: 200px;
    }
    div .mu-tab-text{
        color: #989898;
    }
   .mu-tab-link-highlight{
        background-color: #7cedf5;
    }
    .booktab1{
        height: 200px;
    }
    .booktext{
        font-family: sans-serif;
        text-indent:20px;
        letter-spacing:4px;
        margin-left:10px;
        margin-right:10px;
        line-height:22px;
        text-align:justify; 
        text-justify:inter-ideograph;
        
        height: 150px;
        overflow-y:auto;
        
    }
    .bookevaluation{
        width: 100%;
        height: 90px;
        margin-bottom: 10px;
        position: relative;
        
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

.text{
  border:1px solid #fff;
  position: absolute;
  left: 60px;
  right: 5px;
  top: 44px;
  padding: 2px;
}
    }
}
.guodu{
    position: absolute;
}


#bookdata{
     margin-top: 56px;
    .mu-appbar{
        height: 48px;
        position: fixed;
        top: 0px;
        z-index: 999;
    }
    .bookbottom{
    position: fixed;
    bottom: 0px;    
    z-index: 888
}

.addshelf{
   color: #12dff5;
    padding-top: 20px;
    
}
.nowreading{
    background-color: #12dff5;
    color: #fff;
    padding-top: 20px;  
}
.download{
    color: #12dff5;
    padding-top: 20px;
}
}

</style>
