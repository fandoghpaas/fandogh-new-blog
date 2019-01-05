<template>
  <div class="blog-home">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <header class="blog-home-header">
            <h1 class="blog-home-title">جدیدترین بلاگ پست</h1>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <b-item-big
            :title="lastPost.frontmatter.title"
            :description="lastPost.frontmatter.description"
            :image="lastPost.frontmatter.thumbnail"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <header class="blog-home-header">
            <h2 class="blog-home-title">سایر بلاگ پست‌ها</h2>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" v-for="(post,i) in posts">
          <b-item-small
            :link="post.frontmatter.link"
            :title="post.frontmatter.title"
            :description="post.frontmatter.description"
            :image="post.frontmatter.thumbnail"
          />
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
    </div>-->
    <b-footer/>
  </div>
</template>
<script>
import BItemBig from "../components/panel/item-big";
import BItemSmall from "../components/panel/item-small";
import BFooter from "../components/footer";
export default {
  components: {
    BItemBig,
    BItemSmall,
    BFooter
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
        )
        .slice(1, 4);
    },
    lastPost() {
      return this.posts[0];
    }
  }
};
</script>


<style lang="stylus" scoped>
.blog-home
  .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-offset-0, .col-sm-offset-1, .col-sm-offset-2, .col-sm-offset-3, .col-sm-offset-4, .col-sm-offset-5, .col-sm-offset-6, .col-sm-offset-7, .col-sm-offset-8, .col-sm-offset-9, .col-sm-offset-10, .col-sm-offset-11, .col-sm-offset-12
    padding-right 20px
    padding-left 20px
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
