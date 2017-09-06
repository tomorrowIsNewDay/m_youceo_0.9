<template>
    <div class="add-task">
        <mt-header fixed title="新增任务">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-field placeholder="请输入任务内容" type="textarea" rows="4" v-model="data.content"></mt-field>
        <mt-field label="完成日期" placeholder="请输入完成日期" type="date" v-model="data.complete_data"></mt-field>
        <mt-field label="目标名" placeholder="请输入目标名" v-model="data.target_name"></mt-field>
        <mt-field label="目标值" placeholder="请输入目标值" v-model="data.target_val"></mt-field>
        <div class="yc-cell box-flex">
                <div class="flex-1 text-muted">工作流</div>
                <div class="flex-2"><span class="label-for-workFlow">评审工作流</span></div>
                <div class="flex-1 text-right">
                    <mt-button size="small" plain class='text-primary' @click.native="popubVal.popupVisible4= true">
                          <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-tuidong"></use>
                          </svg>
                    </mt-button>
                </div>
        </div>
        <mt-popup v-model="popubVal.popupVisible4" position="right" class="fullPage" :modal="false">
              <rel-workFlow @on-cancel='popubVal.popupVisible4=false'></rel-workFlow>
        </mt-popup>
        <div class="yc-cell box-flex">
                <div class="flex-1 text-muted">关联</div>
                <div class="flex-2"><img src="../assets/images/logo.png" class="avatar vm"> 国美电器</div>
                <div class="flex-1 text-right">
                    <mt-button size="small" plain class='text-primary' @click.native="popubVal.popupVisible2 = true">
                          <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-tuidong"></use>
                          </svg>
                    </mt-button>
                </div>
        </div>
        <mt-popup v-model="popubVal.popupVisible2" position="right" class="fullPage" :modal="false">
              <rel-custom @on-cancel='popubVal.popupVisible2=false'></rel-custom>
        </mt-popup>
        <div class="yc-cell box-flex">
                <div class="flex-1 text-muted">指派</div>
                <div class="flex-2"><img src="../assets/images/logo.png" class="avatar vm"> 孙玲</div>
                <div class="flex-1 text-right">
                        <mt-button size="small" plain class='text-primary' @click.native="popubVal.popupVisible3 = true">
                          <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-tuidong"></use>
                          </svg>
                        </mt-button>
                </div>
        </div>
        <mt-popup v-model="popubVal.popupVisible3" position="right" class="fullPage" :modal="false">
              <rel-people @on-cancel='popubVal.popupVisible3=false'></rel-people>
        </mt-popup>
         <div class="yc-cell box-flex">
                <div class="flex-1 text-muted">附件</div>
                <div class="flex-2">
                    <svg class="icon text-primary mr10 fs15 vm" aria-hidden="true">
                              <use xlink:href="#icon-pdf"></use>
                    </svg>5
                </div>
                <div class="flex-1 text-right"> ></div>
        </div>
        <div class="yc-cell box-flex">
                <div class="flex-1 text-center">
                    <mt-button size="small" plain class='text-muted' >
                      <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-tuidong"></use>
                      </svg>
                      删除任务
                    </mt-button>
                </div>
                <div class="flex-1 text-center">
                    <mt-button size="small" plain class='text-primary' >
                      <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-tuidong"></use>
                      </svg>
                      复制任务
                    </mt-button>
                </div>
                <div class="flex-1 text-center">
                    <mt-button size="small" plain class='text-primary' >
                      <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-tuidong"></use>
                      </svg>
                      发布任务
                    </mt-button>
                </div>
        </div>
        <p class="msg">未发布的任务自动存为草稿</p>
        <footer-bar :btnData="btnData"></footer-bar>
    </div>
</template>
<script type="text/javascript">
import FooterBar from '../components/FooterBar';
import RelCustom from './relCustom'
import RelPeople from './relPeople'
import RelWorkFlow from './relWorkFlow'
export default {
    data(){
        return {
            searchVal:"",
            popubVal:{
                popupVisible2: false,
                popupVisible3: false,
                popupVisible4: false
            },
            btnData: [{
                "href": "#icon-tuidong",
                "name": "完成",
                "colorClass": "text-muted"
            }],
            data:{
                content:"",
                complete_data:"",
                target_name:"",
                target_val:""

            }
        }
    },
    components: {
         FooterBar,
         RelCustom,
         RelPeople,
         RelWorkFlow
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .add-task{
        padding-top: 48px;
        padding-bottom: 58px;
        .yc-cell{
            border-top: 1px solid rgb(238,238,238);
            .label-for-workFlow{
                display: inline-block;
                padding: 5px 10px;
                line-height: 1;
                color:#fff;
                border-radius: 2px;
                background: rgb(166,215,255)
            }
        }
    }
    .msg{
        margin-top: 1.5rem;
        text-align: center;
        color: rgb(170,170,170)
    }
    .fullPage{
        width: 100%;
        height: 100%
    }
</style>
