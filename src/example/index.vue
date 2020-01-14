<template>
  <div>
    <div v-click-outside="toggleVisible" class="select-warpper">
      <input type="text" class="select-input" @focus="focus">
      <div v-show="is_show_select_option" class="select-option-warpper">
        <ul class="select-option">
          <li
            class="select-option-item"
            v-for="(item, index) in data"
            :key="index"
            @click="handleClick">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ClickOutside } from '../../directives'
export default {
  name: 'LExample',
  data() {
    return {
      value: '',
      is_show_select_option: false,
      data: [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 6 },
        { name: 7 }
      ]
    }
  },
  filters: {},
  directives: {
    ClickOutside
  },
  created() {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    focus() {
      this.is_show_select_option = true
    },
    toggleVisible(event) {
      this.is_show_select_option = false
      console.log(event)
    },
    handleClick() {
      this.is_show_select_option = false
    }
  }
}
</script>

<style lang="scss" scoped>
.select-warpper {
  width: 200px;
  border: 1px solid #eaeaea;
}
.select-option-warpper {
  width: 200px;
  border: 1px solid #eaeaea;
}
</style>