<template>
  <article class="panel">
    <div class="panel-image">
      <span :style="{ backgroundImage: `url(${$withBase(image)})` }"></span>
    </div>
    <div class="panel-content">
      <h2 class="panel-title">{{title}}</h2>
      <p class="panel-description">{{description}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "panel",
  props: {
    description: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.panel
  display flex
  margin-bottom 45px
  padding 45px
  border-radius 10px
  background-color #ffffff
  box-shadow 0 3px 22px 0 rgba(0, 0, 0, 0.16)
  &-image
    position relative
    position relative
    display block
    overflow hidden
    margin 0
    margin-left 45px
    padding-top 20%
    min-width 375px
    span
      position absolute
      top 0
      right 0
      width 100%
      height 100%
      background-position 50%
      background-size cover
  &-title
    color #4f4f4f
    text-align right
    letter-spacing normal
    font-weight bold
    font-size 30px
    font-family IRANYekan
    line-height 1.7
  &-description
    color #4f4f4f
    text-align justify
    font-size 26px
    font-family IRANYekan
    line-height 1.73
</style>

