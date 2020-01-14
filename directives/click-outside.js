// const EventList = []
const EventItem = {}

function onEventItem(event, el, binding) {
  if (el === event || el.contains(event.target)) return
  binding.value(event)
}

/**
 * 绑定元素时的回调
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 */
function bind (el, binding, vnode) {
  EventItem.handler = event => onEventItem(event, el, binding, vnode)
  document.documentElement.addEventListener('click', EventItem.handler, false)
}

/**
 * 插入节点时的回调
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 */
// eslint-disable-next-line
function inserted (el, binding, vnode) {}

/**
 * 更新节点时的回调
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 */
function update (el, binding, vnode) {
  unbind(el, binding, vnode)
  bind(el, binding, vnode)
}

/**
 * 全部更新结束时的回调
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 */
// eslint-disable-next-line
function componentUpdated (el, binding, vnode) {}

/**
 * 解绑元素时的回调
 * @param {*} el 
 * @param {*} binding 
 * @param {*} vnode 
 */
// eslint-disable-next-line
function unbind (el, binding, vnode) {
  document.documentElement.removeEventListener('click', EventItem.handler, false)
  delete EventItem.handler
}

export default {
  bind,
  inserted,
  update,
  componentUpdated,
  unbind
}