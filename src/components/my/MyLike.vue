<template>
    <main class="page panel page-pad mylike">
        <div class="page_bd">
            <div class="weui-panel weui-panel_access">
                <div class="weui-panel__hd">我评论的</div>
                <div class="weui-panel__bd">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img src="../../../static/g1.jpg" alt="">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">标题一标题一</h4>
                            <p class="weui-media-box__desc">2017-01-11</p>
                            <p class="weui-media-box__desc">
                                <span class="desc-num">已评论</span></p>
                        </div>
                    </a>
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd">
                            <img src="../../../static/g1.jpg" alt="">
                        </div>
                        <div class="weui-media-box__bd">
                            <h4 class="weui-media-box__title">标题二</h4>
                            <p class="weui-media-box__desc">2017-01-11</p>
                            <p class="weui-media-box__desc">
                                <span class="desc-num">已评论</span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        name:'mylike'
    }
</script>
<style scoped>
    .desc-num{
        margin-right: 10px;
    }
    .weui-media-box__title small{
        text-align: right;
    }
    .weui-media-box__hd img{
        width:60px;
        height: 60px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
    }
</style>