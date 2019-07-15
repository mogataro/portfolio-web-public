<template lang="pug">
.population-graph-box
  p.population-graph-box__img
    img(src="@/assets/img/png/graph.png" width="100%")
  p.population-graph-box__text Nuxt+ResasAPI+Highchartsで作成しました。
</template>

<script>
export default {
  name: 'PopulationGraphBox'
}
</script>

<style lang="sass" scoped>
.population-graph-box
  position: relative
  &__img
    margin: auto
    margin-top: 8px
    border-radius: 10px
    img
      border-radius: 10px
  &__text
    position: absolute
    top: 208px
    width: 278px
    word-wrap: break-word
    background-color: #FBFBFB
    border-radius: 10px
</style>
