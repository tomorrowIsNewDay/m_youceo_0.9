<template>
    <div class="crm">
        <mt-header fixed title="" >
            <h3 slot="left">客户列表</h3>
            <div slot="right">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-plus"></use>
                  </svg>
            </div>
        </mt-header>
        <ul class="task-lists">
             <li v-for='(item,index) in userData.crmDatas' class="bor-top-1">
                 <CrmCard :crmData="item" :key="item.id"></CrmCard>
             </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import CrmCard from '../components/CrmCard';
import { mapGetters } from 'vuex'
export default {
        computed: {
            ...mapGetters([
                    'userData'
                ])
          },
          components: {
            CrmCard
          },
}
</script>
<style lang="scss" scoped>
    .crm{
    }
    .bor-top-1{border-top: 1px solid #eee}
    .bor-top-1:first-child{border-top:0}
</style>
