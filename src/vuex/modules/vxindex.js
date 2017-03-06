import Api from '../../request/api'
import * as types from '../types'

const state = {
    scroll: true,
    itemcon: {
        header:'../static/g1.jpg',
        name:'我的昵称',
        text:'<p>看下这个管用吗？</p>',
        num:23,
        img: [
            '../static/g3.jpg',
            '../static/g6.jpg',
            '../static/g4.jpg',
            '../static/g7.jpg',
            '../static/g5.jpg'
        ]
    },
    findlist: [
        {
            header:'../static/g2.jpg',
            num: 34,
            img: [
                '../static/g1.jpg',
                '../static/g1.jpg',
                '../static/g1.jpg',
                '../static/g1.jpg',
                '../static/g1.jpg'
            ]
        },{
            header:'../static/g5.jpg',
            num: 123,
            img: [
                '../static/g2.jpg',
                '../static/g2.jpg',
                '../static/g2.jpg',
                '../static/g2.jpg',
                '../static/g2.jpg'
            ]
        },{
            header:'../static/g7.jpg',
            num: 456,
            img: [
                '../static/g3.jpg',
                '../static/g3.jpg',
                '../static/g3.jpg',
                '../static/g3.jpg',
                '../static/g3.jpg'
            ]
        },{
            header:'../static/g3.jpg',
            num: 123456,
            img: [
                '../static/g4.jpg',
                '../static/g4.jpg',
                '../static/g4.jpg',
                '../static/g4.jpg',
                '../static/g4.jpg'
            ]
        },{
            header:'../static/g4.jpg',
            num: 22,
            img: [
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg'
            ]
        },{
            header:'../static/g1.jpg',
            num: 77,
            img: [
                '../static/g6.jpg',
                '../static/g6.jpg',
                '../static/g6.jpg',
                '../static/g6.jpg',
                '../static/g6.jpg'
            ]
        },
    ],
    lovestatus: false,
    usercom: [
        {
            title:'我的昵称',
            avator:'../static/g7.jpg',
            text: '这是我的评论内容啊',
        },{
            title:'昵称',
            avator:'../static/g3.jpg',
            text: '这是我的评论内容啊',
        }
    ],
}
const getters={
    /**
     * 修改state数据
     */
    getFindList: state=>state.findlist,
    getItem: state=>state.itemcon,
    getLoveStatus: state=>state.lovestatus,
    getComment: state=>state.usercom,
}
const mutations = {
    /**
     * 修改state，由actions调用
     */
    [types.SET_LOVE_STATUS](state){
        state.lovestatus = !state.lovestatus
    },
    [types.SEND_MY_COMMENT](state,form){
        const newCom={
            avator:'../static/g1.jpg',
            title:'背着蜗牛爬',
            text: form,
        }
        state.usercom.push(newCom)

    },
    [types.GET_FIND_LIST](state){
        const findItem={
            header:'../static/g4.jpg',
            num: 22,
            img: [
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg',
                '../static/g5.jpg'
            ]
        }
        state.findlist.push(findItem)
    },
    [types.GET_SCORLL_STATUS](state, status) {
        state.scroll = status
    }
}
const actions = {
    /**
     * 组件事件，请求http数据,异步
     */
    getItemList({commit},params){
        if(state.scroll){
            commit(types.COM_LOADING_STATUS,true)
            commit(types.GET_SCORLL_STATUS,false)
            // Api.FindList().then(res=>{
            //     commit(types.GET_SCORLL_STATUS,true)
            //     commit(types.COM_LOADING_STATUS,false)
            //     commit(types.GET_FIND_LIST)
            // })
            commit(types.GET_FIND_LIST)
            commit(types.GET_SCORLL_STATUS,true)
            commit(types.COM_LOADING_STATUS,false)
        }
    },
    loveStatus({commit}){
        commit(types.SET_LOVE_STATUS)
    },
    sendComment({commit},form){
        // Api.Post(form).then(res=>{
        //     commit(types.SEND_MY_COMMENT,form)
        //     commit(types.GET_SHOW_MSG,true)
        // })
        commit(types.SEND_MY_COMMENT,form)
        commit(types.GET_SHOW_MSG,true)
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}