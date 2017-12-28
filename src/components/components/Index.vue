<template>
    <div>
        <h2>📒 Components</h2>
        <div class="components">
            <com v-for="component in components" :key="component.id" :component="component"></com>

            <transition name="fade" v-if="loading">
                <div class="loader__wrapper">
                    <div class="loader"></div>
                </div>
            </transition>
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
    position relative

.components__list
    max-height 100%
    transition max-height 0.25s ease-in-out

.loader__wrapper
    position absolute
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    width 100%
    height 100%
    background rgba(#fff, 0.7)
    // box-shadow 0 2px 15px rgba(#54665F, 25%), 0 15px 35px rgba(#325D55, 10%)
    transition .25s all ease-in-out

h2
    color secondary
    margin-bottom 1.2em

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
