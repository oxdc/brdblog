const state = {
  blogTitle: 'Brdblog',
  username: 'oxdc'
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
  }
}

const actions = {}

const mutations = {
  setBlogTitle: (state, { blogTitle }) => {
    state.blogTitle = blogTitle
  },
  setUsername: (state, { username }) => {
    state.username = username
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
