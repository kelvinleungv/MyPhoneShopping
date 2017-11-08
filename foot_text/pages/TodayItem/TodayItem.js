// TodayItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like:'点赞',
    save:'收藏',
    detail:{
      title: '香煎辣排骨',
      tou:'kelvin',
      like:'959',
      save:'8888',
      foodText: '排骨绝对是人见人爱的美味佳肴，丰富的蛋白质、维生素以及骨胶原深受到女性的青睐，不管是红烧，糖醋还是清炒，味道都很赞。',
      d:'烹饪难度：',
      t:'烹饪时间：',
      foodGrade: '一般',
      foodTime: '60分钟',
      foodtitle:'————食材清单————',
      foodlist:[
      {
        name: '辣花生',
        ke:'50g'
      },
      {
        name: '盐',
        ke: '50g'
      },
      {
        name: '料酒',
        ke: '50g'
      },
      {
        name: '生抽',
        ke: '50g'
      },
      {
        name: '排骨',
        ke: '50g'
      },
      {
        name: '黑胡椒',
        ke: '50g'
      },
      {
        name: '姜蒜',
        ke: '50g'
      }],
      dotitle:'————做法步骤————',
      dolist:[
        {
          id: '1',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '2',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '3',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '4',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '5',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '6',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
        {
          id: '7',
          content: '排骨切段，放入锅中焯水撇去浮沫'
        },
      ],
      food_pic:'  ————图片分享————',
      shareimg: [
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png',
        '../../img/food.png'
        
      ],
      tips:'————生活小窍门————',
      tipContent: '家就安静安静假假按揭啊家就安静安静假假按揭啊家就安静安静假假按揭啊家'
    }
     

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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