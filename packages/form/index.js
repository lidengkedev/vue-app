import LForm from './src/form';

LForm.install = function(Vue) {
  Vue.component(LForm.name, LForm);
};

export default LForm;