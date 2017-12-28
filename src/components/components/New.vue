<template>
    <form @submit.prevent="create" class="component__form">
        <h2>Submit new component</h2>

        <div class="form__group">
            <label for="name">Name</label>
            <input type="text" v-model="component.name">
            <small class="form__helper">Name of the component</small>
        </div>

        <div class="form__group">
            <label for="name">Author</label>
            <input type="text" v-model="component.author">
        </div>

        <div class="form__group">
            <label for="name">Description</label>
            <input type="text" v-model="component.description">
            <small class="form__helper">Short description of what the component does</small>
        </div>

        <div class="form__group">
            <label for="name">Repository</label>
            <input type="text" v-model="component.repository">
            <small class="form__helper">Git repository of the project</small>
        </div>

        <div class="form__group">
            <label for="name">Installation snippet</label>
            <input type="text" v-model="component.snippet">
            <small class="form__helper">Snippet for terminal, e.g.: <code>npm install vue-component</code></small>
        </div>

        <div class="form__group">
            <button type="submit" class="btn btn--primary">Send →</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            component: {
                name: "",
                description: "",
            }
        }
    },

    methods: {
        create() {
            console.log("create new component")
        }
    }
}
</script>

<style lang="stylus">
primary = #41B883
secondary = #35495E
color__gray = #BABFBD

.form
    &__helper
        margin-top 0.4em
        color gray

    &__group
        display flex
        flex-flow column
        align-items flex-start
        padding 0.7em 0

        label
            color secondary
            font-weight bold
            font-size 1.25em
            margin-bottom 0.2em

        code
            background #F2FAF7
            padding 0.25em 0.5em
            border-radius 4px

        input
            width 100%
            padding 0.4em 0.2em
            border-radius 4px
            border 1px solid color__gray
</style>
