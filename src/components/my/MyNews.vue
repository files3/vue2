<template>
    <main class="page-pad mynews">
        <div class="weui-panel">
            <div class="weui-panel__hd">我的消息</div>
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">好物名称<small class="news-type">有评论</small></h4>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">40人收藏</li>
                        <li class="weui-media-box__info__meta">140人评论</li>
                    </ul>
                </div>
                <div class="weui-media-box weui-media-box_text">
                    <h4 class="weui-media-box__title">好物名称<small class="news-type">有收藏</small></h4>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">80人收藏</li>
                        <li class="weui-media-box__info__meta">100人评论</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        name:'mynews'
    }
</script>
<style scoped>
    .news-type{
        border:1px solid #f60;
        font-size: 12px;
        color: #f60;
        margin-left: 4px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        border-radius: 3px;
    }
    .weui-media-box__info{
        margin-top: 10px;
        padding-bottom:0;
    }
</style>