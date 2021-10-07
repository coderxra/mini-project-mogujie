// pages/home/home.js
import {getMultiData} from '../../service/home.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners: [],
        recommends: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 请求轮播图以及推荐数据
        getMultiData().then( res => {
            // console.log(res);
            // 取出轮播图和推荐的数据
            const banners = res.data.data.banner.list     // 轮播图
            const recommends = res.data.data.recommend.list      // 推荐
            // console.log(banners, recommend);

            // 将banners和recommend放入data中
            this.setData({
                banners: banners,
                recommends: recommends
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