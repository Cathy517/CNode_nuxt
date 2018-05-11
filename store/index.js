import Vue from 'vue'
import Vuex from 'vuex'
import topic from './modules/topic'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        topic
    }
})

export default store;