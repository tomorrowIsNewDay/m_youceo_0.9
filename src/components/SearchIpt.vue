<template>
  <div id="searchInput">
      <input type="text" name="" :placeholder="placeholderMsg" />
      <svg class="icon fs2" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
      </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props:{
    placeholderMsg:{
      type:String
    }
  }
}
</script>

<style scoped>
    #searchInput{position: relative;}
    input{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        padding-left: 20px;
        border-radius: 100px;
        border:1px solid transparent;
        box-sizing: border-box;
    }
    input:focus{
      outline:0;
      border:1px solid rgb(41,149,237);
    }
    svg{
      position: absolute;
      right: 15px;
      top:50%;
      margin-top: -.5em;
      color: rgb(41,149,237);
    }
</style>
