import Vuex from 'vuex'
import Vue from 'vue'
import pub from './modules/pub'
import vxindex from './modules/vxindex'
import vxadd from './modules/vxadd'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pub,
        vxindex,
        vxadd
    }
})