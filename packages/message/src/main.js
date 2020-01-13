import Vue from 'vue'
import LMessage from './message.vue'

let MessageConstructor = Vue.extend(LMessage)

let instance
// const instances = []
let seed = 1
let zIndex = 2000

const Message = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  instance = new MessageConstructor({
    data: options
  })
  const verticalOffset = options.offset || 20
  instance.id = 'message-' + seed++
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.verticalOffset = verticalOffset
  instance.visible = true
  instance.$el.style.zIndex = zIndex++
  return instance
}

;['info', 'warning', 'success', 'error'].forEach(function (type) {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
