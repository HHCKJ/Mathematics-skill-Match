// pages/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'/image/weixin.jpg',
    name:'请登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


   /* var that = this;
    console.log("my.js");
    console.log(app.globalData.userInfo);
    wx.request({
      
     

      url: 'http://192.168.142.1:8080/practice/goods.do?mark=user',



      dataType: 'json',
     // data: { nickname: that.globalData.userInfo.nickName },
      method: "get",

      header: { 'content-type': 'application/json' },

      success: function (res) {
        console.log(res.data);
        res = res.data;
        //that.setData({ globalData.userInfo: res.goods });


      },

      fail: function (res) { console.log("失败d"); console.error(res); }

    })*/

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

  },

  getMyInfo: function (e) {
    console.log(e.detail.userInfo)/*userInfo注意大小写*/
    let info=e.detail.userInfo;
    this.setData({
      name:info.nickName,
      src:info.avatarUrl
    })
  }
})