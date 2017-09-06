<template>
    <div class="cropinfo-card">
        <div class="yc-panel">
            <h5>我的客户<span class="pull-right">A</span></h5>
            <div class="text-center">
                    <img src="../assets/images/logo.png" class="avatar avatar-lger">
                    <p class="mt10 mb10">杭州绑定科技有限公司</p>
                     <p><svg class="icon text-submit me-icon mr5" aria-hidden="true">
                                <use xlink:href="#icon-cloud-disk"></use>
                            </svg>
                           杭州市江干区17号大街2号
                     </p>
            </div>
        </div>
        <mt-cell class="hasMgTop" @click.native="openPopup">
            <h4 slot="title">利益</h4>
            <svg class="icon text-submit me-icon mr5" aria-hidden="true">
                <use xlink:href="#icon-cloud-disk"></use>
            </svg>1385258458
        </mt-cell>
        <mt-cell @click.native="openPopup">
            <h4 slot="title">利益</h4>
            <svg class="icon text-submit me-icon mr5" aria-hidden="true">
                <use xlink:href="#icon-cloud-disk"></use>
            </svg>1385258458
        </mt-cell>
        <div class="yc-cell text-center bor-top-1">
             <mt-button size="small" plain class='text-primary' @click="toAddLinker">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-plus"></use>
                </svg>添加联系人
            </mt-button>
        </div>
        <mt-popup v-model="popupVisible" style="width: 90%">
            <div class="linkerinfo">
                 <dl class="yc-panel">
                       <dt>姓名：</dt>
                       <dd>孙老地</dd>
                       <dt>联系方式：</dt>
                       <dd>1385258458
                            <svg class="icon pull-right" aria-hidden="true">
                                <use xlink:href="#icon-plus"></use>
                            </svg>
                        </dd>
                       <dt>邮箱：</dt>
                       <dd>sunfdsdfsdfj@139.com</dd>
                       <dt>职位：</dt>
                       <dd>设计师</dd>
                </dl>
            </div>
        </mt-popup>
        <div class="yc-panel hasMgTop">
            <h5 class="text-muted mb10">备注</h5>
            <p class="lh22">公司简介公司简介公司简介公司简介公司简介公司简介
公司简介公司简介公司简介公司简介。</p>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data(){
        return {
            popupVisible: false
        }
    },
    methods: {
        toAddLinker(){
            this.$router.push({path:"/addLinker"});
        },
        openPopup(){
            this.popupVisible = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    dt{
        font-size: 12px;
        line-height: 20px;
        color: rgb(153,153,153)
    }
    dd{
        line-height: 30px;
        border-bottom: 1px solid #eee
    }
</style>
