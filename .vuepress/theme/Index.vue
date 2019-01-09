<template>
  <div class="blog-home">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <header class="blog-home-header">
            <h1 class="blog-home-title">جدیدترین بلاگ پست</h1>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <b-item-big
            :title="lastPost.frontmatter.title"
            :link="lastPost.frontmatter.link"
            :description="lastPost.frontmatter.description"
            :image="lastPost.frontmatter.thumbnail"
            :date="lastPost.frontmatter.date"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <header class="blog-home-header">
            <h2 class="blog-home-title">سایر بلاگ پست‌ها</h2>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-xs-12" v-for="(post,i) in posts">
          <b-item-small
            :link="post.frontmatter.link"
            :title="post.frontmatter.title"
            :description="post.frontmatter.description"
            :image="post.frontmatter.thumbnail"
            :date="post.frontmatter.date"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <div class="paginate-wrapper">
            <!-- <paginate></paginate> -->
            <!-- :pageCount="Math.ceil(allData.length / 3)"
              :clickHandler="goToFuncWithData"
              :prevText="'قبلی'"
              :nextText="'بعدی'"
            :containerClass="'paginate-doc'"-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BItemBig from "../components/panel/item-big";
import BItemSmall from "../components/panel/item-small";
import Paginate from 'vue-paginate'
export default {
  components: {
    BItemBig,
    BItemSmall,
    Paginate

  },
  data() {
    return {
      startItem: 0,
      lastItem: 3
    };
  },
  methods: {
    goToFuncWithData: function (n, data) {
      let d = n - 1;
      this.startItem = d * 3;
      this.lastItem = (d + 1) * 3;
    }
  },
  computed: {
    allData() {
      return this.$site.pages.filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
        .sort((a, b) => b.frontmatter.order - a.frontmatter.order).reverse();
    },
    posts() {
      let arr = [...this.allData];
      arr.shift();
      return arr.slice(this.startItem, this.lastItem);
    },
    lastPost() {
      return this.$site.pages
        .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
        .sort((a, b) => b.frontmatter.order - a.frontmatter.order).reverse()[0];
    }
  }
};
</script>


<style lang="stylus" >
.blog-home
  .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-offset-0, .col-sm-offset-1, .col-sm-offset-2, .col-sm-offset-3, .col-sm-offset-4, .col-sm-offset-5, .col-sm-offset-6, .col-sm-offset-7, .col-sm-offset-8, .col-sm-offset-9, .col-sm-offset-10, .col-sm-offset-11, .col-sm-offset-12
    padding-right 20px
    padding-left 20px
    @media screen and (max-width: 1200px)
      padding-right 10px
      padding-left 10px
  &-header
    position relative
    margin 45px 0
    width 100%
    @media screen and (max-width: 992px)
      margin 20px 0
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
      @media screen and (max-width: 992px)
        height 1px
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
    @media screen and (max-width: 992px)
      font-size 26px
.paginate-wrapper
  display flex
  justify-content center
  text-align center
  .paginate-doc
    display flex
    justify-content center
    margin 0
    width 100%
    list-style none
    list-style-type none
    margin-block-start 0
    margin-block-end 0
    margin-inline-start 0px
    margin-inline-end 0px
    padding-inline-start 0
    li
      margin-left 15px
      @media screen and (max-width: 768px)
        display none
        &:last-child, &:first-child, &.active
          display flex
      a
        display flex
        justify-content center
        align-items center
        width 48px
        height @width
        border-radius 50%
        color #4f4f4f
        font-size 26px
        font-family IRANNurm
        transition all 0.3s ease-in
        &:focus
          outline none
        &:hover
          background-color #24caee
          color #fff
      &.disabled
        a
          color #bfbfbf
      &.active
        a
          background-color #24caee
          color #fff
      &:first-child
        margin-left 45px
      &:last-child
        margin-right 45px
      &:last-child, &:first-child
        &.disabled
          a
            &:hover
              background-color #fff
              color #bfbfbf
        a
          &:hover
            background-color #fff
            color #4f4f4f
</style>
