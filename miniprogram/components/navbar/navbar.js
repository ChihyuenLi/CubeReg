// navbar.js

Component({
  properties: {
    list: {
      type: Array,
      value: [
        {
          pagePath: '/miniprogram/pages/index/index',
          iconPath: '/assets/images/tab-bar/home.png',
          selectedIconPath: '/assets/images/tab-bar/home-active.png',
          text: '首页'
        },
        {
          pagePath: ' /miniprogram/pages/community/community',
          iconPath: '/assets/images/tab-bar/cart.png',
          selectedIconPath: '/assets/images/tab-bar/cart-active.png',
          text: '社团'
        },
        {
          pagePath: '/miniprogram/pages/competition/list',
          iconPath: '/assets/images/tab-bar/cart.png',
          selectedIconPath: '/assets/images/tab-bar/cart-active.png',
          text: '比赛'
        },
        {
          pagePath: '/miniprogram/pages/mine/mine',
          iconPath: '/assets/images/tab-bar/cart.png',
          selectedIconPath: '/assets/images/tab-bar/cart-active.png',
          text: '我的'
        },
      ]
    }
  },
  created: function () {
    // 获取全局数据中的当前页面路径
    const app = getApp()
    const currentPath = app.globalData.currentPath
    
    // 存储当前页面路径到组件数据中
    this.setData({
      currentPath: currentPath
    })
  },
  methods: {
    onTabBarTap: function (event) {
      const pagePath = event.currentTarget.dataset.pagepath
      const pages = getCurrentPages()
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i]
        if (`/${page.route}` === pagePath) {
          wx.navigateBack({
            delta: pages.length - i - 1
          })
          break
        }
      }
    }
  }
});
