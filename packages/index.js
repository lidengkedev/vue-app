import Button from './button/index.js';
import Dialog from './dialog/index.js';
import Form from './form/index.js';
import Input from './input/index.js';
import Loading from './loading/index.js';
import Message from './message/index.js';
import Table from './table/index.js';

const components = [
  Button,
  Dialog,
  Form,
  Input,
  Table
];

const install = function(Vue) {
  components.forEach(item => {
    Vue.component(item.name, item);
  })
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$message = Message;
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.1.0',
  install,
  locale: null,
  i18n: null,
  Button,
  Dialog,
  Form,
  Input,
  Loading,
  Message,
  Table
};