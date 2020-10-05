// pages/shopping/shopping.js

const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    goods:[],
    goodcode:''
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true    
      })
      console.log("这里获取用户信息1");
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          
            hasUserInfo: true
          })    
        console.log("这里获取用户信息2");
        }
      })
    }
      /*var that = this;
     
        wx.request({
       
          url: 'http://192.168.142.1:8080/practice/goods.do?mark=list',
         


          dataType: 'json',

          method: "get",

          header: { 'content-type': 'application/json' },

          success: function (res) {
            console.log(res.data);
            res = res.data;
            that.setData({ goods: res.goods });


          },

          fail: function (res) { console.log("失败d"); console.error(res); }

        })*/
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  radiochange:function(e){
console.log(e);
this.setData({goodcode:e.detail.value})
  },
  confirm:function(e){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/practice/goods.do?mark=choice',
      data:  that.data,
      dataType: 'json',
      method: "get",
      header: { 'content-type': 'application/json' },
      success: function (res) {
        res = res.data.good;
        console.log(res);
        var good = JSON.stringify(res);
          wx.navigateTo({
            url: '/pages/shopping/inputinformation/inputinformation?good='+good,
          })
      },
      fail: function (res) { console.log("失败"); }
    })
  },
  Erecord: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/practice/goods.do?mark=record',
      data:{ nickname: that.data.userInfo.nickName},
      dataType: 'json',
      method: "get",
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        res = res.data.record;
        console.log("这里"+res);
       // that.setData({ goods: res.goods });
        var record = JSON.stringify(res);
        wx.navigateTo({
          url: '/pages/shopping/exchangerecord/exchangerecord?record=' + record,
        })
      },
      fail: function (res) { console.log("失败"); }
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
    var that = this;
    wx.request({
      url: 'http://localhost:8080/practice/goods.do?mark=list',
      dataType: 'json',
      method: "get",
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        res = res.data;
        that.setData({ goods: res.goods });
      },
      fail: function (res) { console.log("失败d"); console.error(res); }
    })
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