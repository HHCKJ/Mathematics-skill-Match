// pages/shopping/inputinformation/inputinformation.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
good:[],
userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var x = JSON.parse(options.good)
    this.setData({ good: x });

    this.setData({ userInfo:app.globalData.userInfo });

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



  formSubmit: function (e) {

    
    var that = this;
    var formdata = e.detail.value; 
    //var formdata = JSON.stringify(e.detail.value); 

    var userINFO = that.data.userInfo;
    var gooD = that.data.good;

    /*var nickname=userINFO.nickname;
    var address=formdata.address;
    var contact=formdate.contact;
    var tel =formdata.tel;

    var fee=gooD.fee;
    var non=gooD.non;
    var name=gooD.name;
    var img=gooD.img;*/

    console.log(gooD);
    console.log(formdata);
    console.log(formdata.address);
    console.log(userINFO.nickName);
    
    var Good = JSON.stringify(gooD);
    /*var userINFO=JSON.stringify(userInfo);*/
      wx.request({

        url: 'http://localhost:8080/practice/goods.do?mark=submit',
        data:{
          x:gooD,
      
          nickname : userINFO.nickName,
          address: formdata.address,
          contact: formdata.contact,
          tel: formdata.tel,

          fee: gooD.fee,
           non : gooD.non,
           name : gooD.name,
           img  :gooD.img


          //formdata,
         
          /*userINFO,
          Good,*/
          //nickname:userInfo[nickName]
        },

        dataType: 'json',

        method: "get",
        header: { 'content-type': 'application/x-www-form-urlencoded' },
       //header: { 'content-type': 'application/json' },

        success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000//持续的时间
          })

          //that.data.connectionMsg =res.data,

        },

        fail: function (res) { console.log("失败"); }

      })
  }
})