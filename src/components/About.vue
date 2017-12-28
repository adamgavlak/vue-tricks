<template>
  <div class="about">
    <img src="../assets/logo.svg" height="64px" alt="">
    <h1><span class="light">Vue</span> <span class="dark">Tricks</span></h1>

    <h2>The best from Vue.js community in one place</h2>

    <div class="row row--narrow">
      <router-link :to="{ name: 'components#index' }" class="btn btn--secondary">Show components</router-link>
      <router-link :to="{ name: 'components#new' }" class="btn btn--primary">Submit a component</router-link>
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
  font-size 2em
  max-width 40%
  margin 1em auto

.row--narrow
  max-width 40%
  margin 3em auto 0

</style>
