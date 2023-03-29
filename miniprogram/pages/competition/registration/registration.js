//registration.js
Page({
  data: {
    competitionList: ['3x3单手', '3x3无手限', '4x4标准', '5x5标准'],
    selectedCompetition: null
  },

  selectCompetition(e) {
    const index = e.detail.value;
    const selectedCompetition = this.data.competitionList[index];
    this.setData({ selectedCompetition });
  },

  submitForm(e) {
    const { name, phone } = e.detail.value;
    const competition = this.data.selectedCompetition;
    if (!name || !phone || !competition) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({ title: '正在提交' });
    wx.cloud.callFunction({
      name: 'submit',
      data: { name, phone, competition },
      success: res => {
        console.log(res);
        wx.hideLoading();
        wx.showToast({
          title: '报名成功',
          icon: 'success',
          duration: 2000,
          complete: () => {
            wx.navigateBack({ delta: 1 });
          }
        });
      },
      fail: err => {
        console.error(err);
        wx.hideLoading();
        wx.showToast({ title: '提交失败，请重试', icon: 'none' });
      }
    });
  }
});
