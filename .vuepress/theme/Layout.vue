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
<<<<<<< HEAD
    };
  }
=======
    }
  },
>>>>>>> ab9e98112ab7b4f345dfecab77f0b6702fffabb9
};
</script>


<style lang="stylus">
@font-face
  font-family IRANYekan
<<<<<<< HEAD
  src url('../styles/fonts/iranyekanwebregular.ttf')
=======
  src url('../components/styles/fonts/iranyekanwebregular.ttf')
>>>>>>> ab9e98112ab7b4f345dfecab77f0b6702fffabb9
body
  font-family IRANYekan
  direction rtl
</style>
