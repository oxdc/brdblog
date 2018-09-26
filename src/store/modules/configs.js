const state = {
  blogTitle: 'Brdblog',
  username: 'oxdc',
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
