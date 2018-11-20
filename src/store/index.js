import Vue from 'vue'
import Vuex from 'vuex'

import login from './login'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        
    },
    modules: {
        login
    }
})

export default store