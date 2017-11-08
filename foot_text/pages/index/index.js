//index.js
Page({
  data: {
    img:'../../img/search.png',
    placeholder:'请输入你要搜索的内容',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
     indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    TodayTitle:'今日推荐',
    Todaylist : [{
      id : 1,
      imgUrl: '../../img/1.jpg',
      message : "土豆炒肉丝"
      },
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒肉丝"
      }, {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒鱿鱼"
      },
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒自己"
      },
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒面"
      },
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒肉丝"
      },
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        message: "小敏炒肉丝"
      }
    ]
  },
  onShow : function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    })
  }
})
