<template>
    <div class="me">
        <div class="yc-panel clearfix mt10" @click="toUserInFo">
            <img :src="userData.avatar_url" class="avatar avatar-lger pull-left">
            <div class="userinfo cell" >
                <h2>{{ userData.loginname }}</h2>
                <p>{{ userData.depat }}·{{ userData.job }}</p>
            </div>
        </div>
        <div class="yc-cell mt10" @click="toCropinfo">
              <svg class="icon text-primary me-icon" aria-hidden="true">
                  <use xlink:href="#icon-company"></use>
              </svg>
              <p class="vm dib">企业资料</p>
        </div>
        <div class="yc-cell mt10" @click="toCloudDisk">
              <svg class="icon text-submit me-icon" aria-hidden="true">
                  <use xlink:href="#icon-cloud-disk"></use>
              </svg>
              <p class="vm dib">云盘</p>
        </div>
        <div class="yc-cell bor-t-1" @click="toAddressBook">
              <svg class="icon text-meihong me-icon" aria-hidden="true">
                  <use xlink:href="#icon-mail-list"></use>
              </svg>
              <p class="vm dib">组织通讯录</p>
        </div>
         <div class="yc-cell bor-t-1" @click="toWorkFlow">
              <svg class="icon text-orange me-icon" aria-hidden="true">
                  <use xlink:href="#icon-workflow"></use>
              </svg>
              <p class="vm dib">工作流</p>
        </div>
        <div class="yc-cell mt10" @click="toSet">
              <svg class="icon text-muted me-icon" aria-hidden="true">
                  <use xlink:href="#icon-shezhi"></use>
              </svg>
              <p class="vm dib">设置</p>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex'
    export default {
          computed: {
            ...mapGetters([
                    'userData'
                ])
         },
         methods:{
            toUserInFo(){
                this.$router.push({ name: 'userinfo', params: { loginname: `${this.userData.loginname}` }})
            },
            toCropinfo(){
              this.$router.push({name:"cropinfo"});
            },
            toCloudDisk(){
              this.$router.push({path:"/cloud-disk"});
            },
            toAddressBook(){
              this.$router.push({path:"/address-book"});
            },
            toWorkFlow(){
              this.$router.push({path:"/workFlow"});
            },
            toSet(){
              this.$router.push({path:"/set"});
            }
         }
    }
</script>
<style lang="scss" scoped>
    .mt10{margin-top: .5rem}
    .dib{display: inline-block}
    .text-meihong{color: rgb(186,86,200)}
    .text-orange{color: rgb(219,163,46)}
    .me-icon{
        margin-right: .75rem;
        font-size: 2em;
        vertical-align: middle
    }
    .userinfo{
        padding-left: .75rem;
        line-height: 30px
    }

</style>
