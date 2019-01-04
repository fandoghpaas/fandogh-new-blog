<template>
  <footer class="footer-site">
    <div class="footer-site-top">
      <div class="footer-site-links">
        <a href="/" class="footer-site-top-link">صفحه اصلی</a>
        <a href="https://blog.fandogh.cloud" class="footer-site-top-link">بلاگ</a>
        <a href="https://github.com/fandoghpaas" class="footer-site-top-link">Contribute</a>
      </div>
      <div class="footer-site-top-social">
        <a class="footer-site-top-social-item">
          <img src="./images/1.svg" alt="Fandogh">
        </a>
        <a href="https://github.com/fandoghpaas" class="footer-site-top-social-item">
          <img src="./images/2.svg" alt="Fandogh">
        </a>
        <a href="https://twitter.com/fandoghpaas?s=09" class="footer-site-top-social-item">
          <img src="./images/3.svg" alt="Fandogh">
        </a>
        <a href="support@fandogh.cloud" class="footer-site-top-social-item">
          <img src="./images/4.svg" alt="Fandogh">
        </a>
      </div>
    </div>
    <div class="footer-site-down">
      <p>
        کلیه حقوق این سایت متعلق به شرکت
        <a href="https://inb-co.com/">ایده‌نگاران‌بینا</a> می‌باشد
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-blog"
};
</script>
<style lang="stylus" scoped>
.footer-site
  display flex
  flex-direction column
  margin-top 42px
.footer-site .footer-site-top
  height 220px
  background-color #0f0050
  background-image url('./images/group-1935.svg')
  background-attachment fixed
  background-position center
  background-size 50%
  box-shadow 0 -3px 6px 0 rgba(0, 0, 0, 0.16)
  animation slide 20s linear infinite
@keyframes slide
  from
    background-position 0 0
  to
    background-position -400px 0
@keyframes slide-reverse
  from
    background-position 0 0
  to
    background-position 400px 0
.footer-site .footer-site-links
  display flex
  justify-content center
  padding-top 45px
  a
    text-decoration none
.footer-site .footer-site-top-link
  margin-left 45px
  width 160px
  height 46px
  border-radius 23px
  background-color #ffffff
  box-shadow 0 3px 26px 0 rgba(255, 255, 255, 0.16)
  color #000000
  text-align center
  font-size 16px
  line-height 46px
  cursor pointer
  transition all 0.4s ease
.footer-site .footer-site-top-link:hover
  box-shadow 0 3px 26px 0 rgba(255, 255, 255, 0.75)
.footer-site .footer-site-top-social
  display flex
  justify-content center
  padding-top 45px
.footer-site .footer-site-top-social-item
  margin-left 45px
  width 46px
  height 46px
  border-radius 100%
  background-color #ffffff
  transition all 0.4s ease
.footer-site .footer-site-top-social-item:hover
  box-shadow 0 3px 26px 0 rgba(255, 255, 255, 0.75)
.footer-site .footer-site-top-link:last-child, .footer-site .footer-site-top-social-item:last-child
  margin-left 0
.footer-site-down
  height 45px
  background-color #2a1975
  line-height 45px
.footer-site-down p, .footer-site-down a
  margin 0
  color #fff
  text-align center
  text-decoration none
  line-height 45px
</style>
