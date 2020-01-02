<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-show="false" msg="Welcome to Your Vue.js App"/>
    <l-input :disabled="false"></l-input>
    <div style="height: 2000px">
      <l-backtop></l-backtop>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Input, Backtop } from '../../packages/components'

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Input.name]: Input,
    [Backtop.name]: Backtop
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    window.app = this
  }
}
</script>
