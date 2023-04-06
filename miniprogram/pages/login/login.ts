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
    index: 0,
    date:"与身份证相同"
  },
  onChange: function(e:any) {
    console.log('选中的值为：', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  //用户选中自定义头像的回调
  onChooseAvatar(e: any ) {
    const {
      avatarUrl
    } = e.detail

    console.log(avatarUrl);

    this.setData({
      ['userInfo.avatarUrl']: avatarUrl,
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
