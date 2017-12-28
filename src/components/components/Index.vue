<template>
    <div>
        <h2>📒  Components</h2>
        <div class="components">
            <com v-for="component in components" :key="component.id" :component="component"></com>
            <div class="row" v-if="loading">
                <div class="col-12">Loading</div>
            </div>
        </div>

        <pagination></pagination>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Com from './Com'
import Pagination from './Pagination'

export default {
    components: {
        Com, Pagination
    },
    created() {
        this.$store.dispatch('fetchComponents')
    },
    computed: {
        ...mapGetters({
            components: 'components',
            loading: 'componentsLoading'
        })
    }
}
</script>

<style lang="stylus">
primary = #41B883
secondary = #35495E

.components
    width 100%

h2
    color secondary
    margin-bottom 1.2em
</style>
