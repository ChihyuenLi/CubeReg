// pages/mine/mine.ts
Page({
  data: {
    user: {
      avatar: 'path/to/avatar/image.png',
      nickname: 'lizhiyuan',
      info: '测试用号码'
    },
    records: [
      {
        name: '比赛名称1',
        time: '2022-01-01',
        fee: '100元',
        status: '已报名'
      },
      {
        name: '比赛名称2',
        time: '2022-02-01',
        fee: '200元',
        status: '已取消'
      },
      {
        name: '比赛名称3',
        time: '2022-03-01',
        fee: '300元',
        status: '未支付'
      }
    ]
  },

  onRecordTap: function(event) {
    // 处理点击卡片的逻辑
    var recordId = event.currentTarget.dataset.recordId;
    wx.navigateTo({
      url: '/pages/record/detail?id=' + recordId,
    });
  },

  onSettingTap: function() {
    // 处理点击设置按钮的逻辑
    wx.navigateTo({
      url: '/pages/setting/index',
    });
  },

  onHelpTap: function() {
    // 处理点击帮助中心按钮的逻辑
    wx.navigateTo({
      url: '/pages/help/index',
    });
  },

  onFeedbackTap: function() {
    // 处理点击反馈按钮的逻辑
    wx.navigateTo({
      url: '/pages/feedback/index',
    });
  },

  onAboutTap: function() {
    // 处理点击关于我们按钮的逻辑
    wx.navigateTo({
      url: '/pages/about/index',
    });
  }
});
