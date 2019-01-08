<template>
  <div>
    <nav class="pagination">
      <a v-on:click="prev()" class="button">Previous</a>
      <a v-on:click="next()" class="button">Next page</a>
      <ul>
        <li v-for="p in pageCount">
          <a v-if="pageNo == p" v-on:click="page(p)" class="button is-primary">{{p}}</a>
          <a v-else v-on:click="page(p)" class="button">{{p}}</a>
        </li>
      </ul>
    </nav>

    <button v-on:click="first()" class="button">First</button>
    <button v-on:click="prev()" class="button">Prev</button>
    <span style="padding-top:1em;">{{pageNo}}/{{pageCount}}</span>
    <button v-on:click="next()" class="button">Next</button>
    <button v-on:click="last()" class="button">Last</button>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      users: [],
      pageNo: 1,
      pageSize: 5,
      pageCount: 5
    };
  },
  methods: {
    init: function() {
      this.virtualService({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      });
    },
    page: function(pageNo) {
      this.virtualService({
        pageNo: pageNo,
        pageSize: this.pageSize
      });
    },
    first: function() {
      this.pageNo = 1;
      this.virtualService({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      });
    },
    last: function() {
      this.pageNo = this.pageCount;
      this.virtualService({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      });
    },
    prev: function() {
      if (this.pageNo > 1) {
        this.pageNo -= 1;
        this.virtualService({
          pageNo: this.pageNo,
          pageSize: this.pageSize
        });
      }
    },
    next: function() {
      if (this.pageNo < this.pageCount) {
        this.pageNo += 1;
        this.virtualService({
          pageNo: this.pageNo,
          pageSize: this.pageSize
        });
      }
    },
    virtualDataFromDb: function() {
      var users = [];
      for (var i = 1; i <= 105; i++) {
        var user = {
          id: "US" + i,
          firstName: i + "USER",
          lastName: "RESU" + i
        };
        users.push(user);
      }
      return users;
    },
    count: function(condition) {
      return this.virtualDataFromDb().length;
    },
    queryFromVirtualDB: function(condition, startRow, endRow) {
      var result = [];
      var condition = {};
      var data = this.virtualDataFromDb();
      var count = this.count(condition);
      for (var i = startRow - 1; i < endRow; i++) {
        if (i < count) {
          result.push(data[i]);
        }
      }
      return result;
    },
    virtualService: function(params) {
      var result = [];
      var condition = {};
      var pageNo = params.pageNo;
      var pageSize = params.pageSize;
      var pageCount = Math.ceil(this.count(condition) / pageSize);

      if (pageNo == 0) pageNo = 1;
      if (pageNo < 0) pageNo = pageCount;
      else if (pageNo > pageCount) pageNo = pageCount;
      var startRow = (pageNo - 1) * pageSize + 1;
      var endRow = startRow + pageSize - 1;
      var data = this.queryFromVirtualDB(condition, startRow, endRow);

      // set result
      this.users = data;
      this.pageNo = pageNo;
      this.pageCount = pageCount;
    }
  },
  created: function() {
    // this.init();
  },
  // ready
  mounted: function() {
    this.init();
  }
};
</script>
