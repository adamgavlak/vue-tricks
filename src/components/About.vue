<template>
  <div class="about">
    <img src="../assets/logo.svg" height="64px" alt="">
    <h1><span class="light">Vue</span> <span class="dark">Tricks</span></h1>

    <h2>The best from Vue.js community in one place</h2>

    <div class="row center-xs row--narrow">
      <div class="col-md-6 col-12-xs btn--about">
        <router-link :to="{ name: 'components#index' }" class="btn btn--secondary">Show components</router-link>
      </div>
      <div class="col-md-6 col-12-xs btn--about">
        <router-link :to="{ name: 'components#new' }" class="btn btn--primary">Submit a component</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
primary = #41B883

.about
  text-align center
  padding 2em 0

h1
  width 100%
  text-align center
  font-size 2.4em

h2
  color rgba(primary, 0.6)
  font-weight normal
  font-size 1.6em
  line-height 1.4
  max-width 90%
  margin 1em auto

.about
  .row
    margin-top 1em

.btn--about
  margin-top 1em

.row--narrow
  max-width 100%
  margin 3em auto 0

@media (min-width: 40em)
  .row--narrow
    max-width 40%

  .btn--about
    padding 0
    margin 0

    .btn
      margin 0

  h2
    color rgba(primary, 0.6)
    font-weight normal
    font-size 2em
    max-width 40%
    margin 1em auto


</style>
