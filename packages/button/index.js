import LButton from './src/button';

LButton.install = function(Vue) {
  Vue.component(LButton.name, LButton);
};

export default LButton;
