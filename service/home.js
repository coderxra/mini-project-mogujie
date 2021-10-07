// 封装首页的网络请求
import request from './network.js'

const beseURL = 'http://152.136.185.210:7878/api/hy66'

export function getMultiData() {
    return request({
        url: beseURL + '/home/multidata'
    })
}