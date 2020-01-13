<template>
  <div class="warpper">
    <l-input v-model="value"></l-input>
    <div>{{value}}</div>
  </div>
</template>

<script>
import { Input } from '../../packages/components'
export default {
  components: {
    [Input.name]: Input
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.warpper {
  text-align: center;
}
</style>