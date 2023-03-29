// pages/competition/signup/signup.ts
Page({
  data: {
    competition: {}, // 当前比赛信息
  },
  
  // 表单提交事件
  onSubmit: function (event) {
    const formData = event.detail.value // 获取表单数据
    console.log('表单提交：', formData)
    
    // 将表单数据发送到后台进行处理
    wx.request({
      url: 'https://example.com/api/signup',
      method: 'POST',
      data: formData,
      success(res) {
        console.log('请求成功', res.data)
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(res) {
        console.log('请求失败', res)
        wx.showToast({
          title: '提交失败，请重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  
  // 表单重置事件
  onReset: function (event) {
    console.log('表单重置')
  },
  onLoad: function (options) {
    const id = parseInt(options.id)
    
    // TODO: 根据比赛 ID 加载比赛信息，并将其保存到 data 对象中
    
    this.setData({
      competition: {
        id, 
        name: '魔方比赛',
        items: [
          {id: '3x3', name: '三阶魔方', fee: 50},
          {id: '4x4', name: '四阶魔方', fee: 80},
          {id: '5x5', name: '五阶魔方', fee: 120},
        ]
      }
    })
  },
})