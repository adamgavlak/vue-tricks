import Vue from "vue"
import Vuex from "vuex"

import { actions } from "./actions"
import { getters } from "./getters"
import { mutations } from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        components: {
            entries: [],
            current_page: 1,
            total_pages: 0,
            total_entries: 0,
            loading: false
        }
    },
    actions,
    getters,
    mutations
})