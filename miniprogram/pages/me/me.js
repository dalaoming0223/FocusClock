// miniprogram/pages/me/me.js
var _app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    openid: "",
    name: ""
  },

  onGotUserInfo: function (e) {
    const that = this;
    wx.showModal({
      title: '温馨提示',
      content: '此功能需要登录后使用',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.cloud.callFunction({
            name: "login",
            success: res => {
              console.log("云函数调用成功")
              that.setData({
                openid: res.result.openid,
                userinfo: e.detail.userInfo,
                name: e.detail.userInfo.nickName
              })
              that.data.userinfo.openid = that.data.openid
              wx.setStorageSync("userinfo", that.data.userinfo)
            },
            fail: res => {
              console.log("云函数调用失败")
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
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