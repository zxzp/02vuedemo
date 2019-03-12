<template>

  <div id="app">
    <input type="text" v-model="infoinput" > <button @click="addData()">点击增加列表</button>

    <h2>列表</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()">{{item.content}}=====<button @click="deleteData(key)">删除</button>
      </li>
    </ul>
    <h2>购物车</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked">{{item.content}}=====<button @click="deleteData(key)">删除</button>
      </li>
    </ul>
    <hr>

    <v-home :msg1="msg"></v-home>
    <hr>


  </div>
</template>


<script>
  import storage from "./model/storage.js"
  import Home from "./components/Home.vue"

  export default {
    data() {
      return {
        msg:"传给home的值",
        infoinput:'',
        list: []

      }
    },
    components:{
      'v-home':Home
    },
    methods: {
      //1、获取文本框输入的值   2、把文本框的值push到list里面
      addData(e) {
        if(this.infoinput){
          this.list.push({
            content:this.infoinput,
            checked:false
          })
        }
      this.infoinput='';
      storage.set('locallist',this.list);
      },
      deleteData(e) {
        this.list.splice(e,1);
        storage.set('locallist',this.list);
      },
      saveList(){storage.set('locallist',this.list);}

  },
  mounted() {                      /*生命周期函数，vue页面一刷新就会触发的方法*/
    var list=storage.get('locallist')
    console.log(list)
    if(list){
      this.list=list
    }
  }
  }

</script>


<style  >






</style>
