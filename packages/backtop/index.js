import LBacktop from './src/backtop.vue';

LBacktop.install = function(Vue) {
  Vue.component(LBacktop.name, LBacktop);
};

export default LBacktop;
