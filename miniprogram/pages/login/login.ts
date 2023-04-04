// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      "avatarUrl":"../../icon/touxiang.png",
    },
    hasUserInfo: false,
    array: ['选项一', '选项二', '选项三'],
    index: 0
  },
  onChange: function(e) {
    console.log('选中的值为：', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad() {
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
