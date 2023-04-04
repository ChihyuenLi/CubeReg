// pages/mine/mine.ts

Page({
  data: {
    isLogin :  getApp().globalData.isLogin,
    userInfo: {
      avatarUrl: '../../icon/touxiang.png',
      nickName: '李致远',
      realName:'段位：N1',
      school:'江北新区浦口实验小学',
      grade:'五年级',
      class:'1班'
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
  onLoad(){
    console.log("onload")
    // console.log(this.data.userInfo)
  },
  onShow(){
     this.setData({
       isLogin:getApp().globalData.isLogin,
     }),
     console.log("onshow after",this.data.isLogin)
  },

  goToLoginPage(e){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          userInfo: {
            nickname: res.userInfo.nickName,
            avatarUrl:res.userInfo.avatarUrl
          },
          hasUserInfo: true,
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
})
