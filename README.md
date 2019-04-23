#### 目前问题总结
##### `button`
1. 多种`type`类型的`css`如何优化？
    ![button-type](./shotscreen/button-type.png)
    
##### `input`
1. `v-on v-bind $attrs $listeners`的用法尝试，类似于`react`中的属性扩展:
    ![input](./shotscreen/input-code.png)  
    文档链接: [非`Prop`的特性](https://cn.vuejs.org/v2/guide/components-props.html#%E9%9D%9E-Prop-%E7%9A%84%E7%89%B9%E6%80%A7)
2. 错误提示信息展示：可以传入错误提示文字，直接展示到input框右侧
3. `value`属性存在问题：只能通过`v-model`来绑定才能实现各种功能，`element ui`也是这样做的，但是`ant design`和`iview`可以直接绑定`value`来正常使用
4. 允许清空输入内容也是根据`v-model`绑定来实现的，否则会出现问题

##### `Grid`
1. `padding`不能设置负值，只能使用负`marin`。[文章推荐](https://stackoverflow.com/questions/4973988/why-does-css-not-support-negative-padding)
2. `slot`父子组件通信： 1. 通过`$children`操作子元素 2. 通过`$parent`操作父元素
3. 对应的`flex`属性开启后`css`写法优化：
    ![row-flex](./shotscreen/row-flex.png)
