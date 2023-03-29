import competitionList from '../../../mock/competitionList'

Page({
  data: {
    competition: null // 比赛详情数据
  },

  onLoad: function (options) {
    const id = parseInt(options.id) // 获取比赛 ID
    const competition = competitionList.find(item => item.id === id) // 查找对应的比赛项
    this.setData({ competition })
  },
    // 跳转到报名页面
    goToSignup: function (event) {
      const competitionId = this.data.competition.id // 获取比赛 ID
      
      wx.navigateTo({
        url: `/pages/competition/signup/signup?id=${competitionId}`
      })
    },
})

