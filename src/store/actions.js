import { api } from '../api'

export const actions = {
    fetchComponents({ commit }, page = 1) {
        commit('loadingComponents', true)

        api.get('/components', {params: {page: page}}).then(res => {
            commit('assignComponents', res.data)
            commit('loadingComponents', false)
        }).catch(e => console.log(e))
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
    },

    postSuggestion({ state }, recaptcha) {

    }
}