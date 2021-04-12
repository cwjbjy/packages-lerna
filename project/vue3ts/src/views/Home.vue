<template>
  <div class="home">
    <button @click="getCont">fetch按钮</button>
    <button @click="connect">websocket连接</button>
    <img alt="Vue logo" src="../assets/logo.png">
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import API from '../service/index'
import HttpClient from 'service'

@Options({
  components: {
    HelloWorld,
    
  },
}) 
export default class Home extends Vue {
  mounted(){
    console.log('HelloWorld',HelloWorld)
  }
  
  getCont(){
    API.getContactList().then(res=>{
      console.log(res)
    })
  };
  connect(){
    const WSInstance = new HttpClient.WSClient('ws://127.0.0.1:3999');
    WSInstance.connect()
  }
}
</script>
