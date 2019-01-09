<template>
  <ul>
    <li
      v-for="pageNumber in totalPages"
      v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0"
    >
      <a
        href="#"
        @click="setPage(pageNumber)"
        :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}"
      >{{ pageNumber+1 }}</a>
    </li>
  </ul>
</template>

<script>
// https://stackoverflow.com/questions/35596389/vuejs-how-to-make-pagination-with-limiter-and-range/35706926#35706926
export default {
  //   props: ['pageNumber'],
  data() {
    return {
      currentPage: 0,
      itemsPerPage: 1,
      resultCount: 0
    }
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    }
  },
  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber
    }
  },
  filters: {
    paginate: function (list) {
      this.resultCount = 20
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1
      }
      var index = this.currentPage * this.itemsPerPage
      return list.slice(index, index + this.itemsPerPage)
    }
  }
}
</script>

<style scoped>
</style>