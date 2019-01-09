<template>
  <router-link :to="link" target="_blank" class="panel-small">
    <div class="panel-small-image">
      <span :style="{ backgroundImage: `url(${$withBase(image)})` }"></span>
    </div>
    <div class="panel-small-content">
      <h2 class="panel-small-title">{{title}}</h2>
      <p class="panel-small-description">{{description, 100 | elipsText}}</p>
      <span class="panel-small-date">{{date}}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "panel-small",
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
.panel-small
  position relative
  display flex
  flex-direction column
  margin-bottom 45px
  padding 2.8125em
  width 100%
  height 39.375em
  border-radius 10px
  background-color #ffffff
  box-shadow 0 3px 22px 0 rgba(0, 0, 0, 0.16)
  text-decoration none
  font-size 16px
  transition all 0.3s ease-in
  @media screen and (max-width: 1200px)
    height 45em
    font-size 14px
  @media screen and (max-width: 992px)
    font-size 10px
  @media screen and (max-width: 768px)
    height auto
  &:hover
    background-color #e7e8ea
    box-shadow 0 3px 22px 0 rgba(0, 0, 0, 0.16)
  &-image
    position relative
    display block
    overflow hidden
    margin 0
    padding-top 100%
    min-width 100%
    border-radius 10px
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
    text-align justify
    letter-spacing normal
    font-weight bold
    font-size 1.2em
    font-family IRANYekan
    line-height 1.7
  &-description
    color #4f4f4f
    text-align justify
    font-size 1.25em
    font-family IRANYekan
    line-height 1.73
    @media screen and (max-width: 768px)
      margin-bottom 10em
  &-date
    position absolute
    bottom $space
    left $space
    color #75879c
    font-size 16px
</style>

