<template>
    <div>
      <button @click="pop(123)">sonbutton</button>
    </div>
</template>

<script>
    export default {
        name: "son",
      data(){
          return{
            title:'this is son page'
          }
      },
      props:['pop']
    }
</script>

<style scoped>

</style>
