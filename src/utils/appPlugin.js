/*
	应用的已安装未安装插件工具类
*/

export default {
  // 是否启用
  isStart(bean) {
    return bean.plugin_status === 1;
  },
  // 是否停用
  isStop(bean) {
    return bean.plugin_status === 0;
  },
};
