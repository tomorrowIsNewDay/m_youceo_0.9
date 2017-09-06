<template>
    <div class="cloud-disk">
        <mt-header fixed title="云盘">
            <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
        </mt-header>
        <mt-navbar v-model="data.selected">
              <mt-tab-item id="workDoc">工作文档</mt-tab-item>
              <mt-tab-item id="share">共享云盘</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="data.selected">
              <mt-tab-container-item id="workDoc">
                <div class="yc-panel bg-default"><search-ipt></search-ipt></div>
                <div class="yc-panel clearfix bor-top-1">
                    <svg class="icon fs2 text-folder pull-left mr10" aria-hidden="true">
                      <use xlink:href="#icon-pdf"></use>
                    </svg>
                    <div class="cell">
                        <h5>个人任务文件存档</h5>
                        <p class="yc-panel-desc">2016-12-11</p>
                    </div>
                </div>
                <div class="yc-panel clearfix bor-top-1">
                    <svg class="icon fs2 text-folder pull-left mr10" aria-hidden="true">
                      <use xlink:href="#icon-pdf"></use>
                    </svg>
                    <div class="cell">
                        <h5>个人任务文件存档</h5>
                        <p class="yc-panel-desc">2016-12-11</p>
                    </div>
                </div>
                <div class="yc-panel clearfix bor-top-1">
                    <svg class="icon fs2 text-folder pull-left mr10" aria-hidden="true">
                      <use xlink:href="#icon-pdf"></use>
                    </svg>
                    <div class="cell">
                        <h5>个人任务文件存档</h5>
                        <p class="yc-panel-desc">2016-12-11</p>
                    </div>
                </div>
              </mt-tab-container-item>
              <mt-tab-container-item id="share">
                    <div class="yc-panel bg-default inline-box">
                        <search-ipt  class="inline-5"></search-ipt>
                        <span class="inline-1 text-right" @click="popupVisible1=true">
                            <svg class="icon fs2 text-primary" aria-hidden="true" style="widht:100px">
                                <use xlink:href="#icon-pdf"></use>
                            </svg>
                        </span>
                    </div>
                    <div class="yc-panel clearfix bor-top-1">
                        <input type="radio" class="pull-right radio" name="file">
                        <svg class="icon fs2 text-folder pull-left mr10" aria-hidden="true">
                          <use xlink:href="#icon-pdf"></use>
                        </svg>
                        <div class="cell">
                            <h5>个人任务文件存档</h5>
                            <p class="yc-panel-desc">2016-12-11</p>
                        </div>
                    </div>
                    <div class="yc-panel clearfix bor-top-1">
                        <input type="radio" class="pull-right radio" name="file">
                        <svg class="icon fs2 text-folder pull-left mr10" aria-hidden="true">
                          <use xlink:href="#icon-pdf"></use>
                        </svg>
                        <div class="cell">
                            <h5>个人任务文件存档</h5>
                            <p class="yc-panel-desc">2016-12-11</p>
                        </div>
                    </div>
                    <footer-bar :btnData="btnData1" @add-handler="handler"></footer-bar>
                    <mt-popup v-model="popupVisible1" style="width: 90%">
                        <mt-field class="newName_ipt" placeholder="请输入文件夹名称" type="text" v-model="newName"></mt-field>
                        <p class="text-center newFolder_btn"><mt-button type="primary" size="small">确定</mt-button></p>
                    </mt-popup>
                    <mt-popup v-model="popupVisible" style="width: 90%">
                        <mt-cell title="重命名"></mt-cell>
                        <mt-cell title="移动到"></mt-cell>
                        <mt-cell title="复制文档"></mt-cell>
                    </mt-popup>
              </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script type="text/javascript">
import SearchIpt from '../components/SearchIpt.vue';
import FooterBar from '../components/FooterBar';
export default {
    data(){
        return {
            data: {
                selected: 'workDoc'
            },
            popupVisible: false,
            popupVisible1: false,
            newName:"",
            btnData1:[{
                        "href": "#icon-tuidong",
                        "name": "删除文档",
                        "colorClass": "text-muted"
                },{
                        "href": "#icon-tuidong",
                        "name": "下载文档",
                        "colorClass": "text-primary"
                },{
                        "href": "#icon-tuidong",
                        "name": "更多操作",
                        "colorClass": "text-muted"
                }]
        }
    },
    methods:{
        handler(el){
            switch(el) {
                case "更多操作":
                        this.popupVisible = true;
                        break;
                case "删除文档":
                        alert("delete文档");
                        break;
                default:
                        alert("下载文档");
                        break;
           }
        }
    },
    components:{
        SearchIpt,
        FooterBar
    }
}
</script>
<style lang="scss" scoped>
    .text-folder{color: rgb(235,196,22)}
    .cloud-disk{
            padding-top: 48px;
        .radio{
            margin-top:12px
        };
        .newFolder_btn{
            padding-bottom: 10px;
            background-color: #fff;
            .mint-button--small{
              height: 26px;
              padding: 3px 15px;
            }
        }
    }
    .newName_ipt{
        .mint-field-core{
            border-bottom: 1px solid rgb(41,149,237)
        }
    }
</style>
