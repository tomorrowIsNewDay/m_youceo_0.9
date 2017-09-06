<template>
    <div class="task">
        <mt-header fixed title="" >
            <h3 slot="left">任务</h3>
            <div slot="right">
              2016/12
            </div>
        </mt-header>
        <div class="yc-cell box-flex" @click="toLowerLevel">
            <div class="flex-1">查阅下级任务</div>
            <div class="flex-1 text-right">></div>
        </div>
        <ul class="task-lists hasMgTop">
             <li v-for='(item,index) in taskDataList' class="bor-top-1">
                 <TaskCard :taskData="item" :key="item.id"></TaskCard>
             </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import TaskCard from '../components/TaskCard';
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui';
    export default {
          computed: {
            ...mapGetters([
                    'taskDataList',
                    'userData'
                ])
          },
          created(){
            this.axios.get('http://localhost:8080/static/taskData.json')
                .then(res=>{
                    this.$store.dispatch("initTaskDataList", res.data);

                }).catch(err=>{
                    Toast({
                      message: err,
                      position: 'top',
                      duration: 2000
                    });
                })
          },
          components: {
            TaskCard
          },
          methods:{
            toLowerLevel:function(){
              this.$router.push({ name: 'lowerLevel', params: {loginname: `${this.userData.loginname}`}})
            }
          }
    }
</script>
<style lang="scss" scoped>
    .bor-top-1{border-top: 1px solid #eee}
    .bor-top-1:first-child{border-top:0}
</style>
