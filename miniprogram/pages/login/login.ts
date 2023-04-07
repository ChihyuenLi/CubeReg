// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    school_list:[],
    avatarUrl:"../../icon/touxiang.png",
    nickname:"微信名",
    hasUserInfo: false,
    array: ['选项一', '选项二', '选项三'],
    index: 0,
    birthdate:"与身份证相同",
    school:"学校"
  },
  onLoad(e:any){
    const db = wx.cloud.database()
    db.collection('school_database').get({
      success: res=> {
      console.log("success",res.data);
      const schoolList = res.data.map(item=> item.school_name); // 获取 school_name 字段组成的数组

      this.setData({
        school_list: schoolList
      });
     },
     fail(err) {
       console.error(err);
     }
    })    
  },
  onChange: function(e:any) {
    console.log('选中的值为：', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindSchoolPickerChange (e){
    const index = e.detail.value;
    const value = this.data.school_list[index];
    this.setData({
      school: value
    });
  },
  bindDateChange: function(e:any) {
    this.setData({
      birthdate:e.detail.value,
    })
  },
  //用户选中自定义头像的回调
  onChooseAvatar(e: any ) {
    this.setData({
      avatarUrl: e.detail,
    })
  },
  changeNickName(e:any){
    this.setData({
      nickname:e.detail,
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
