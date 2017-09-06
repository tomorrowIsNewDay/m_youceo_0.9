<template>
  <div class="footer-bar box-flex">
        <div class="flex-1" v-for="(item, idx) in btnData" >
            <mt-button size="small" plain :class='item.colorClass' @click="hander(item.name)">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="item.href"></use>
                </svg>
                {{ item.name }}
            </mt-button>
        </div>
  </div>
</template>
<script type="text/javascript">
  export default {
      props: {
        btnData: {
          type: Array,
          require: true
        }
      },
      methods: {
        hander: function(val){
          this.$emit("add-handler",val);
        }
      },
      data(){
        return {
        }
      }
    }

</script>
<style lang="scss" scoped>
  .footer-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    background: #fff;
    box-shadow: 0 -1px 1px rgba(161,161,161,.5);
    .flex-1{
      text-align: center
    }
  }
</style>
