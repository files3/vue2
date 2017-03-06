<style scoped>
    .header{
        width:60px;
        height: 60px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
    }
    .sf-panel-hd{
        padding:0;
    }
    ul{
        padding:0 10px;
    }
    ul>li>img{
        width:100%;
    }
    .weui-media-box__desc i.icon-aixin{
        margin-right: 4px;
    }
    .weui-panel__ft .weui-cell__bd{
        padding-right: 10px;
    }
    li.item-btn{
        text-align: center;
    }
    li.item-btn i{
        font-size: 34px;
    }
    li.item-btn i.icon-aixin{
        color: #f60;
    }
    li.item-btn i.icon-aixin1{
        color: #f60;
    }
    .weui-panel__ft .weui-cells{
        margin-top: 0;
    }
    .user-com{
        padding:10px 15px;
    }
    .user-com img{
        width:40px;
        height: 40px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
    }
    .user-com .weui-media-box__hd{
        width:40px;
        height: 40px;
        line-height: 0;
    }
</style>
<template>
    <main id="itemdesc" class="itemdesc page-pad">
        <div class="page article">
           
            <div class="weui-panel weui-panel_access">
                <header class="weui-panel__bd">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img :src="getitem.header" class="header" alt="">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{getitem.name}}</h4>
                            <p class="weui-media-box__desc"><i class="icon iconfont icon-aixin"></i>{{getitem.num}}</p>
                        </div>
                    </a>
                </header>
                <ul>
                    <li v-html="getitem.text"></li>
                    <li v-for="img in getitem.img">
                        <img :src="img" alt="" @click="previewImage" v-lazy="img"></li>
                    <li class="item-btn">
                        <i class="icon iconfont" :class="[!getlove ? 'icon-aixin' : 'icon-aixin1']" @click="changeStatus"></i>
                    </li>
                </ul>
                <div class="weui-panel__ft">
                    <div class="weui-cells">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <input class="weui-input" type="text" v-model="comval" placeholder="给楼主评论一下吧">
                            </div>
                            <div class="weui-cell__ft">
                                <button class="weui-btn weui-btn_mini weui-btn_primary" @click="sendcom">评论</button>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <footer class="weui-panel weui-panel_access">
                <div class="weui-panel__bd">
                    <div href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg user-com" v-for="com in getcom">
                        <div class="weui-media-box__hd">
                            <img :src="com.avator" alt="">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">{{com.title}}</h4>
                            <p class="weui-media-box__desc">{{com.text}}</p>
                        </div>
                    </div>
                </div>
                <div class="weui-panel__ft sf-panel-hd">
                    <div href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                        <div class="weui-cell__bd">查看更多评论(共30条)</div>
                        <span class="weui-cell__ft"></span>
                    </div>   
                </div>
            </footer>
        </div>
        <msg msgstatus msgtitle="评论成功"></msg>
    </main>
</template>
<script>
import Vue from 'vue'
import { RouterLink } from 'vue-router'
import { Toast,Lazyload } from 'mint-ui'
import { mapGetters,mapActions } from 'vuex'
import Msg from '../public/Msg.vue'
Vue.use(Lazyload)
export default {
    name:'itemdesc',
    components:{
        Msg
    },
    data(){
        return {
            comval:'',
        }
    },
    //页面加载立即调用
    mounted: function(){
        
    },
    //vue计算属性，处理数据
    computed: {
        ...mapGetters({
            getitem: 'getItem',
            getlove: 'getLoveStatus',
            getcom: 'getComment' ,
            msgstatus: 'getMsgStatus',
        })
    },
    //事件
    methods: {
        ...mapActions({
            loveStatus: 'loveStatus',
            sendComment: 'sendComment'
        }),
        changeStatus(){
            this.loveStatus()
            this.getlove ? Toast({message:'收藏成功',duration: 700,position:'top'}) : ''
        },
        sendcom(){
            if(this.comval!=''){
                this.sendComment(this.comval)
            }else{
                Toast({message:'评论内容不能为空',duration: 1000,position:'top'})
                return
            }
            this.comval=''
        },
        previewImage(){
            this.$wx.previewImage({
                current: 'http://www.haowu520.com/upload/images/1(48).jpg',
                urls: [
                    'http://www.haowu520.com/upload/images/1(48).jpg',
                    'http://www.haowu520.com/upload/images/2(45).jpg',
                    'http://www.haowu520.com/upload/images/3(35).jpg',
                    'http://www.haowu520.com/upload/images/4(35).jpg',
                    'http://www.haowu520.com/upload/images/5(37).jpg'
                ] 
            })
        },
    }
}
</script>