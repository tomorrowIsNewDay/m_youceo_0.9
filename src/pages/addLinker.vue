<template>
    <div class="add-linker">
        <mt-header fixed title="添加联系人" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-field label="姓名" v-model="data.username"></mt-field>
        <mt-field label="联系方式" type="tel" v-model="data.tel"></mt-field>
        <mt-field label="邮箱" type="email" v-model="data.email"></mt-field>
        <mt-field label="职位" v-model="data.job"></mt-field>
        <footer-bar :btnData="btnData" ></footer-bar>
    </div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterBar';
export default {
    data(){
        return {
            data:{
                username:"",
                tel:"",
                email:"",
                job:""
            },
            btnData: [{
                "href": "#icon-tuidong",
                "name": "完成",
                "colorClass": "text-primary"
            }]
        }
    },
    components: {
        FooterBar
    }
}
</script>
<style lang="scss" scoped>
    .add-linker{
        padding-top: 48px
    }
</style>
