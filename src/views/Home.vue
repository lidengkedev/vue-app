<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld v-show="false" msg="Welcome to Your Vue.js App"/>
    <l-input :disabled="true"></l-input>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Input } from '../../packages/components'

export default {
  name: 'home',
  components: {
    HelloWorld,
    [Input.name]: Input
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
