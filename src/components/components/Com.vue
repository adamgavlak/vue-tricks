<template>
  <div class="row middle-xs">
      <div class="col-md-3 col-xs-12">
          <div v-text="component.name"></div>
      </div>
      <div class="col-md-5 col-xs-12">
          <div v-text="component.description"></div>
      </div>
      <div class="col-md-2 col-xs-6">
          <div v-text="component.author"></div>
      </div>
      <div class="col-md-2 col-xs-6 end-xs actions">
          <a href="#" class="link link--emoji" target="_blank" title="Repository">📦</a>
          <a href="#" class="link link--emoji" title="Demo">📺</a>
      </div>
  </div>
</template>

<script>
export default {
    props: ['component']
}
</script>

<style lang="stylus">
.row
    margin 0.75em 0

.actions a
    padding 0 0 0 0.5em

.link
    &--emoji
        font-size 1.25em
</style>

