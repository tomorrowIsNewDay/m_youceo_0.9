<template>
    <div class="dynamic-card">
      <ul>
          <li v-for="(item, idx) in detailData.dynamic_data" :key="item.id" class="yc-panel withTopBorder">
              <img :src="item.pic_url" class="yc-panel-logo avatar avatar-lg">
              <h4 class="yc-panel-title">{{ item.user_name }}<span class="timer"> {{item.post_time}}</span></h4>
              <p class="job">{{ item.user_depart }}-{{ item.user_job }}</p>
              <p class="text"> {{ item.post_content }}</p>
          </li>
      </ul>
    </div>
</template>
<script type="text/javascript">
export default {
  props: {
        detailData: {
          type: Object,
          require:true
        }
      }
}
</script>
<style lang="scss">
    .yc-panel{
        &.withTopBorder{
            border-top: 1px solid rgb(238,238,238);
        };
        &.withTopBorder:first-child{
            border-top:0
        };
        .yc-panel-title{
            .timer{
                float: right;
                color: rgb(153,153,153);
                font-size: 12px;
            }
        };
        .job{
            padding-left: 2rem;
            color: rgb(153,153,153);
            font-size: 12px;
        };
        .text{
            padding-left:2rem;
            margin-top: 10px;
            font-size:14px;
            line-height: 1rem;
        }
    }
</style>
