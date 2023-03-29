// app.ts

App<IAppOption>({
  globalData: {
    currentTab: 0,
  },

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        console.log(res.code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
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
