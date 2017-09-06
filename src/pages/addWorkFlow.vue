<template>
  <div  class="add-work-flow">
      <mt-header fixed title="设计审批工作流" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
       <mt-field class="hasMgBottom" label="发起人" placeholder="请输入发起人" v-model="data.initman"></mt-field>
       <ul>
            <li v-for="item in data.items" :key="item.id">
                <mt-field class="hasMgBottom" label="审批" placeholder="请输入审批人" v-model="item.approveman"></mt-field>
            </li>
       </ul>
       <mt-button size="small" plain class='text-primary' @click="addApprove">
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-plus"></use>
          </svg>
          添加审批人
        </mt-button>
        <footer-bar :btnData="btnData" ></footer-bar>
  </div>
</template>
<script>
import FooterBar from '../components/FooterBar';
export default {
  data () {
    return {
        data:{
          initman:"",
          items:[{
                id:0,
                approveman:""
          }]
        },
        btnData: [{
                "href": "#icon-tuidong",
                "name": "保存",
                "colorClass": "text-primary"
            }]
    }
  },
  methods:{
      addApprove(){
        this.data.items.push({
          id: this.data.items.length,
          approveman:""
        })
      }
  },
  components: {
        FooterBar
    }
}
</script>

<style scoped>
.add-work-flow{
  padding-top: 48px;
  padding-bottom: 58px
}
</style>
