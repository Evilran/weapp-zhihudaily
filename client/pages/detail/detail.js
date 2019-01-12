//home.js
//请求网络数据，并解析
let wxparse = require("../../wxParse/wxParse.js");
var app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    var that = this;
    wx.request({
      url: 'http://www.test.com:1024/zhihu/get_content.php',
      data: {
        'id': options.id,
        dkheight: 300,
        dkcontent: "Hello world!"
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {

        wxparse.wxParse('dkcontent', 'html', res.data, that, 5);

      }
    })

  }
})