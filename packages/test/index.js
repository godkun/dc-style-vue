// 对外提供对组件的引用，注意组件必须声明 name
import DcTest from './src/test';

// 为组件提供 install 安装方法，供按需引入
DcTest.install = Vue => {
  Vue.component(DcTest.name, DcTest);
};

export default DcTest;
