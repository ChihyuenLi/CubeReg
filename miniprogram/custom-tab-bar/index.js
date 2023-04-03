Page({
  data: {
    current: 'home',
    list: [{
      pagePath: "/miniprogram/pages/index/index",
      text: "首页",
      status: 'home',
      iconPath: 'homepage',
      selectedIconPath: 'homepage_fill',
    },
    {
      pagePath: "/miniprogram/pages/community/community",
      text: "社团",
      status: 'community',
      iconPath: 'interactive',
      selectedIconPath: 'interactive_fill'
    }, {
      pagePath: "/miniprogram/pages/competition/list",
      text: "比赛",
      status: 'competition',
      iconPath: 'interactive',
      selectedIconPath: 'interactive_fill'
    },
    {
      pagePath: "/miniprogram/pages/mine/mine",
      text: "我的",
      status: 'mine',
      iconPath: 'group',
      selectedIconPath: 'group_fill'
    }
    ]
  },

  handleChange({ detail }) {
    console.log(detail)
    let index = detail.key;
    let url = "/miniprograme/pages/"+index+"/"+index;
    console.log(url)
    this.setData({
      current: index
    }),
    wx.navigateTo({
      url: url,
    })
  },
});
