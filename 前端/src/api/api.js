import request from '@/utils/request'

const URL_PORT = process.env.VUE_APP_BASE_PORT

//上传
export function upload(params) {
    return request({
        method: "post",
        url: URL_PORT + "goods/upload",
        data: params
    })
}

//注册
export function register(params) {
    return request({
        method: "post",
        url: URL_PORT + "user/save",
        params: params
    })
}

//用户-删除
export function userDel(params) {
    return request({
        method: "post",
        url: URL_PORT + "user/del",
        params: params
    })
}

//登陆
export function login(params) {
    return request({
        method: "post",
        url: URL_PORT + "user/selectAll",
        params: params
    })
}

//商品-列表
export function getGoodsAll(params) {
    return request({
        method: "post",
        url: URL_PORT + "goods/selectAll",
        params: params
    })
}

//商品-单条
export function getGoodsOne(params) {
    return request({
        method: "post",
        url: URL_PORT + "goods/selectOne",
        params: params
    })
}

//商品-保存
export function goodsSave(params) {
    return request({
        method: "post",
        url: URL_PORT + "goods/save",
        params: params
    })
}

//商品-删除
export function goodsdel(params) {
    return request({
        method: "post",
        url: URL_PORT + "goods/del",
        params: params
    })
}

//评论-列表
export function getCommentsAll(params) {
    return request({
        method: "post",
        url: URL_PORT + "comments/selectAll",
        params: params
    })
}


//评论-保存
export function getCommentsSave(params) {
    return request({
        method: "post",
        url: URL_PORT + "comments/save",
        params: params
    })
}

//分类-列表
export function getCateAll(params) {
    return request({
        method: "post",
        url: URL_PORT + "cate/selectAll",
        params: params
    })
}


//分类-保存
export function getCateSave(params) {
    return request({
        method: "post",
        url: URL_PORT + "cate/save",
        params: params
    })
}

//分类-删除
export function getCateDel(params) {
    return request({
        method: "post",
        url: URL_PORT + "cate/del",
        params: params
    })
}

//订单-列表
export function getOrdersAll(params) {
    return request({
        method: "post",
        url: URL_PORT + "orders/selectAll",
        params: params
    })
}


//订单-保存
export function getOrdersSave(params) {
    return request({
        method: "post",
        url: URL_PORT + "orders/save",
        params: params
    })
}

//订单-删除
export function getOrdersdel(params) {
    return request({
        method: "post",
        url: URL_PORT + "orders/del",
        params: params
    })
}


