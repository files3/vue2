<template>
    <main id="indexpage" class="page-pad">
        <div class="loading-box" v-show="loading">
            <loading :size='20'></loading>
        </div>
        <div class="item" v-for="item in list" @click="goDesc"> 
            <header class="weui-flex">
                <div class="weui-flex__item">
                    <div class="placeholder"><img :src="item.header" class="head-img" alt=""></div>
                </div>
                <div class="weui-flex__item">
                    <div class="placeholder"><i class="icon iconfont icon-aixin"></i>{{item.num}}</div>
                </div>
            </header>
            <div class="box-img">
                <img :src="img" alt="" v-for="img in item.img">
            </div>
        </div>
        <div class="loading-box-footer" v-show="loading">
            <loading></loading>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from './public/Loading.vue'

export default {
  name: 'indexpage',
  components:{
    Loading
  },
  beforeRouteEnter(to,from,next){
    next((vm)=>{
        window.addEventListener('scroll', vm.scrollArtlist, false)
    })
  },
  beforeRouteLeave(to,from,next){
    window.addEventListener('scroll',this.scrollArtlist,false)
    next()
  },
  created(){
    this.$store.dispatch('showLoading')
  },
  mounted: function(){
      //刷新tab切换样式保留
      const select=this.$route.query.select
      this.$store.commit('GET_SELECT',select)
  },
  computed : {
    ...mapGetters({
        list: 'getFindList',
        loading: 'loading'
    })
  },
  methods: {
      showLoading(){
        this.$store.dispatch('showLoading')
      },
      goDesc(){
          this.$router.replace({path:'/itemdesc'})
      },
      //滚动请求list数据
      scrollArtlist(){
        let totalheight = parseFloat(window.innerHeight) + parseFloat(window.scrollY);
        if (document.body.clientHeight <= totalheight + 200) {
          this.$store.dispatch('getItemList')
        }
      },
      
  }
}
</script>

<style scoped>
img.head-img{
  width:30px;
  height: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.item{
    padding:0 8px;
    margin:10px 10px 0;
    border-top:1px solid #f60;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    background-color: #fff;
}
.item header{
    padding:10px 0 0;
}
.item .weui-flex__item:last-child{
    color: #999999;
    text-align: right;
    margin-right: 10px;
}
.item .weui-flex__item:last-child i{
    margin-right: 3px;
}
.box-img{
    position: relative;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    max-width: 100%;
    overflow-x: auto;
    box-sizing: border-box;
    -webkit-transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
}
.box-img img{
    height: 130px;
    margin-right: 5px;
}
</style>
