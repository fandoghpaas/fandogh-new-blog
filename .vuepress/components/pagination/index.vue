<template>
  <ul class="paginate-doc">
    <li @click.prevent="handelEventArrow(active,'perv')" :class="{disabled:prevDisabled}">
      <a href>قبلی</a>
    </li>
    <li v-for="(item,index) in pageCount" :class="{active:active === index}">
      <a @click.prevent="handelEvent(index+1)">{{index+1}}</a>
    </li>
    <li @click.prevent="handelEventArrow(active,'next')" :class="{disabled:nexDisabled}">
      <a href>بعدی</a>
    </li>
  </ul>
</template>

<script>
// https://stackoverflow.com/questions/35596389/vuejs-how-to-make-pagination-with-limiter-and-range/35706926#35706926
// https://jsfiddle.net/taha_sh/hmapx482/
export default {
  props: {
    pageCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    nexDisabled() {
      return this.active + 1 === this.pageCount;
    },
    prevDisabled() {
      return this.active === 0;
    }
  },
  methods: {
    handelEventArrow(active, arrow) {
      if (arrow === "next") {
        this.handelEvent(active + 1, true);
      } else {
        this.handelEvent(active - 1, true);
      }
    },
    handelEvent(p, activate) {
      if (!activate) {
        this.$emit("clickHandler", p);
        this.active = p - 1;
      } else {
        this.$emit("clickHandler", p + 1);
        this.active = p;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
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
      text-decoration none
      font-size 26px
      font-family IRANNurm
      cursor pointer
      transition all 0.3s ease-in
      &:focus
        outline none
      &:hover
        background-color #24caee
        color #fff
    &.disabled
      pointer-events none
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
