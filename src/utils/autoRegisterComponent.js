/**
 * Created by wangkai on 2019/4/17
 * 组件自动注册方法
 */
/**
 * 将一个字符串首字母转换为大写
 * @param name 需要转换的字符串
 * @returns {string} 转换完成的字符串
 */
const firstLetterToUp = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};

/**
 *将文件路径拆分为目录名和文件名
 * FIXME:目前只支持2级文件，如果继续有3级目录不会支持
 * @param filePath 文件路径
 * @returns {{fileName: *, dirName: *}} 目录名 文件名
 */
const splitFilename = (filePath) => {
  const part1 = filePath.indexOf('/') + 1;
  const part2 = filePath.lastIndexOf('/');
  const extensionIndex = filePath.lastIndexOf('.');
  const fileName = filePath.slice(part2 + 1, extensionIndex);
  const dirName = filePath.slice(part1, part2);
  return { fileName, dirName };
};

/**
 * 自动注册全局Vue组件
 * @param Vue Vue构造函数
 */
const autoRegisterComponent = (Vue) => {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    '../components',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\.vue$/
  );
  // 获取组件配置
  requireComponent.keys().map(filePath => {
    const componentConfig = requireComponent(filePath);
    const { fileName, dirName } = splitFilename(filePath);
    let componentName;
    if (fileName === 'message') {return;}
    if (fileName === 'index') {
      componentName = firstLetterToUp(dirName);
    } else {componentName = `Smile${firstLetterToUp(fileName)}`;}
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

export default autoRegisterComponent;
