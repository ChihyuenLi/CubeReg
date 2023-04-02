// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad() {

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
    // 获取到的avatarUrl（临时地址）：http://tmp/ZENIKXqaUC20a19f3c2fd621b82c7662b952e000d532.jpeg
    console.log(avatarUrl);

    this.setData({
      ['userInfo.avatarUrl']: avatarUrl,
    })
  },
  // 用户修改昵称
  changeNickName(e){
    let name = e.detail.value;
    if(name.length === 0) return;
    this.setData({
      ['userInfo.nickName']: e.detail.value
    })
  }
})
