<template>
    <div class="pagination" v-if="totalPages > 1">
        <div class="pagination__meta" >
            Page <span v-text="currentPage"></span> of <span v-text="totalPages"></span>
        </div>
        <div class="pagination__btns">
            <button @click="previousPage" :disabled="isFirstPage">←</button>
            <button v-for="page in totalPages"
                    :key="page"
                    v-text="page"
                    :disabled="page == currentPage"
                    @click="setPage(page)"
                    v-if="page >= currentPage - 2 && page <= currentPage + 2">
            </button>
            <button @click="nextPage" :disabled="isLastPage">→</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            components: 'components',
            loading: 'componentsLoading',
            isFirstPage: 'isFirstComponentsPage',
            isLastPage: 'isLastComponentsPage',
            currentPage: 'componentsPage',
            totalPages: 'componentsTotalPages'
        })
    },
    methods: {
        ...mapActions({
            nextPage: 'nextComponentsPage',
            previousPage: 'previousComponentsPage',
            setPage: 'setComponentsPage'
        })
    }
}
</script>

<style lang="stylus">
.pagination
    display flex
    justify-content space-between
</style>
