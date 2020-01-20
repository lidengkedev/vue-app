<template>
  <div class="warpper">
    <l-select v-model="value" :options="options"></l-select>
    <l-select v-model="value" :options="options"></l-select>
  </div>
</template>

<script>
import { Select } from '../../packages/components'
export default {
  components: {
    [Select.name]: Select
  },
  data() {
    return {
      value: '',
      options: [
        { label: 'label1', value: 1 },
        { label: 'label2', value: 2 },
        { label: 'label3', value: 3 },
        { label: 'label4', value: 4 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.warpper {
  text-align: center;
}
</style>