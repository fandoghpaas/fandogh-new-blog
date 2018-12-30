<template>
    <div>
        <b-header/>
        <!-- <header class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ $site.title }}</h1>
                </div>
            </div>
        </header> -->
        <section class="section">
            <Index v-if="isIndex" />
            <Single v-if="!isIndex" />
            <!-- <div class="content container">
                <h1>{{ $page.frontmatter.title }}</h1>
                <Content />
            </div> -->
        </section>
    </div>
</template>
<script>
import BHeader from '../components/header'
import Index from './Index';
import Single from './Single';
export default {
    components:{
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
        }
    },
};
</script>


<style lang="stylus">
@font-face
    font-family IRANYekan
    src url('../styles/fonts/iranyekanwebregular.ttf')
body 
  direction rtl
  font-family IRANYekan
  
</style>
