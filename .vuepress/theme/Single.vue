<template>
  <div>
    <div class="content">
      <h1>{{ $page.frontmatter.title }}</h1>
      <Content/>
      <!-- <Content /> -->
    </div>
  </div>
</template>
<script>
import MContent from "../components/MContent.vue";

export default {
  components: {
    MContent
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>