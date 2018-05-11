import { axiosRq } from '../../util/axios'
export default {
    state: {
        topicList: [], //主题首页
    },
    mutations: {
        GETTOPICLIST(state, res) {
            state.topicList = res
        },
    },
    actions: {
        async getTopicListData({ commit }, { limit }) {
            let res = await axiosRq('GET', 'topics', {
                'limit': limit || 60
            })
            console.log(res);
            if (res) {
                commit('GETTOPICLIST', res)
            }
        }
    }
}