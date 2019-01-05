<template>
  <div>
    <b-header/>
    <section class="section">
      <Index v-if="isIndex"/>
      <Single v-if="!isIndex"/>
    </section>
  </div>
</template>
<script>
import BHeader from "../components/header";
import Index from "./Index";
import Single from "./Single";
export default {
  components: {
    BHeader,
    Index,
    Single
  },
  computed: {
    isIndex() {
      return this.$page.path.endsWith("/");
    }
  },
  data() {
    return {
      id: 140
    };
  }
};
</script>


<style lang="stylus">
@font-face
  font-family IRANYekan
  src url('../components/styles/fonts/iranyekanwebregular.ttf')
body
  font-family IRANYekan
  direction rtl
</style>
