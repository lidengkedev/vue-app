<template>
  <transition name="message" @after-leave="afterLeave">
    <div v-show="visible" :class="typeClass" :style="stylePosition" role="alert">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LMessage',
  data () {
    return {
      visible: false,
      message: '',
      type: 'info',
      duration: 3000,
      closed: false,
      verticalOffset: 20,
      timer: null
    }
  },
  computed: {
    stylePosition () {
      return {
        'top': `${this.verticalOffset}px`
      }
    },
    typeClass () {
      return ['message-warpper', `message-${this.type}`]
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    afterLeave () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    startTimer () {
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    },
    closeTimer () {
      clearTimeout(this.timer)
    },
    close () {
      this.closed = true
    }
  }
}
</script>

<style scoped>
.message-warpper {
  position: fixed;
  top: 0;
  left: 50%;
  width: 300px;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin-left: -150px;
  background-color: #fff;
}
.message-info {
  background-color: #f8f8f8;
}
.message-warning {
  background-color: #f5f780;
}
.message-success {
  color: #FFF;
  background-color: #27e040;
}
.message-error {
  color: #FFF;
  background-color: #fd6767;
}
/* 动画 */
.message-enter-active {
  transition: all 0.5s ease-in-out;
}
.message-leave-active {
  transition: all 0.5s ease-in-out;
}
.message-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.message-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
</style>
