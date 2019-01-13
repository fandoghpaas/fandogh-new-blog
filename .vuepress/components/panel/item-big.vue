<template>
  <router-link :to="link" class="panel">
    <div class="panel-image">
      <span :style="{ backgroundImage: `url(${$withBase(image)})` }"></span>
    </div>
    <div class="panel-content">
      <h2 class="panel-title">{{title}}</h2>
      <p class="panel-description">{{description , 200 | elipsText}}</p>
      <span class="panel-date">{{date}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "panel-big",
  props: {
    link: {
      type: String,
      default: ""
    },
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
    },
    date: {
      type: String,
      default: ""
    }
  },
  filters: {
    elipsText(text, count) {
      if (!text) return "";
      return text.slice(0, count) + (text.length > count ? "..." : "");
    }
  }
};
</script>

<style lang="stylus" scoped>
$space = 2.8125em
$spaceSm = 1.5em
.panel
  // height 29.0625em
  position relative
  display flex
  padding $space
  border-radius 10px
  background-color #ffffff
  box-shadow 0 3px 22px 0 rgba(0, 0, 0, 0.16)
  text-decoration none
  font-size 14px
  @media screen and (max-width: 1200px)
    font-size 12px
  @media screen and (max-width: 992px)
    flex-direction column
    padding $spaceSm
    width 100%
    font-size 10px
  &-image
    position relative
    display block
    overflow hidden
    margin 0
    margin-left 2.8125em
    padding-top 26%
    min-width 265px
    border-radius 10px
    @media screen and (max-width: 992px)
      margin-left 0
      min-width inherit
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
    font-size 1.6em
    font-family IRANYekan
    line-height 1.7
  &-description
    color #4f4f4f
    text-align justify
    font-size 1.4em
    font-family IRANYekan
    line-height 1.73
    @media screen and (max-width: 992px)
      margin-bottom 4em
  &-date
    position absolute
    bottom $space
    left $space
    color #75879c
    font-size 1.2em
    @media screen and (max-width: 992px)
      bottom $spaceSm
      left $spaceSm
</style>

