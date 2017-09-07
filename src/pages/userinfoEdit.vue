<template>
    <div class="userinfoEdit">
        <mt-header fixed title="修改个人资料">
             <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
        </mt-header>
        <div class="yc-panel inline-box">
                <span class="inline-3">
                     <img :src="userData.avatar_url" class="avatar avatar-lger">
                </span>
                <span class="inline-3  text-right  vm">
                    <svg class="icon fs2 text-primary" aria-hidden="true" >
                          <use xlink:href="#icon-plus"></use>
                    </svg>
                </span>
        </div>
        <mt-field label="用户名" v-model="data.loginname"></mt-field>
        <mt-field label="部门"  v-model="data.depat"></mt-field>
        <mt-field label="职位"  v-model="data.job"></mt-field>
        <mt-field label="级别"  v-model="data.level"></mt-field>
        <mt-field label="电话"  v-model="data.tel"></mt-field>
        <mt-field label="邮箱"  v-model="data.email"></mt-field>
        <footer-bar :btnData="btnData1" @add-handler="onPost"></footer-bar>
    </div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterBar';
import { mapGetters } from 'vuex'
    export default {
          computed: {
            ...mapGetters([
                    'userData'
                ])
         },
         data(){
            return {
                data: {
                     // avatar_url:'',
                     loginname: "",
                     depat:"",
                     job: "",
                     level: "",
                     tel: "",
                     email: ""
                },
                btnData1: [{
                        "href": "#icon-tuidong",
                        "name": "完成",
                        "colorClass": "text-primary"
                }]
            }
         },

         mounted(){
                this.data.loginname = this.userData.loginname;
                this.data.depat = this.userData.depat;
                this.data.job = this.userData.job;
                this.data.level = this.userData.level;
                this.data.tel = this.userData.tel;
                this.data.email = this.userData.email
         },

         methods: {
            // // 提交
            onPost(){
            //   //调用上传信息接口
            //   // 切换路由到上一级
              console.log(this.data)
            }
         },
         components:{
            FooterBar
         },
         // 在路由进入之前 store中userData 赋值给data,数据初始化
         // BUG todo
        //  beforeRouteEnter (to, from, next) {
        //     next(vm=>{
        //         vm.tmp  =  Object.assign(vm.userData);
        //     })
        // },
    }
</script>
<style lang="scss" scoped>
.userinfoEdit{
    padding-top: 48px
}

</style>
