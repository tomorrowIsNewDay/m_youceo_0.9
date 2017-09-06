<template>
    <div class="detail-card">
        <h4 class="title">
            <img :src="detailData.pic_url" class="avatar">
            {{detailData.name}}
        </h4>
        <p class="content">
            {{detailData.content}}
        </p>
        <div class="yc-cell box-flex">
            <span class="flex-1 text-muted">完成日期</span>
            <span class="flex-2">{{detailData.finish_date_str}}</span>
            <span class="flex-1 text-right">{{detailData.remaining_time}}</span>
        </div>
        <div class="yc-cell box-flex">
            <span class="flex-1 text-muted">目标名称</span>
            <span class="flex-3">{{detailData.target_name}}</span>
        </div>
        <div class="yc-cell box-flex">
            <span class="flex-1 text-muted">目标名称</span>
            <span class="flex-3">{{detailData.target_val}}</span>
        </div>
        <div class="yc-cell box-flex">
            <span class="flex-1 text-muted">关联</span>
            <span class="flex-3">
                <img :src="detailData.relevance.pic_url" class="avatar"> {{detailData.relevance.name}}
            </span>
        </div>
        <div class="form-warp">
            <mt-field label="完成值" placeholder="请输入完成值" v-model="doneVal"></mt-field>
            <mt-field label="备注" placeholder="请输入备注" v-model="ps"></mt-field>
        </div>
        <mt-button size="small" plain class='text-primary'>
          <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icon-plus"></use>
          </svg>
          添加责任部门
        </mt-button>
    </div>
</template>
<script type="text/javascript">
export default {
     props: {
        detailData: {
          type: Object,
          require:true
        }
      },
    data(){
        return {
            doneVal: '',
            ps:''
        }
    },

}
</script>
<style lang="scss" scoped>
    .title{
        padding:0 .75rem;
        height: 1.6rem;
        line-height: 1.6rem;
        background: #fff;
    }
    .avatar{vertical-align: middle}
    .content{
        padding:.55rem .75rem;
        line-height: 22px;
        font-size: 14px;
        color: rgb(51,51,51);
        word-wrap: break-word;
        background-color: rgb(246,250,254)
    }
    .form-warp{
        margin: 10px 0 15px 0;
        .mint-field{
            border-top: 1px solid rgb(238,238,238)
        };
        .mint-field:first-child{
            border-top: 0
        }
    }
</style>
