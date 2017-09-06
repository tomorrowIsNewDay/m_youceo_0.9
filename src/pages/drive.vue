<template>
  <div class="drive" ref="drive">
      <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="drive"  @click.native="showHead">
            <svg class="icon fs25" aria-hidden="true">
              <use xlink:href="#icon-tuidong"></use>
            </svg><br>
            推动
          </mt-tab-item>
          <mt-tab-item id="task"  @click.native="showHead">
            <svg class="icon fs25" aria-hidden="true">
              <use xlink:href="#icon-renwu"></use>
            </svg><br>
            任务
          </mt-tab-item>
          <mt-tab-item id="crm"  @click.native="showHead">
            <svg class="icon fs25" aria-hidden="true">
              <use xlink:href="#icon-CRM"></use>
            </svg><br>
            CRM
          </mt-tab-item>
          <mt-tab-item id="me" @click.native="hideHead">
            <svg class="icon fs25" aria-hidden="true">
              <use xlink:href="#icon-wo"></use>
            </svg><br>
            我
          </mt-tab-item>
        </mt-tabbar>
        <mt-tab-container v-model="selected">
              <mt-tab-container-item id="drive">
                <mt-header fixed title="" >
                    <h3 slot="left">推动</h3>
                    <router-link to="/addTask" slot="right">
                      新增
                    </router-link>
                </mt-header>
                <ul class="drive-lists">
                     <li v-for='(item,index) in driveDataList'>
                         <DriveCard :driveData="item" :key="item.id"></DriveCard>
                     </li>
                </ul>
              </mt-tab-container-item>
              <mt-tab-container-item id="task">
                <task ></task>
              </mt-tab-container-item>
              <mt-tab-container-item id="crm">
                <crm></crm>
              </mt-tab-container-item>
              <mt-tab-container-item id="me">
                <me></me>
              </mt-tab-container-item>
         </mt-tab-container>
  </div>
</template>

<script>
import DriveCard from '../components/DriveCard'
import me from './me'
import task from './task'
import crm from './crm'
import { Indicator } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'drive',
  data () {
    return {
      selected: 'drive'
    }
  },
  computed: {
    ...mapGetters([
            'driveDataList',
            'driveHeadIsShow'
        ])
  },
  created() {

    Indicator.open('加载中...');
    this.axios.get('http://localhost:8080/static/driveData.json')
            .then(res=>{
                Indicator.close();
                this.$store.dispatch("initDriveDataList", res.data)

            })
  },
  methods:{
    hideHead: function(){
      // this.$store.dispatch('isShowDriveHead',false);
      this.$refs.drive.style.paddingTop = 0;

    },
    showHead: function(){
      // this.$store.dispatch('isShowDriveHead',true);
      this.$refs.drive.style.paddingTop = 45 + 'px'
    }
  },
  components: {
    DriveCard,
    me,
    task,
    crm
  }
}
</script>

<style scoped>
    .drive{padding-top: 45px}
</style>
