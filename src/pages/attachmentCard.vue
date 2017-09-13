<template>
    <div class="attachment-card">
        <div class="list-group">
            <h6 class="list-heading">
                共{{ detailData.attachment_data.length }}个文件
                    <mt-button size="small" plain class='text-primary pull-right '>
                      <svg class="icon" aria-hidden="true" >
                          <use xlink:href="#icon-tuidong"></use>
                      </svg>
                      上传
                    </mt-button>
            </h6>
            <div class="list-body">
            <!-- v-for="(item, idx) in detailData.attachment_data" :key="item.id" -->
              <yc-cell-swipe v-for="(item, idx) in detailData.attachment_data" :key="item.id" :data="item"></yc-cell-swipe>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
  import YcCellSwipe from '../components/YcCellSwipe';
export default {
   props: {
        detailData: {
          type: Object,
          require:true
        }
    },
  components: {
    YcCellSwipe
  }
}
</script>
<style lang="scss" scoped>
    .list-group{
        .list-heading{
                padding: .5rem .75rem;
                font-size: 12px;
                color: rgb(153,153,153);
                line-height: 22px;
        };
         .file-name{
                    margin-bottom: 3px
                }
    }

    .mt5{margin-top: 5px}
</style>
