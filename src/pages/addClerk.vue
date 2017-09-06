<template>
    <div class="add-linker">
        <mt-header fixed title="新增员工" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-field label="姓名" placeholder="请输入姓名" v-model="data.username"></mt-field>
        <mt-field label="部门" placeholder="请选择部门" readonly v-model="data.dept" @click.native="showDept=true"></mt-field>
        <mt-field label="职位" placeholder="请选择职位" readonly v-model="data.job" @click.native="showJob=true"></mt-field>
        <mt-field label="级别" placeholder="请选择级别" readonly v-model="data.level" @click.native="showLevel=true"></mt-field>
        <mt-field label="任务提交" placeholder="请选择提交人" readonly v-model="data.post" @click.native="showPost=true"></mt-field>
        <mt-field label="电话" placeholder="请输入电话"type="tel" v-model="data.tel"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="data.email"></mt-field>
        <mt-actionsheet
          :actions="dept_actions"
          v-model="showDept">
        </mt-actionsheet>
        <mt-actionsheet
          :actions="job_actions"
          v-model="showJob">
        </mt-actionsheet>
        <mt-actionsheet
          :actions="level_actions"
          v-model="showLevel">
        </mt-actionsheet>
        <mt-actionsheet
          :actions="post_actions"
          v-model="showPost">
        </mt-actionsheet>
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
                job:"",
                dept:"",
                post:"",
                level:''
            },
            btnData: [{
                "href": "#icon-tuidong",
                "name": "完成",
                "colorClass": "text-primary"
            }],
            showDept:false,
            showJob:false,
            showLevel:false,
            showPost:false,
            dept_actions:[{
                name: '设计部',
                method: this.takePhoto
              }, {
                name: '财务部',
                method: this.takePhoto
              },{
                name: '营销部',
                method: this.takePhoto
              }],
              job_actions:[{
                name: '设计师',
                method: this.takePhoto
              }, {
                name: '会计',
                method: this.takePhoto
              }],
              level_actions:[{
                name: '初级',
                method: this.takePhoto
              }, {
                name: '高级',
                method: this.takePhoto
              }],
              post_actions:[{
                name: '獐子岛',
                method: this.takePhoto
              }, {
                name: '瓦上',
                method: this.takePhoto
              }],
        }
    },
    methods:{
        takePhoto(e) {
        console.log(e.name);
      },
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
