<template>
    <div class="rel-custom">
            <mt-header title="选择关联客户">
              <mt-button  slot="left" @click.native="cancel">取消</mt-button>
              <mt-button  slot="right">完成</mt-button>
            </mt-header>
            <div class="search-ipt-warp">
                <search-ipt :placeholderMsg='placeholderMsg'></search-ipt>
            </div>
            <div class="list-group">
                <h6 class="list-heading">
                共5个文件
                </h6>
                <div class="list-body">
                    <div class="yc-panel">
                        <input type="radio" name="custom" class="pull-right">
                        <img src="../assets/images/logo.png" class="pull-left avatar">
                        <h4>杭州有策管理公司</h4>
                        <p>我的客户</p>
                    </div>
                    <div class="yc-panel">
                        <input type="radio" name="custom" class="pull-right">
                        <img src="../assets/images/logo.png" class="pull-left avatar">
                        <h4>杭州有策管理公司</h4>
                        <p>我的客户</p>
                    </div>
                </div>
            </div>

    </div>
</template>
<script type="text/javascript">
import SearchIpt from '../components/SearchIpt'
export default {
    data(){
        return {
            placeholderMsg:'输入客户名称',
            radioValue:'',
        }
    },
    components:{
        SearchIpt
    },
    methods:{
        cancel:function(){
            this.$emit('on-cancel');
        }
    }
}
</script>
<style lang="scss" scoped>
    .search-ipt-warp{
        padding: .5rem .75rem 0;
        background: rgb(241,241,241)
    }
     .list-group{
        .list-heading{
                padding: .5rem .75rem;
                font-size: 12px;
                color: rgb(153,153,153);
                line-height: 22px;
                background:#f1f1f1;
        };
        .list-body{
                .yc-panel{
                        border-top: 1px solid rgb(238,238,238);
                        &:first-child{
                            border-top: 0
                        };
                        h4,p{
                            padding-left: 1.5rem;
                        };
                        h4{
                            margin-bottom: 5px;
                        };
                        p{
                            font-size: 12px;
                            color: rgb(153,153,153);
                            line-height: 22px
                        }
                }
        }
    }
</style>
