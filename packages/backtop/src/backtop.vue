<template>
  <transition name="l-fade-in">
    <div
      v-if="visible"
      class="l-backtop"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      @click.stop="handleClick">
      <slot>
        TOP
      </slot>
    </div>
  </transition>
</template>

<script>
const cubic = value => Math.pow(value, 3)
const easeInOutCubic = value => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2
export default {
  name: 'LBacktop',
  props: {
    // 距离顶部多高的位置隐藏 backtop
    visibilityHeight: {
      type: Number,
      default: 200
    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      el: null,
      container: null,
      visible: false,
      timer: null
    }
  },
  computed: {
    styleRight() {
      return `${this.right}px`
    },
    styleBottom() {
      return `${this.bottom}px`
    }
  },
  mounted() {
    this.init()
    this.container.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    init() {
      this.container = document
      this.el = document.documentElement
    },
    throttle(wait, callback) {
      wait = wait || 100
      const timestamp = Date.now()
      this.timer = setTimeout(() => {
        const last = Date.now() - timestamp
        if (last >= wait) {
          clearTimeout(this.timer)
        } else {
          callback()
        }
      }, wait)
    },
    scrollHandler() {
      this.timer = setTimeout(this.onScroll, 300)
    },
    onScroll() {
      const scrollTop = this.el.scrollTop
      this.visible = scrollTop >= this.visibilityHeight
    },
    scrollToTop() {
      const el = this.el
      const beginTime = Date.now()
      const beginValue = el.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const process = (Date.now() - beginTime) / 500
        console.log([beginTime, beginValue, process, el.scrollTop])
        if (process < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(process))
          rAF(frameFunc)
        } else {
          el.scrollTop = 0
        }
      }
      rAF(frameFunc)
    },
    handleClick(e) {
      this.scrollToTop()
      this.$emit('click', e)
    }
  },
  beforeDestroy() {
    this.container.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme-chalk/src/backtop.scss';
</style>
