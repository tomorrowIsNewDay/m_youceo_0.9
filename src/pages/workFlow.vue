<template>
    <div class="work-flow">
        <mt-header fixed title="工作流" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
            <router-link to="/addWorkFlow" slot="right">
              新增
            </router-link>
        </mt-header>
        <ul>
          <router-link :to="{ name: 'wfd', params: {id: item.id}}"  tag="li" class="yc-panel hasMgBottom" v-for='item in items' :key="item.id">
                  <h4 class="panel-title">{{ item.name }}</h4>
                  <div class="txt">
                    <span class="yc-label">{{ item.first }}</span>
            <svg class="icon text-primary fs15 vm" aria-hidden="true">
                            <use xlink:href="#icon-angle-right"></use>
                 </svg>
                 <span class="text-primary fs15">...</span>
                 <svg class="icon text-primary fs15 vm" aria-hidden="true">
                        <use xlink:href="#icon-angle-right"></use>
                 </svg>
                 <span class="yc-label">{{ item.last }}</span>
                  </div>
         </router-link>
      </ul>
    </div>
</template>
<script type="text/javascript">
 export default {
        data () {
            return {
                  items:[{id:0,
                  name:'评审工作流',
                  first:'设计师',
                  last:'设计总监'
                  },{id:1,
                  name:'评审工作流',
                  first:'设计师1',
                  last:'设计总监一部'
                  },{id:2,
                  name:'评审工作流',
                  first:'工程师',
                  last:'总经理'
                  }]
            }
          }
 }
</script>
<style lang="scss" scoped>
    .work-flow{
        padding-top: 48px;
    }
    .fs15{
    font-size: 1.5em
}
.yc-label{
        display: inline;
        padding: 3px 6px;
        line-height: 1;
        color: rgb(41,149,237);
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        border-radius: 6px;
        border:1px solid ;

}
.yc-panel>.txt{
    margin-top:.75rem;
}
</style>
