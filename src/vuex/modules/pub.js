import * as types from '../types'

/**
 * 通用配置
 */
const state = {
    loading: 0,
    msgstatus: '',
    itemTab:[{
        'title':'发现','type':'/','icon':'<i class="icon iconfont icon-discover"></i>'
    },{
        'title':'创建发现','type':'addpage','icon':'<i class="icon iconfont icon-wps-create"></i>'
    },{
        'title':'我的','type':'mypage','icon':'<i class="icon iconfont icon-wo"></i>'
    }],
    select:'/'
}
const getters = {
    loading: state => state.loading,
    itemTab: state => state.itemTab ,
    getSelect: state => state.select,
    getMsgStatus: state=>state.msgstatus

}
const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        if (state.loading == 0 && !status) {
            return;
        }
        state.loading = status ? ++state.loading : --state.loading;
    },
    [types.GET_SELECT](state,select){
        state.select=select
    },
    [types.GET_SHOW_MSG](state){
        state.msgstatus='mint-p'
        setTimeout(()=>{
            state.msgstatus=''
        },1500)
    }
}
const actions = {
    showLoading({commit}){
        commit(types.COM_LOADING_STATUS , true)
        setTimeout(()=> {
            commit(types.COM_LOADING_STATUS , false)
        }, 200);
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}