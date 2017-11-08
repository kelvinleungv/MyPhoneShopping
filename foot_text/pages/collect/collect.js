// collect.js
var app = getApp()
Page({
  data: {
    userInfo:[],
    save:[
      {
        id: 1,
        imgUrl: '../../img/1.jpg',
        title: '西红柿炖牛腩',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '小芊',
        save: 888,
        like: 999
      },
      {
        id: 2,
        imgUrl: '../../img/1.jpg',
        title: '西红柿炖牛腩2',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '小芊',
        save: 888,
        like: 999
      },
      {
        id: 3,
        imgUrl: '../../img/1.jpg',
        title: '西红柿炖牛腩3',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '小芊',
        save: 888,
        like: 999
      },
      {
        id: 4,
        imgUrl: '../../img/1.jpg',
        title: '西红柿炖牛腩4',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '小芊',
        save: 888,
        like: 999
      },
      {
        id: 5,
        imgUrl: '../../img/1.jpg',
        title: '西红柿炖牛腩2',
        material: '牛腩 西红柿 土豆 胡萝卜',
        author: '小芊',
        save: 888,
        like: 999
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})