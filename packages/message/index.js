import LMessage from './src/message';

LMessage.install = function(Vue) {
  Vue.component(LMessage.name, LMessage);
};

export default LMessage;