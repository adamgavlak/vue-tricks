<template>
    <div class="pagination" v-if="totalPages > 1">
        <div class="row">
            <div class="col-xs-12 center-xs pagination__btns">
                <button @click="previousPage" :disabled="isFirstPage" class="page__link">←</button><button v-for="page in totalPages"
                        :key="page"
                        v-text="page"
                        :disabled="page == currentPage"
                        @click="setPage(page)"
                        v-if="page >= currentPage - 2 && page <= currentPage + 2"
                        class="page__link" :class="{active: (page == currentPage)}">
                </button><button @click="nextPage" :disabled="isLastPage" class="page__link">→</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
primary = #41B883

.pagination
    margin-top 2.5em

.page__link
    background none
    padding .5em .75em
    border 1px solid #dee2e6
    color primary
    cursor pointer

    &:hover
        background #e9ecef

    &:not(:first-child)
        border-left: none

    &:first-child
        border-top-left-radius 4px
        border-bottom-left-radius 4px

    &:last-child
        border-top-right-radius 4px
        border-bottom-right-radius 4px

    &[disabled]
        color #868e96
        cursor auto

        &:not(.active):hover
            background none

    &.active
        background primary
        color #fff
</style>
