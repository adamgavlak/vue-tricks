export const getters = {
    components(state) {
        return state.components.entries
    },

    componentsLoading(state) {
        return state.components.loading
    },

    isLastComponentsPage(state) {
        return state.components.current_page === state.components.total_pages
    },

    isFirstComponentsPage(state) {
        return state.components.current_page === 1
    },

    componentsPage(state) {
        return state.components.current_page
    },

    componentsTotalPages(state) {
        return state.components.total_pages
    }
}