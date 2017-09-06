<template>
    <div class="address-book">
        <mt-header fixed title="通讯录">
            <mt-button icon="back" @click="$router.go(-1)" slot="left">返回</mt-button>
            <router-link to="/addClerk" slot="right">
              新增
            </router-link>
        </mt-header>
        <mt-cell title="按部门查看" v-if="isDept" @click.native="isDept=false" >></mt-cell>
        <mt-cell title="按拼音查看" v-else @click.native="isDept=true">></mt-cell>
        <div class="yc-panel bg-default"><search-ipt :placeholderMsg="msg"></search-ipt></div>
        <mt-index-list v-if="isDept">
          <mt-index-section index="A">
            <mt-cell title="Aaron" value="设计师"></mt-cell>
            <mt-cell title="Alden" value="设计师"></mt-cell>
            <mt-cell title="Austin" value="设计师"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="Baldwin" value="设计师"></mt-cell>
            <mt-cell title="Braden" value="设计师"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="Baldwin" value="设计师"></mt-cell>
            <mt-cell title="Braden" value="设计师"></mt-cell>
          </mt-index-section>
           <mt-index-section index="D">
            <mt-cell title="Baldwin" value="设计师"></mt-cell>
            <mt-cell title="Braden" value="设计师"></mt-cell>
          </mt-index-section>
           <mt-index-section index="E">
            <mt-cell title="Baldwin" value="设计师"></mt-cell>
            <mt-cell title="Braden" value="设计师"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="Zack" value="设计师"></mt-cell>
            <mt-cell title="Zane" value="设计师"></mt-cell>
          </mt-index-section>
        </mt-index-list>
        <div v-else>
            <div class="dropdowm hasMgBottom">
                <div class="yc-cell inline-box" ref="dropBtn" @click="isDrop=!isDrop">
                    <div class="inline-3">
                        设计部
                    </div>
                    <div class="inline-3 text-right">
                        12人
                    </div>
                </div>
                <ul class="dropdowm-menu" v-show="isDrop">
                    <li class="yc-cell inline-box">
                        <div class="inline-3">
                            张是
                        </div>
                        <div class="inline-3 text-right">
                            设计师
                        </div>
                    </li>
                    <li class="yc-cell inline-box">
                        <div class="inline-3">
                            忘掉
                        </div>
                        <div class="inline-3 text-right">
                            设计师
                        </div>
                    </li>
                </ul>
            </div>
            <div class="dropdowm hasMgBottom">
                <div class="yc-cell inline-box" ref="dropBtn" @click="isDrop1=!isDrop1">
                    <div class="inline-3">
                        设计部
                    </div>
                    <div class="inline-3 text-right">
                        12人
                    </div>
                </div>
                <ul class="dropdowm-menu" v-show="isDrop1">
                    <li class="yc-cell inline-box">
                        <div class="inline-3">
                            张是
                        </div>
                        <div class="inline-3 text-right">
                            设计师
                        </div>
                    </li>
                    <li class="yc-cell inline-box">
                        <div class="inline-3">
                            忘掉
                        </div>
                        <div class="inline-3 text-right">
                            设计师
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import SearchIpt from '../components/SearchIpt.vue';
export default {
    data(){
        return {
            msg: "请输入姓名或部门",
            // 切换显示模式
            isDept: true,
            isDrop: false,
            isDrop1: false,

        }
    },
    methods:{
    },
    components:{
        SearchIpt
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
    .address-book{
        padding-top: 48px;
        .dropdowm-menu{
            // display: none;
            border-top: 1px solid rgb(241,241,241)
        }
    }
</style>
