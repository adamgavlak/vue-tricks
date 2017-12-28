import Axios from 'axios'

let baseURL = "https://api.vue-tricks.com"

if (process.env.NODE_ENV === 'development')
    baseURL = "http://localhost:4000"

if (process.env.NODE_ENV === 'staging')
    baseURL = "https://api.staging.vue-tricks.com"

const api = new Axios.create({
    baseURL: baseURL,
    timeout: 2000
})

export const actions = {
    fetchComponents({ commit }, page = 1) {
        commit('loadingComponents', true)

        api.get('/components', {params: {page: page}}).then(res => {
            commit('assignComponents', res.data)
            commit('loadingComponents', false)
        })
    },

    nextComponentsPage({ dispatch, state }) {
        dispatch('setComponentsPage', state.components.current_page + 1)
    },

    previousComponentsPage({ dispatch, state }) {
        dispatch('setComponentsPage', state.components.current_page - 1)
    },

    setComponentsPage({ dispatch, commit, state }, page) {
        if (page >= 1 && page <= state.components.total_pages) {
            commit('setComponentsPage', page)
            dispatch('fetchComponents', page)
        }
    }
}