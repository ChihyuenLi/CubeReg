// app.ts

App<IAppOption>({
  globalData: {
    isLogin: false,
    currentPath: '' // 用于存储当前页面的路径
  },
  onShow: function (options) {
    // 获取当前页面路径
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const currentPath = `/${currentPage.route}`
    
    // 存储当前页面路径到全局数据中
    this.globalData.currentPath = currentPath
  },
  onLaunch() {
    // 日志和云环境初始化
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    wx.cloud.init({
      env: 'cloud1-9guhrh7s958adb14',
      traceUser: true
    })

    // 登录
    wx.login({
      success: res => {
        getApp().globalData.isLogin = true
      },
    });
  },
  
});
