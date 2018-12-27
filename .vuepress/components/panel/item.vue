<template>
  <article class="panel">
    <div class="panel-image">
      <img src="https://picsum.photos/375/375/?gravity=north" alt="blog">
    </div>
    <div class="panel-content"></div>
  </article>
</template>

<script>
export default {
  name: "panel"
};
</script>

<style lang="stylus" scoped>
.panel
  display flex
  border-radius 10px
  background-color #ffffff
  box-shadow 0 3px 22px 0 rgba(0, 0, 0, 0.16)
  padding 45px 
  &-image
    position relative
    display block
    overflow hidden
    margin 0
    width 375px
    height 375px
    span
        position absolute
        top 0
        right 0
        width 100%
        height 100%
        border-radius inherit
        background-position 50%
        background-size cover
</style>

