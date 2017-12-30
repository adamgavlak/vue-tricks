<template>
    <form @submit.prevent="create" class="component__form">
        <h2>Submit new component</h2>

        <div class="form__group">
            <label for="name">Repository</label>
            <input type="text" v-model="component.repository">
            <small class="form__helper">Git repository of the project</small>
        </div>

        <div class="form__submit">
            <button type="submit" class="btn btn--primary" :disabled="loading">Send →</button>
            <span class="loader loader--inline" v-if="loading"></span>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            component: {
                repository: ""
            },
            loading: false
        }
    },

    methods: {
        create() {
            if (this.component.repository === "")
            {
                this.$notify({
                    group: 'main',
                    title: 'Repository cannot be empty 😠',
                    type: 'danger'
                })
                return;
            }


            this.loading = true
            this.$notify({
                group: 'main',
                title: 'Component submitted 😊',
                type: 'success'
            })

            this.$notify({
                group: 'main',
                title: 'Oh no! Something went wrong 😵',
                type: 'danger'
            })
        }
    }
}
</script>

<style lang="stylus">
primary = #41B883
secondary = #35495E
color__gray = #BABFBD

.btn[disabled="disabled"]
    background color__gray
    cursor not-allowed

.form
    &__helper
        margin-top 0.4em
        color gray

    &__submit
        display flex
        align-items center
        justify-content flex-start

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
