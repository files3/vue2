<style scoped>
    .msg{
        position: fixed;
        top: 0;
        left:0;
        right: 0;
        width: 100%;
        max-width: 675px;
    }
    .mint-popup-2{
        width: 100%;
        max-width: 675px;
        text-align: center;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .mint-popup-top{
        top: 0;
        right: auto;
        bottom: auto;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
    }
    .mint-popup{
        -webkit-transform: translate3d(-50%,-100%,0);
        transform: translate3d(-50%,-100%,0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: .2s ease-out;
        transition: .2s ease-out;
    }
    .mint-p{
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
        -webkit-backface-visibility: block;
        backface-visibility: block;
        -webkit-transition: .2s ease-out;
        transition: .2s ease-out;
    }
    strong{
        line-height: 2.3;
    }
</style>
<template> 
    <div class="msg">
        <div class="mint-popup-2 mint-popup-top mint-popup" :style="{
            'background-color': BgColor,
        }" :class="MsgStatus">
            <strong :style="{'color':FontColor}">{{msgtitle}}</strong>
        </div>
    </div>
</template>
<!--///自定义组件-->
<script>
    export default {
        name:'msg',
        computed: {
            BgColor(){
                return this.bgcolor || this.$parent.bgcolor || 'rgba(0,0,0,0.7)'
            },
            FontColor(){
                return this.color || this.$parent.color || '#fff'
            },
            MsgStatus(){
                return this.$parent.msgstatus
            }
        },
        props: {
            bgcolor: String,
            msgtitle: String,
            color: String,
            msgstatus: String
        },
    }
</script>