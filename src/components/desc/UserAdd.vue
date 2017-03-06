<template>
    <main id="useradd" class="page-pad">
        <div class="page input">

            <div class="weui-cells__title">给个醒目的标题吧</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="输入标题..">
                    </div>
                </div>
            </div>

            <div class="weui-cells__title">简介还是有必要的</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="请输入简介.." rows="4"></textarea>
                        <!--<div class="weui-textarea-counter"><span>0</span>/200</div>-->
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader">
                            <div class="weui-uploader__hd">
                                <p class="weui-uploader__title">图片上传</p>
                                <div class="weui-uploader__info">0/9</div>
                            </div>
                            <div class="weui-uploader__bd">
                                <ul class="weui-uploader__files" id="uploaderFiles">
                                    <li class="weui-uploader__file weui-uploader__file_status">
                                        <div class="weui-uploader__file-content">
                                            <i class="weui-icon-warn"></i>
                                        </div>
                                    </li>
                                </ul>
                                <div class="upload-box" @click="chooseImage">
                                    <img src="../../assets/upload.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <label class="weui-agree">
                <label for="weuiAgree1">
                    <input id="weuiAgree1" type="checkbox" class="weui-agree__checkbox" checked>
                    <span class="weui-agree__text">
                        公开创建的发现
                    </span>
                </label>
                <label for="weuiAgree2">
                    <input id="weuiAgree2" type="checkbox" class="weui-agree__checkbox" checked>
                    <span class="weui-agree__text">
                        公开评论
                    </span>
                </label>
            </label>

        </div>
        <footer class="add-footer">
            <button class="weui-btn">确定创建</button>
        </footer>
    </main>
</template>
<script>
    
    export default {
        name:'useradd',
        mounted(){
            
        },
        computed: {

        },
        methods: {
            chooseImage(){
                this.$wx.chooseImage({
                    count: 9, 
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function (res) {
                        alert(res)
                    }
                })
                
            }
            
        }
    }
</script>
<style scoped>
    .u-title{
        padding-left: 15px;
        padding-top: 10px;
    }
    .add-footer{
        padding: 20px;
    }
    .add-footer .weui-btn{
        background-color: #f80;
    }
    .weui-agree label{
       margin-right: 14px;
    }
    .upload-box{
        width:79px;
        height: 79px;
        border:1px solid #d9d9d9;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
    }
    .upload-box img{
        width:30px;
    }
</style>