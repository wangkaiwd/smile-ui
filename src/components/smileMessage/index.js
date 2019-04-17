/**
 * Created by wangkai on 2019/4/16
 */
import message from './message';
// 编程式创建Vue组件实例：https://css-tricks.com/creating-vue-js-component-instances-programmatically/
// 可以结合 官网：渲染函数&JSX进行学习：https://cn.vuejs.org/v2/guide/render-function.html#%E5%9F%BA%E7%A1%80
let vm = null;
const mountComponent = (Vue, message, options) => {
  // Vue.extend(options) 使用基础`Vue`构造器，创建一个"子类"。参数是一个包含组件选项的对象
  // 动态装创建组件步骤： 1. 通过options来创建子类  2. 通过new子类得到vue实例
  //                      3. 执行实例的$mount方法进行挂载
  //                      4. 如果$mount执行时没有传参，模板将被渲染为文档之外的元素，
  //                          并且必须使用原生DOM API把它插入文档中
  const { text } = options;
  const Message = Vue.extend(message);
  vm = new Message({
    propsData: options
  });
  vm.$slots.default = [text];
  vm.$mount(); // vm.$mount()会返回实例自身，可以进行链式调用
  document.querySelector('body').appendChild(vm.$el);
};
const plugin = {
  install (Vue) {
    Vue.prototype.$message = (options) => {
      if (vm) { // 创建新实例之前先删除旧有组件和dom
        vm.$destroy();
        vm.$el.remove();
      }
      mountComponent(Vue, message, options);
    };
  }
};

export default plugin;
