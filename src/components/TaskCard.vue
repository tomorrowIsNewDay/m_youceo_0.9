<template>
    <div class="task-card yc-panel">
        <div class="yc-panel-title" v-if="taskData.is_self">
            <svg class="icon yc-panel-logo" aria-hidden="true" >
                  <use xlink:href="#icon-tuidong"></use>
            </svg>
            <h4 class="fw_normal">
                个人任务
                <small class="pull-right text-muted">{{ taskData.time }}</small>
            </h4>
        </div>
        <div class="yc-panel-title" v-else>
            <img :src="taskData.pic_url"  class="yc-panel-logo" />
            <h4 class="fw_normal">
                {{ taskData.name }}
                <small class="pull-right text-muted">{{ taskData.time }}</small>
            </h4>
        </div>
        <div class="yc-panel-content">
             <router-link :to="{ name: 'detail', params: {id: taskData.id}}" >{{ taskData.content }}</router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            taskData: {
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

</style>
