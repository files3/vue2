<template>
    <main id="mypage" class="mypage page-pad">

        <div class="weui-panel weui-panel_access">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                    <img :src="user.img" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{sname=='ni' ?user.title : '未授权'}}</h4>
                    <p class="weui-media-box__desc">{{user.desc}}</p>
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="goMyNews">
                <div class="weui-cell__hd"><i class="icon iconfont icon-xiaoxi"></i></div>
                <div class="weui-cell__bd">
                    <p>消息</p>
                </div>
                <div class="weui-cell__ft">
                    <span class="weui-badge" style="margin-left: 5px;margin-right: 5px;">5</span>
                </div>
            </a>
        </div>

        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="goMyadd">
                <div class="weui-cell__hd"><i class="icon iconfont icon-wps-create"></i></div>
                <div class="weui-cell__bd">
                    <p>我创建的</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>

        <div class="weui-cells">
             <a class="weui-cell weui-cell_access" href="javascript:;" @click="goMylike">
                <div class="weui-cell__hd"><i class="icon iconfont icon-iconwocanyude"></i></div>
                <div class="weui-cell__bd">
                    <p>我评论的</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd"><i class="icon iconfont icon-shoucang"></i></div>
                <div class="weui-cell__bd">
                    <p>我的收藏</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>

    </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  name: 'mypage',

  data(){
    return {
        sname: ''
    }
  },
  mounted:function(){
      const select=this.$route.query.select
      this.$store.commit('GET_SELECT',select)
  },
  computed: {
      ...mapGetters({
          user: 'getUser'
      })
  },
  methods: {
      goMyadd(){
          this.$router.replace('/myadd')
      },
      goMylike(){
        this.$router.replace('/mylike')
      },
      goMyNews(){
        this.$router.replace('/mynews')
      }
  }
}
</script>

<style scoped>
    .mypage .weui-media-box__hd img{
        width:60px;
        height: 60px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
    }
    i{
        font-size: 21px;
        color: #1d9bdc;
        margin-right: 10px;
    }
</style>