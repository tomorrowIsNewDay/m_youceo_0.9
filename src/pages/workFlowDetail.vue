<template>
  <div  class="work-flow-detail">
      <mt-header fixed title="设计审批工作流" >
            <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
       <div class="yc-panel inline_box">
        <div class="inline-2 text-muted">
            发起人
        </div>
        <div class="inline-4">
            设计师
        </div>
       </div>
       <div class="yc-panel inline_box">
        <div class="inline-2 text-muted">
            发起人
        </div>
        <div class="inline-4">
            设计师
        </div>
       </div>
       <div class="yc-panel inline_box">
        <div class="inline-2 text-muted">
            发起人
        </div>
        <div class="inline-4">
            设计师
        </div>
       </div>
       <div class="addApprover">
        <router-link class="text-primary" to="/addApprover">
            <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-plus"></use>
             </svg>添加审批人
       </router-link>
       </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.work-flow-detail{
  padding-top: 48px
}
</style>
