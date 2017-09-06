<template>
    <div class="post-dynamic">
        <mt-header fixed >
            <mt-button icon="back" slot="left" @click="back">返回</mt-button>
            <mt-button slot="right" @click="postTxt">发送</mt-button>
        </mt-header>
        <textarea v-model="data.txt"  rows="8" placeholder="输入评论...">

        </textarea>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                data:{
                    txt:""
                }
            }
        },
        methods:{
            back:function(){
                this.$router.go(-1)
            },
            postTxt:function(){
                // todo 调用接口
            }
        }
    }
</script>
<style lang="scss" scoped>
        .post-dynamic{
            padding-top: 48px;
            textarea{
                width: 100%;
                padding: 10px;
                font-size: 14px;
                line-height: 20px;
                word-wrap: break-word;
                box-sizing: border-box;
            }
        }
</style>
