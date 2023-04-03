// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad() {
    // this.getUserProfile()
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', 
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
  // 用户修改昵称
  changeNickName(e){
    let name = e.detail.value;
    if(name.length === 0) return;
    this.setData({
      ['userInfo.nickName']: e.detail.value
    })
  },
  backToMine(){
    console.log("clickbackToMine")
    getApp().globalData.isLogin=true;
    console.log( getApp().globalData.isLogin)
      wx.navigateBack({
        delta:1,
        success: function(res) {
           console.log("返回成功")
        }
      })
  }
})
