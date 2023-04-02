// pages/mine/mine.ts

const isLogin = getApp().globalData.isLogin
Page({

  data: {
    userInfo: {},
    avatarUrl: 'path/to/avatar/image.png',
    nickname: '测试用号码',
    wxId: '测试用号码',
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
  goToLoginPage(e){
    console.log("!22");
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  //用户选中自定义头像的回调
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    console.log(avatarUrl);

    this.setData({
      ['userInfo.avatarUrl']: avatarUrl,
    })
  },

  onSettingTap: function () {
    // 处理点击设置按钮的逻辑
    wx.navigateTo({
      url: '/pages/setting/index',
    });
  },

  onHelpTap: function () {
    // 处理点击帮助中心按钮的逻辑
    wx.navigateTo({
      url: '/pages/help/index',
    });
  },

  onFeedbackTap: function () {
    // 处理点击反馈按钮的逻辑
    wx.navigateTo({
      url: '/pages/feedback/index',
    });
  },

  onAboutTap: function () {
    // 处理点击关于我们按钮的逻辑
    wx.navigateTo({
      url: '/pages/about/index',
    });
  }
});
