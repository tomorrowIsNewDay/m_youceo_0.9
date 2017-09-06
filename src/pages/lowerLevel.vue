<template>
    <div class="lower-level">
            <mt-header fixed title="" >
                <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
            </mt-header>
            <div class="yc-panel box-flex bor-top-1">
                <div class="flex-1">
                     <img src="../assets/images/logo.png" class="avatar avatar-lg vm ">
                     <div class="dis-ib vm ml5 lh1">
                         <h5>孙俪个</h5>
                         <p class="text-muted">ui设计师</p>
                     </div>
                </div>
               <div class="flex-1 text-right">
                    本期任务：9/<span class="fs2">20</span>
               </div>
            </div>
            <div class="yc-panel box-flex bor-top-1">
                <div class="flex-1">
                     <img src="../assets/images/logo.png" class="avatar avatar-lg vm ">
                     <div class="dis-ib vm ml5 lh1">
                         <h5>孙俪个</h5>
                         <p class="text-muted">ui设计师</p>
                     </div>
                </div>
               <div class="flex-1 text-right">
                    本期任务：9/<span class="fs2">20</span>
               </div>
            </div>
            <div class="yc-panel box-flex bor-top-1">
                <div class="flex-1">
                     <img src="../assets/images/logo.png" class="avatar avatar-lg vm ">
                     <div class="dis-ib vm ml5 lh1">
                         <h5>孙俪个</h5>
                         <p class="text-muted">ui设计师</p>
                     </div>
                </div>
               <div class="flex-1 text-right">
                    本期任务：9/<span class="fs2">20</span>
               </div>
            </div>
    </div>
</template>
<script type="text/javascript">

</script>
<style lang="scss" scoped>
    .lower-level{
        padding-top:48px
    }
    .bor-top-1{border-top: 1px solid #eee}
    .bor-top-1:first-child{border-top:0}
</style>
