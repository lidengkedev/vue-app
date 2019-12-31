import LLoading from './src/loading';

LLoading.install = function(Vue) {
  Vue.component(LLoading.name, LLoading);
};

export default LLoading;