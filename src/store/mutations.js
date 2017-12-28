export const mutations = {
    assignComponents(state, data) {
        state.components.entries = data.components
        state.components.current_page = data.current_page
        state.components.total_pages = data.total_pages
        state.components.total_entries = data.total_entries
    },

    loadingComponents(state, bool) {
        state.components.loading = bool
    },

    setComponentsPage(state, page) {
        state.components.current_page = page
    }
}