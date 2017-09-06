<template>
    <div class="rel-custom">
            <mt-header title="选择指派对象">
              <mt-button  slot="left" @click.native="cancel">取消</mt-button>
              <mt-button  slot="right">完成</mt-button>
            </mt-header>
            <div class="search-ipt-warp">
                <search-ipt :placeholderMsg='placeholderMsg'></search-ipt>
            </div>
            <div class="list-group">
                <h6 class="list-heading">
                您可以指派的员工
                </h6>
                <div class="list-body">
                    <div class="yc-cell inline-box">
                        <span class="inline-1 ">
                            <img src="../assets/images/logo.png" class="avatar avatar-lg vm">
                        </span>
                        <h4 class="inline-4">孙灵感</h4>
                        <label class="inline-1 text-right"><input type="radio" name="custom"></label>
                    </div>
                    <div class="yc-cell inline-box">
                        <span class="inline-1 ">
                            <img src="../assets/images/logo.png" class="avatar avatar-lg vm">
                        </span>
                        <h4 class="inline-4">孙灵感</h4>
                        <label class="inline-1 text-right"><input type="radio" name="custom"></label>
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
            placeholderMsg:'输入员工姓名',
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
            .yc-cell{
                         border-top: 1px solid rgb(238,238,238);
                        &:first-child{
                            border-top: 0
                        };
            }
        }
    }
</style>
