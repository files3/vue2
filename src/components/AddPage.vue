<template>
    <main id="addpage" class="addpage page-pad">
        <div class="loading-box" v-show="loading">
            <loading :size='20'></loading>
        </div>
        <div class="weui-panel weui-panel_access" v-if="!loading">
            <header class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img :src="user.img" alt="">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{sname=='ni' ?user.title : '未授权'}}</h4>
                        <p class="weui-media-box__desc">{{user.desc}}</p>
                    </div>
                </a>
            </header>
            <div class="add-content">
                <img :src="user.img" alt="">
            </div>
            <footer class="add-footer">
                <a href="javascript:;" class="weui-btn" @click="gouseradd">创建发现</a>
                <p>创建你的发现，分享你发现好物让更多人看到吧</p>
            </footer>
        </div>
    </main>
</template>

<script>
    import wx from 'weixin-js-sdk'
    import {mapGetters} from 'vuex'
    import Loading from './public/Loading.vue'
    export default {
        name: 'addpage',
        components:{
            Loading
        },
        created(){
            this.$store.dispatch('showLoading')
        },
        computed: {
            ...mapGetters({
                user: 'getUser',
                loading: 'loading'
            }),
            sname:''
        },
        mounted(){
            //需要后台数据
            wx.config({
                debug: true,
                oppId:'wx83e2439bc5e3323c',
                timestamp:'shijainchuaohahahha223',
                nonceStr:'hahhahahahhahahahhaahha',
                signatrue:'hahahahahah',
                jsApiList:[
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage'
                ]
            })
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title:'分享到朋友圈啊',
                    link:'http://baidu.com',
                    imgUrl:'http://www.haowu520.com/upload/images/1(48).jpg',
                    success:function(){

                    },
                    cancel:function(){

                    }
                })
                wx.onMenuShareAppMessage({
                    title:'这是我的分享但是没有config数据啊',
                    desc:'这是我的分享但是没有config数据啊',
                    link:'http://baidu.com',
                    imgUrl:'http://www.haowu520.com/upload/images/1(48).jpg',
                    type:'',
                    dataUrl:'',
                    success:function(){
                        
                    },
                    cancel:function(){
                    }
                })
            })
            const select=this.$route.query.select
            this.$store.commit('GET_SELECT',select)
            
        },
        methods:{
            showLoading(){
                this.$store.dispatch('showLoading')
            },
            gouseradd(){
                this.$router.replace({path:'useradd'})
            },
        }

    }
</script>
<style scoped>
    .weui-panel{
        margin-top: 0;
    }
    .addpage .weui-media-box__hd img:first-child{
        width:60px;
        height: 60px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
    }
    .add-content img{
        width: 100%;
    }
    .add-footer{
        padding: 20px;
    }
    .add-footer .weui-btn{
        background-color: #f80;
    }
    .add-footer p{
        margin-top: 10px;
        color: #ccc;
    }
</style>