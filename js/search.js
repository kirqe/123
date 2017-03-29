var SearchInput = {
  template: `
    <input type="text" placeholder="search..." class="search-input" v-model="keyword" @keyup="onInput">
  `,
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    onInput () {
      this.$emit('search', this.keyword)
    }
  }
}

var SearchResults = {
  template: `
    <div>
      <ul v-if="posts.length > 0" class="search-results">
        <li v-for="post in posts" class="search-results-item">
          <a :href="post.url">{{post.title}}</a>
        </li>
      </ul>
      <span v-if="posts.length === 0 && keyword !== ''" class="not-found">Noththig's found</span>
    </div>
  `,
  props: ['posts', 'keyword']
}

Vue.component('search', {
  components: {
    SearchInput,
    SearchResults
  },
  template: `
    <div>
      <search-input @search="results"></search-input>
      <search-results :posts=posts :keyword=keyword></search-results>
    </div>
  `,
  data () {
    return {
      posts: [],
      keyword: ''
    }
  },
  methods: {
    results (keyword) {
      this.keyword = keyword
      if (keyword === '') {
        return this.posts = []
      }
      $.get('/posts.json', keyword).done((data) => {
        var results = _.filter(data, (post) => {
          return post.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        this.posts = results
      })
    }
  }
})

new Vue({
  el: '#search',
  data () {
    return {

    }
  }
})
