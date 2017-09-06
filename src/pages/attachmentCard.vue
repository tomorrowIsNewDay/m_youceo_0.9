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
                  <mt-cell-swipe v-for="(item, idx) in detailData.attachment_data" :key="item.id"
                      :right="[
                        {
                          content: '下载',
                          style: { background: 'rgb(41,149,237)', color: '#fff' }
                        },
                        {
                          content: '删除',
                          style: { background: 'rgb(241,241,241)', color: 'rgb(153,153,153)' }
                        }
                      ]">
                        <div slot="title">
                            <svg class="icon text-primary pull-left mr10 fs25" aria-hidden="true">
                              <use xlink:href="#icon-pdf"></use>
                           </svg>
                           <h4 class="file-name">{{ item.file_name }}</h4>
                           <small class="text-muted">{{ item.file_post_time }}</small>
                       </div>
                        <div>
                            <img :src="item.pic_url" class="avatar">
                        </div>
                  </mt-cell-swipe>
                  <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
                      <div class="swipe-wrap">
                        <div class="swipe-box" ref="swipeBox">
                          <div class="pull-right swipe-right">
                                  <img src="../assets/images/logo.png" class="avatar">
                                  <mt-button size="small" plain class='text-primary'>
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-tuidong"></use>
                                      </svg>
                                  </mt-button>
                                  <mt-button size="small" plain class='text-mute'>
                                      <svg class="icon" aria-hidden="true">
                                          <use xlink:href="#icon-tuidong"></use>
                                      </svg>
                                  </mt-button>
                           </div>
                            <div class="swipe-left">
                                <svg class="icon text-primary pull-left mr10 fs25" aria-hidden="true">
                                  <use xlink:href="#icon-pdf"></use>
                                 </svg>
                                <h4 class="file-name">sdf</h4>
                                <small class="text-muted">sdfsdf</small>
                           </div>
                       </div>
                      </div>
                    </v-touch>
            </div>
        </div>
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
    methods:{
      onSwipeLeft: function(ev){
        this.$refs.swipeBox.style.left = -20 +"vw";
      },
      onSwipeRight: function(ev){
        this.$refs.swipeBox.style.left = 0 +"px";
      }
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
    .swipe-wrap{
      position: relative;width: 100vw;overflow: hidden;height: 46px;background: #fff;
      .swipe-box{
        position: absolute;left:0;height: 100%;top: 0;width: 120vw;transition: left .5s ease;padding: 0 .75rem;
        .swipe-right{
              width: 30vw;
        }
      }
    }
</style>
