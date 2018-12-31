<template>
  <div>
    <div class="content">
      <h1>{{ $page.frontmatter.title }}</h1>
      <Content/>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>



<style lang="stylus">
@import '../components/styles/config.styl'
@import '../components/styles/style.styl'

.md-card
  display flex
  flex-direction row
  align-items stretch
  margin-top 1em
  padding 0.5rem
  min-height 150px
  border 1px solid #eee
  border-radius 0.5rem
  background-color $frontColor
  box-shadow 0 5px 15px -5px rgba(0, 0, 0, 0.1)
  .card-image
    display flex
    align-items center
    padding 0.5rem
    img
      max-width 150px
      max-height 150px
      height 150px
      border 1px solid #eee
      border-radius 0.2rem
      object-fit cover
  .card-content
    flex-grow 1
    padding 0.5rem
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote
      font-size 1rem
@media (max-width: $MQMobileNarrow)
  .md-card
    display flex
    flex-direction column
    box-sizing border-box
    margin 1rem -0.5rem
    padding 0.5rem
    .card-image
      flex-grow 1
      align-items stretch
      img
        max-width 400px
        width 100%
    .card-content
      pre
        margin 0
        border-radius 6px
</style>
