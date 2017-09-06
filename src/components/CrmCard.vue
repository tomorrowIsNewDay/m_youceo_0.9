<template>
    <div class="crm-card yc-panel">
        <div class="yc-panel-title">
            <img :src="crmData.pic_url"  class="yc-panel-logo" />
            <h4 class="fw_normal">
               <router-link :to="{ name: 'crminfo', params: {id: crmData.id}}" >{{ crmData.name }}</router-link>
                <small :class="crmData.level" class="pull-right" >{{ crmData.level }}</small>
            </h4>
        </div>
        <div class="yc-panel-content text-muted">
            <p><svg class="icon text-submit me-icon mr5" aria-hidden="true">
                <use xlink:href="#icon-cloud-disk"></use>
            </svg>
            {{ crmData.adress }}</p>
            <p class="pl30">{{ crmData.ower }}的客户</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            crmData: {
                type: Object,
                required: true
              }
        }
    }
</script>
<style lang="scss" scoped>
        a{
            color:rgb(51,51,51);
        }
        .A{color:rgb(222,9,9)}
        .B{color:rgb(64,100,220)}
        .C{color:rgb(3,197,26)}
        .A,.B,.C{font-size: 1.3em}
        .pl30{padding-left: 30px}
</style>
