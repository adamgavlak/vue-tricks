<template>
  <div id="app">
    <notifications group="main" position="top center" classes="notification"></notifications>
    <header class="header">
      <router-link :to="{ name: 'about' }" class="brand">
        <img src="./assets/logo.svg" height="32px" alt="Vue-Tricks Logo">
        <h1>
          <div class="light">Vue</div>
          <div class="dark">Tricks</div>
        </h1>
      </router-link>
      <nav class="navigation js-menu" role="navigation">
        <router-link :to="{ name: 'about' }" class="navigation__link">
          <span @click="closeMenu">About</span>
        </router-link>
        <router-link :to="{ name: 'components#index' }" class="navigation__link" @click="closeMenu">
          <span @click="closeMenu">Components</span>
        </router-link>
        <router-link :to="{ name: 'components#new' }" class="navigation__link btn btn--primary" @click="closeMenu">
          <span @click="closeMenu">Submit a component</span>
        </router-link>
      </nav>
      <div class="navigation__mobile">
        <span class="navigation__mobile--text">Menu</span>
        <button class="hamburger hamburger--elastic" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
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
  name: 'app',
  mounted() {
    let mobile = document.querySelector(".navigation__mobile")
    let menu = document.querySelector(".js-menu")
    let navigation = document.querySelector('.navigation')

    if (mobile && menu)
    {
      mobile.addEventListener('click', (e) => {
        if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open')
          mobile.children[1].classList.remove('is-active')
        }
        else {
          menu.classList.add('is-open')
          mobile.children[1].classList.add('is-active')
        }
      })
    }
  },
  methods: {
    closeMenu() {
      let mobile = document.querySelector(".navigation__mobile")
      let menu = document.querySelector(".js-menu")

      if (menu.classList.contains('is-open')) {
          menu.classList.remove('is-open')
          mobile.children[1].classList.remove('is-active')
      }
    }
  }
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

#app
  padding 0 1em

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
  padding 1em
  box-shadow 0 2px 15px rgba(#54665F, 25%), 0 15px 35px rgba(#325D55, 10%)
  border-radius 4px
  transition height .5s ease-in-out

.header
  display flex
  max-width 65em
  margin 0 auto
  justify-content space-between
  align-items center
  position relative

  .brand
    display flex
    text-decoration none

    h1
      margin 0 0.75em
      font-size 1em
      position relative
      top -2px


.navigation
  display none
  position absolute
  background bg_color
  top 3em
  right 0
  padding 1em
  border-radius 4px
  z-index 999
  box-shadow 0 2px 15px rgba(#54665F, 15%), 0 15px 35px rgba(#325D55, 10%)

.navigation.is-open
  display flex
  align-items flex-end
  flex-flow column

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
  margin-bottom 1em
  max-width 70%
  margin 0 auto 1em
  line-height 1.4

.loader,
.loader:after {
  border-radius: 50%;
  width: 3em;
  height: 3em;
}
.loader.loader--inline {
  display inline-block
  margin 0 1em
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

color__success = #28A745
color__danger = #DC3545

.notifications {
  margin-top 0
}

.notification {
  // Style of the notification itself
  background primary
  border-radius 4px
  display block
  box-shadow 0 2px 10px rgba(#54665F, 35%), 0 10px 25px rgba(#325D55, 15%)

  &-wrapper {
    padding 1em 1em 1.5em
  }

  &-title {
    // Style for title line
    color #ffffff
    padding 0.75em
    font-size 1em
    line-height 1.4
    text-align center
  }

  &-content {
    // Style for content
  }

  &.my-type {
    /*
    Style for specific type of notification, will be applied when you
    call notification with "type" parameter:
    this.$notify({ type: 'my-type', message: 'Foo' })
    */
  }

  &.success {
    background color__success
  }

  &.danger {
    background color__danger
  }
}

@media (min-width: 40em)
  .container
    padding 2.4em

  .navigation
    display block
    box-shadow none
    background none
    position relative
    top 0
    padding 0

  .navigation__mobile
    display none
</style>
