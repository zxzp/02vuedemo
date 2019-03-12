<template>
  <div>
    {{msg}}
    <hr>
    {{msg1}}
    <hr>
    <son :pop="popup"></son>
  </div>

</template>

<script>
  import Son from './son.vue';
    export default {
        name: "Home",
        data(){
          return{
            msg:"这是home组件里定义的msg"
          }
        },
       components:{
          'son':Son
       },
      methods:{
          popup(val){
            alert("这是home组件的popup方法"+val)
          }
      },
        props:['msg1']

    }
</script>

<style scoped>

</style>
