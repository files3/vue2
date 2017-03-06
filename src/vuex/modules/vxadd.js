import * as types from '../types'

const state = {
    loading: false,
    user: {
        img:'../static/g2.jpg',
        title:'我的昵称',
        desc:'你发现你的身边有很多有趣的事了吗？创建一个你发现的事物分享给大家吧'
    }
}
const getters = {
    /**
     * 修改state数据
     */
    getUser: state=>state.user
}
const mutations = {
    /**
     * 同步修改state，由actions调用
     */
    
    
}
const actions = {
    /**
     * 组件事件，请求http数据
     */
}
export default {
    state,
    getters,
    mutations,
    actions
}