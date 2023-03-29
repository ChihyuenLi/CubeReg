// pages/competition/list/list.ts
// index.js

Page({
  data: {
    competitionList:  [
      {
        id: 1,
        name: '2022年全国魔方大赛',
        type: '综合',
        date: '2022-08-20',
        location: '北京市海淀区中关村创业大街1号',
        status: 'open'
      },
      {
        id: 2,
        name: '2022年中华益智玩具大赛',
        type: '魔方',
        date: '2022-09-10',
        location: '上海市徐汇区漕河泾开发区',
        status: 'close'
      },
      {
        id: 3,
        name: '2022年中国魔方个人挑战赛',
        type: '单人赛',
        date: '2022-10-01',
        location: '广州市黄埔区科学城',
        status: 'open'
      }
    ] // 比赛列表数据
  },

  onLoad: function () {
    // this.getCompetitionList() // 页面加载时获取比赛列表数据
    const competitionList = require('../../../mock/competitionList')
    this.setData({ competitionList })
  },

  // 获取比赛列表数据
  getCompetitionList: function () {
    wx.request({
      url: 'https://api.example.com/competition/list',
      success: res => {
        if (res.statusCode === 200) {
          this.setData({
            competitionList: res.data
          })
        } else {
          wx.showToast({
            title: '获取比赛列表失败'
          })
        }
      },
      fail: err => {
        wx.showToast({
          title: '获取比赛列表失败'
        })
        console.error(err)
      }
    })
  },

  // 跳转到比赛详情页面
  goToDetail: function (e) {
    const id = e.currentTarget.dataset.competitionId// 获取比赛 ID
    console.log("id",id,e.currentTarget)
    wx.navigateTo({
      url: `/pages/competition/detail/detail?id=${id}`
    })
  }
})
