import LTable from './src/table';

LTable.install = function(Vue) {
  Vue.component(LTable.name, LTable);
};

export default LTable;