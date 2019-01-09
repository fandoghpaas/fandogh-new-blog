<template>
  <div>
    <b-header/>
    <section class="section">
      <Index v-if="isIndex"/>
      <Single v-if="!isIndex"/>
    </section>
    <b-footer/>
  </div>
</template>
<script>
import BHeader from "../components/header";
import Index from "./Index";
import Single from "./Single";
import BFooter from "../components/footer";

export default {
  components: {
    BHeader,
    Index,
    Single,
    BFooter
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
@font-face
  font-family IRANNurm
  src url('../components/styles/fonts/YekanBakh_Regular.ttf')
body
  font-family IRANYekan
  direction rtl
</style>
