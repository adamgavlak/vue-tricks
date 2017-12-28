<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ name: 'about' }" class="brand">
        <img src="./assets/logo.svg" height="32px" alt="Vue-Tricks Logo">
        <h1>
          <div class="light">Vue</div>
          <div class="dark">Tricks</div>
        </h1>
      </router-link>
      <nav class="navigation" role="navigation">
        <router-link :to="{ name: 'about' }" class="navigation__link">About</router-link>
        <router-link :to="{ name: 'components#index' }" class="navigation__link">Components</router-link>
        <router-link :to="{ name: 'components#new' }" class="navigation__link btn btn--primary">Submit a component</router-link>
      </nav>
    </header>

    <main class="container">
      <router-view/>
    </main>

    <footer class="footer">
      Built by <a href="https://twitter.com/adamgavlak" class="link" target="_blank">@adamgavlak</a>. View the source at <a href="https://github.com" class="link">GitHub</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">

primary = #41B883
secondary = #35495E
bg_color = #F2FAF7
gray = #BABFBD

body
  font-family: "Proxima Soft", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222
  margin-top: 20px
  background bg_color

*
  box-sizing border-box

h1
  text-align left
  font-weight bold

  .light
    color primary
  .dark
    color secondary

h2
  margin 0.5em 0
  color primary

button
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.container
  max-width 65em
  margin 1.5em auto 2em
  background #ffffff
  padding 2.4em
  box-shadow 0 2px 15px rgba(#54665F, 25%), 0 15px 35px rgba(#325D55, 10%)
  border-radius 4px
  transition height .5s ease-in-out

.header
  display flex
  max-width 65em
  margin 0 auto
  justify-content space-between

  .brand
    display flex
    text-decoration none

    h1
      margin 0 0.75em
      font-size 1em
      position relative
      top -2px

.navigation__link, a.link
  color primary
  font-weight bold
  text-decoration none

  &:hover
    color darken(primary, 15%)
    text-decoration underline

  &:active
    color darken(primary, 30%)

.navigation__link
  padding 0 0.7em

a.btn
  text-decoration none
  margin 0 0 0 0.7em

  &:hover
    text-decoration none
    color #ffffff

.btn
  display inline-block
  padding: 0.6em 1em
  font-size 1em
  font-weight bold
  border none
  border-radius 4px
  cursor pointer

  &--secondary
    color primary
    background rgba(0,0,0,0)
    border 1px solid primary

    &:hover
      background darken(primary, 15%)

    &:active
      background darken(primary, 30%)

  &--primary
    color #ffffff
    background primary

    &:hover
      background darken(primary, 15%)

    &:active
      background darken(primary, 30%)

footer
  color #BABFBD
  text-align center

.loader,
.loader:after {
  border-radius: 50%;
  width: 3em;
  height: 3em;
}
.loader {
  display: block;
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.35em solid rgba(primary, 0.1);
  border-right: 0.35em solid rgba(primary, 0.1);
  border-bottom: 0.35em solid rgba(primary, 0.1);
  border-left: 0.35em solid primary;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
