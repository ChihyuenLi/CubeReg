// navbar.js

Component({
  data: {
    navList: [
      { icon: '/images/home.png', title: '首页' },
      { icon: '/images/event.png', title: '赛事' },
      { icon: '/images/club.png', title: '社团' },
      { icon: '/images/user.png', title: '我的' },
    ],
  },

  methods: {
    getNavList() {
      // 调用后台 API 获取导航项数据
    },

    navItemClick(e) {
      const index = e.currentTarget.dataset.index;
      // 处理导航项的点击事件
    },
  },
});
