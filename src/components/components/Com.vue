<template>
  <div class="row middle-xs">
    <div class="col-md-3 col-xs-12">
        <div v-text="component.name"></div>
    </div>
    <div class="col-md-5 col-xs-12">
        <div v-text="component.description"></div>
    </div>

    <div class="col-md-2 col-xs-6 end-xs">
        <router-link :to="'/compontents/tagged/' + tag.slug" v-for="tag in component.tags" :key="tag.name" v-text="tag.name" class="tag"></router-link>
    </div>
    <div class="col-md-2 col-xs-6 end-xs actions">
        <a href="#" class="link--emoji" target="_blank" title="Repository">📦<div class="tooltip tooltip--repo">Repository</div></a>
        <a href="#" class="link--emoji" title="Demo">📺<div class="tooltip">Demo</div></a>
    </div>
  </div>
</template>

<script>
export default {
    props: ['component']
}
</script>

<style lang="stylus">
primary = #41B883
secondary = #35495E

.row
    margin 0.75em 0

.actions a
    padding 0 0 0 0.5em

.link
    &--emoji
        font-size 1.5em
        position relative
        text-decoration none
        top 0.2em

        &:hover
            text-decoration none

            .tooltip
                display block

.tooltip
    display none
    font-size 0.6em
    font-weight normal
    position absolute
    left 0
    top -2.25em
    background secondary
    color #fff
    padding 0.2em 0.35em
    border-radius 4px

    &--repo
        left -1em

.tag
    font-size 0.8em
    padding 0.25em 0.4em
    margin 0 0.2em
    background primary
    color white
    font-weight bold
    border-radius 4px
    text-decoration none
</style>

