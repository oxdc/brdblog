const state = {
  blogTitle: 'Brdblog',
  username: 'oxdc',
  description: 'An awesome blog based on Brdnote.',
  categories: [
    'blog'
  ],
  pubDate: 0,
  lang: 'en',
  enableComments: true,
  commentsServer: 'localhost',
  commentsPort: 3000
}

const getters = {
  blogTitle: state => {
    return state.blogTitle
  },
  username: state => {
    return state.username
  },
  copyYear: () => {
    return new Date(Date.now()).getFullYear()
  },
  description: state => {
    return state.description
  },
  categories: state => {
    return state.categories
  },
  pubDate: state => {
    return state.pubDate
  },
  lang: state => {
    return state.lang
  },
  enableComments: state => {
    return state.enableComments
  },
  commentsServer: state => {
    return state.commentsServer
  },
  commentsPort: state => {
    return state.commentsPort
  },
  commentsURL: state => {
    return '//' + state.commentsServer + ':' + state.commentsPort
  }
}

const actions = {}

const mutations = {
  setBlogTitle: (state, { blogTitle }) => {
    state.blogTitle = blogTitle
  },
  setUsername: (state, { username }) => {
    state.username = username
  },
  setDescription: (state, { description }) => {
    state.description = description
  },
  setCategories: (state, { categories }) => {
    state.categories = categories
  },
  setPubDate: (state, { pubDate }) => {
    state.pubDate = pubDate
  },
  setLang: (state, { lang }) => {
    state.lang = lang
  },
  setComments: (state, { enableComments }) => {
    state.enableComments = enableComments
  },
  setCommentsServer: (state, { commentsServer }) => {
    state.commentsServer = commentsServer
  },
  setCommentsPort: (state, { commentsPort }) => {
    state.commentsPort = commentsPort
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
