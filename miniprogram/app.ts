// app.ts

App<IAppOption>({
  globalData: {
    isLogin: false,
  },

  onLaunch() {
    // 展示本地存储能力
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
        console.log(res.code);
        getApp().globalData.isLogin = true
      },
    });
  },

  switchTab(e: any) {
    const index = parseInt(e.currentTarget.dataset.index);
    if (index === this.globalData.currentTab) {
      return;
    }

    this.globalData.currentTab = index;
    wx.navigateTo({ url: `/pages/tab${index}/index` });
  },
});
