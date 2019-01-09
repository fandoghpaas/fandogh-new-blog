<template>
  <header>
    <a href="/">
      <img src="./image/fandogh-logo.png" alt="fandogh-logo">
    </a>
  </header>
</template>

<script>
export default {
  name: 'header-blog'
}
</script>

<style lang="stylus" scoped>
@keyframes slide
  from
    background-position 0 0
  to
    background-position -400px 0
header
  display flex
  justify-content start
  align-items center
  padding 58px 90px 58px 0
  background-color #0f0050
  background-image url('./image/network.svg')
  background-attachment fixed
  background-position center
  background-size 50%
  animation slide 20s linear infinite
  @media screen and (max-width: 992px)
    padding 25px 30px 25px 0
</style>
