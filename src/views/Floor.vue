<template>
  <div>
    <l-floor :data="floorList"></l-floor>
    <footer style="height: 700px"></footer>
  </div>
</template>

<script>
import { Floor } from '../../packages/components'
export default {
  components: {
    [Floor.name]: Floor
  },
  data() {
    return {
      floorList: [
        { id: 1, name: 'F1' },
        { id: 2, name: 'F2' },
        { id: 3, name: 'F3' },
        { id: 4, name: 'F4' },
        { id: 5, name: 'F5' },
        { id: 6, name: 'F6' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>