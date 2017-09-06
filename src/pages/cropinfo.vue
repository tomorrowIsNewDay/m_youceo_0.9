<template>
    <div class="cropinfo">
        <mt-header fixed title="企业资料资料">
            <!-- <router-link to='/userinfo/this.$route.params.loginname' slot="left"> -->
                <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
            <!-- </router-link> -->
        </mt-header>
        <div class="yc-panel">
            <img :src="cropData.avatar_url" class="avatar avatar-lger">
            <div class="userinfo" >
                <h4 class="mb10 mt10">{{ cropData.crop_name }}</h4>
            </div>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">部门数</span>
              <span class="flex-3">{{ cropData.num_depat }}</span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">员工数</span>
              <span class="flex-3">{{ cropData.num_people }}</span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">管理员</span>
              <span class="flex-3">{{ cropData.admin }}
                    <small class="text-muted">管理员拥有修改组织架构的权限</small>
              </span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">联系方式</span>
              <span class="flex-3">{{ cropData.admin_tel }}</span>
        </div>
        <div class="yc-cell box-flex">
              <span class="flex-1 text-muted">邮箱</span>
              <span class="flex-3">{{ cropData.admin_email }}</span>
        </div>
        <div class="yc-crop-cell box-flex">
              <span class="flex-1 text-muted">企业简介</span>
              <span class="flex-3 lh22">{{ cropData.crop_profile }}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
    computed: {
            ...mapGetters([
                    'cropData'
                ])
     },
    created(){
        //初始化企业信息
       this.axios.get('http://localhost:8080/static/cropData.json').then(res=>{
                this.$store.dispatch("initCropData", res.data);
              })
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
     .cropinfo{
        padding-top: 48px;
        .yc-panel{
            background-color: rgb(246,250,254);
            text-align: center;
            .userinfo{
                line-height: 22px;
            }
        }
    }
    .yc-crop-cell{
        padding: .5rem .75rem;
        background-color: #fff;
    }
</style>
