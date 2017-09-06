<template>
    <div class="userinfo-wrap">
        <mt-header fixed title="个人资料">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <div slot="right" @click="toEdit">修改</div>
        </mt-header>
        <div class="yc-panel">
            <img :src="userData.avatar_url" class="avatar avatar-lger">
            <div class="userinfo" >
                <h2>{{ userData.loginname }}</h2>
                <p class="text-muted">{{ userData.depat }}·{{ userData.job }}</p>
            </div>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">级别</span>
              <span class="flex-3">{{ userData.level }}</span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">电话</span>
              <span class="flex-3">{{ userData.tel }}</span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">邮箱</span>
              <span class="flex-3">{{ userData.email }}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
    export default {
          computed: {
            ...mapGetters([
                    'userData'
                ])
         },
         methods:{
            toEdit(){
                this.$router.push({path:'/userinfo-edit/'});
            }
         }
    }
</script>
<style lang="scss" scoped="">
    .userinfo-wrap{
        padding-top: 48px;
        .yc-panel{
            background-color: rgb(246,250,254);
            text-align: center;
            .userinfo{
                line-height: 22px;
            }
        }
    }
</style>
