<template>
    <div class="edit-crminfo">
        <mt-header fixed title="修改客户信息">
            <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
        </mt-header>
        <div class="yc-panel inline-box" >
                <span class="inline-3">
                     <img src="../assets/images/logo.png" class="avatar avatar-lger">
                </span>
                <span class="inline-3  text-right  vm">
                    <svg class="icon fs2 text-primary" aria-hidden="true" >
                          <use xlink:href="#icon-plus"></use>
                    </svg>
                </span>
        </div>
        <mt-field label="公司名称" v-model="data.cropname"></mt-field>
        <mt-field label="公司地址"  v-model="data.cropaddress"></mt-field>
        <mt-field label="备注"  type="textarea" rows="4" v-modal="data.remark"></mt-field>
        <footer-bar :btnData="btnData1"></footer-bar>
    </div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterBar';
    export default {
        data(){
            return {
                data: {
                     cropname: "",
                     cropaddress:"",
                     remark:""
                },
                btnData1: [{
                        "href": "#icon-tuidong",
                        "name": "完成",
                        "colorClass": "text-primary"
                }]
            }
         },
        components:{
            FooterBar
         },
    }
</script>
<style lang="scss" scoped>
    .edit-crminfo{
        padding-top: 48px
    }
</style>
