<template>
    <div class="crm-card yc-cell border-b_1">
      <v-touch v-on:swipeleft="onSwipeLeft(idx)" v-on:swiperight="onSwipeRight(data.id)" >
        <div class="swipe-wrap">
          <div class="swipe-box" ref="swipeBox">
            <div class="pull-right swipe-right">
              <img :src="data.pic_url" class="avatar vm avatar-lg">
              <mt-button size="small" plain class='text-primary vm' @click.native="down($event)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tuidong"></use>
                </svg>
              </mt-button>
              <mt-button size="small" plain class='text-mute vm'  @click.native="del($event)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tuidong"></use>
                </svg>
              </mt-button>
            </div>
            <div class="swipe-left">
              <svg class="icon text-primary pull-left mr10 fs25 mt5" aria-hidden="true">
                <use xlink:href="#icon-pdf"></use>
              </svg>
              <h4 class="file-name">{{ data.file_name }}</h4>
              <small class="text-muted">{{ data.file_post_time }}</small>
            </div>
          </div>
        </div>
      </v-touch>
    </div>
</template>

<script type="text/javascript">
    export default {
      props: {
          data: {
              type: Object,
              required: true
            }
      },
      methods:{
        down: function(ev){
          console.log(ev.target)
        },
        del: function(ev){
          console.log(ev.target)
        },
        onSwipeLeft: function(idx){
          console.log(idx)
          this.$refs.swipeBox.style.left = -20 +"vw";
        },
        onSwipeRight: function(idx){
          console.log(idx)
          this.$refs.swipeBox.style.left = 0 +"px";
        },
      }
    }
</script>
<style lang="scss" scoped>
  .swipe-wrap{
    position: relative;width: 100vw;overflow: hidden;height: 46px;background: #fff;line-height:46px;
    .swipe-box{
      position: absolute;left:0;height: 100%;top: 0;width: 120vw;transition: left .5s ease;
      .swipe-right{
        width: 34vw;
      }
    }
  }
</style>
