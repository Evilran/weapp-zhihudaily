//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    currentData: 0,
    scrollTop: 0,
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    list: [],
    index: 0,
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  loadMore (options) {
    if (this.data.list.length === 0) return
    var that = this
    that.setData({ loading: true })
    wx.request({
      url: 'http://www.test.com:1024/zhihu/before.php',
      data: {
        day: this.data.index+1
      },
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
         that.setData({
           loading: false,
           list: that.data.list.concat([{ header: res.data.date }].concat(res.data.news))
         })
      }
    })
    this.data.index = this.data.index+1
  },
  onLoad (options) {
    let that = this
    wx.request({
      url: 'http://www.test.com:1024/zhihu/today.php',
      headers: {
        'Content-Type': 'application/json'
      },
      success (res) {
         that.setData({
           banner: res.data.banner,
           list: [{ header: res.data.date }].concat(res.data.news)
         })
      }
    })
  }
})
