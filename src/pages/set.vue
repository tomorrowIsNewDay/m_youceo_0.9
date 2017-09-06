<template>
    <div class="set-wrap">
        <mt-header fixed title="设置" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-cell title="关于我们"></mt-cell>
        <mt-cell title="清除缓存"></mt-cell>
        <mt-cell title="检查更新"></mt-cell>
        <div class="yc-cell text-center bg-default">
                <mt-button size="small" plain class='text-primary' @click.native="loginOut">
                        退出登录
                </mt-button>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data(){
        return {

        }
    },
    components:{

    },
    methods:{
            loginOut(){
                this.$store.dispatch("loginOut");
                this.$router.push({path:"/login"});
            }
    }
}
</script>
<style lang="scss" scoped>
.set-wrap{
    padding-top: 58px;
}
</style>
