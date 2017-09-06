<template>
    <div class="drive-card yc-panel hasMgTop">
        <div class="yc-panel-title">
            <img :src="driveData.pic_url"  class="yc-panel-logo" />
            <h4>
                {{ driveData.people_name }}
                <span class="pull-right timeNum">{{ driveData.time }}</span>
                <span class="" >
                    <mt-badge v-if="driveData.status.isOver" size="small" type='error' >申请删除</mt-badge>
                    <mt-badge v-if="driveData.status.isOverTime" size="small" type='error' >已超时</mt-badge>
                </span>
            </h4>
        </div>
        <div class="yc-panel-content">
             <router-link :to="{ name: 'detail', params: {id: driveData.id}}">{{ driveData.content }}</router-link>
        </div>
        <div class="yc-panel-desc">
            目标: {{ driveData.target }}
            <div class="yc-panel-operate">
                <mt-button size="small" plain class='text-muted' v-if="driveData.operateBtn.isNotPass">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  不通过
                </mt-button>
                <mt-button size="small" plain class='text-primary' v-if="driveData.operateBtn.isPass">
                  <svg class="icon" aria-hidden="true" >
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  通过
                </mt-button>
                <mt-button size="small" plain class='text-primary' v-if="driveData.operateBtn.isGood">
                  <svg class="icon" aria-hidden="true" >
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  表扬
                </mt-button>
                <mt-button size="small" plain class='text-primary' v-if="driveData.operateBtn.isPost">
                  <svg class="icon" aria-hidden="true" >
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  提交
                </mt-button>
                <mt-button size="small" plain class='text-muted' v-if="driveData.operateBtn.isOver">
                  <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  申请终止
                </mt-button>
                <mt-button size="small" plain class='text-submit' v-if="driveData.operateBtn.isCheck">
                  <svg class="icon" aria-hidden="true" >
                      <use xlink:href="#icon-tuidong"></use>
                  </svg>
                  提交检查
                </mt-button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            driveData: {
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
        .hasMgTop{
          margin-bottom: 10px;
        }
        .timeNum{
                display: inline-block;
                width: 1rem;
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                font-size: 12px;
                border-radius: 50%;
                color: #fff;
                background: rgb(255,131,131)
        }
</style>
