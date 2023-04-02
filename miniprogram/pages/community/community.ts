// pages/community/community.ts

Page({
  data: {
    tags: ['全部', '运动', '文化', '音乐', '科技'],
    tagData: [],
    current: 0,
    keyword: ''
  },  
  onLoad: function () {
    wx.showLoading({ title: '加载中' });
    wx.request({
      url: 'https://example.com/api/clubs',
      success: (res) => {
        let data = res.data;
        let tagData = this.getClubByTag(data, this.data.tags[0]);
        for (let i = 1; i < this.data.tags.length; i++) {
          tagData.push(this.getClubByTag(data, this.data.tags[i]));
        }
        this.setData({ tagData: tagData });
        wx.hideLoading();
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({ title: '网络异常，请重试', icon: 'none' });
      }
    })
  },
  getClubByTag: function (data, tag) {
    return data.filter((item) => {
      return item.tag === tag || tag === '全部';
    })
  },
  onTagClick: function (e) {
    let tag = e.currentTarget.dataset.tag;
    let index = this.data.tags.indexOf(tag);
    if (index === this.data.current) return;
    this.setData({ current: index });
  },
  onInput: function (e) {
    this.setData({ keyword: e.detail.value.trim() });
  },
  onSearch: function () {
    wx.showLoading({ title: '加载中' });
    wx.request({
      url: 'https://example.com/api/clubs',
      data: { keyword: this.data.keyword },
      success: (res) => {
        let data = res.data;
        let tagData = [{ name: '搜索结果', clubs: data }];
        this.setData({ tagData: tagData, current: 0 });
        wx.hideLoading();
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({ title: '网络异常，请重试', icon: 'none' });
      }
    })
  }
})