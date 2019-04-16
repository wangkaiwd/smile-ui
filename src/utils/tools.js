/**
 * Created by wangkai on 2019/4/16
 */

/**
 * 获取元素的数据类型
 * @param val ：传入的数据
 * @returns {string}
 */
export const getType = (val) => {
  return toString.call(val).slice(1, -1).split(' ')[1];
};
