<template>
  <div class="home">
    <button @click="getCont">按钮</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src
import API from '../service/index'
@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  getCont(){
    API.getContactList().then(res=>{
      console.log(res)
    })
  }
}
</script>
