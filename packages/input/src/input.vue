<template>
  <div>
    <!-- 
      输入框：
      1. 支持双向绑定
      2. 支持密码显示隐藏
      3. 支持 change
      4. 支持 focus
      5. 支持 blur
      6. 支持 type ['text', 'password', 'url', 'number', 'search', 'hidden', 'color']
      7. 支持 placeholder
     -->
    <input
      class="l-input"
      v-bind="$attrs"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      @input="input"
      @focus="focus"
      @blur="blur"
      @change="change">
    <i v-if="showPassword" class="icon-right" @click="handleShowPassword">icon</i>
  </div>
</template>

<script>
export default {
  name: 'LInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value)
    },
    focus(event) {
      this.$emit('focus', event.target.value)
    },
    blur() {
      this.$emit('blur')
    },
    change(event) {
      this.$emit('change', event.target.value)
    },
    handleShowPassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/src/index';
</style>
