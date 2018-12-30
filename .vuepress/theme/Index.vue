<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <header class="home-header">
            <h1 class="home-title">جدیدترین بلاگ پست</h1>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <b-item :description="lastPost.title"/>
        </div>
      </div>
    </div>

    <!-- <div class="content">
      <h1>{{ $page.frontmatter.title }}</h1>
      <Content/>
    </div>
    <div class="articles">
      <article class="post section" v-for="post in posts">
        <h2 class="subtitle is-4">{{ post.title }}</h2>
        <p>{{ post.frontmatter.excerpt }}</p>
        <a :href="post.path">Read More </a>
      </article>
    </div> -->
  </div>
</template>
<script>
import BItem from "../components/panel/item";
export default {
  components: {
    BItem
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          page =>
            page.path.endsWith(".html") && page.path.startsWith(this.$page.path)
        )
        .sort(
          (a, b) =>
            Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
        );
    },
    lastPost() {
      return this.posts[0];
    }
  }
};
</script>


<style lang="stylus" scoped>
.home
  display flex
  &-header
    position relative
    width 100%
    &:before
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      z-index 0
      margin auto
      height 3px
      background-color #000
      content ''
  &-title
    position relative
    z-index 1
    display inline-block
    padding-left 45px
    background-color #fff
    color #000000
    text-align right
    font-weight bold
    font-size 36px
</style>
