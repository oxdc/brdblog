const state = {
  frontType: 'gallery',
  frontImgs: [],
  frontStory: ''
}

const getters = {
  frontType: state => {
    return state.frontType
  },
  frontImgs: state => {
    return state.frontImgs
  },
  frontStory: state => {
    return state.frontStory
  }
}

const actions = {}

const mutations = {
  setFrontType: (state, { frontType }) => {
    state.frontType = frontType
  },
  addFrontImg: (state, { id, path }) => {
    state.frontImgs.push({
      id: id,
      path: path
    })
  },
  setFrontImgs: (state, { imgs }) => {
    state.frontImgs = imgs
  },
  setFrontStory: (state, { story }) => {
    state.frontStory = story
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
