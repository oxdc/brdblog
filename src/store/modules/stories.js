const state = {
  stories: []
}

const getters = {
  stories: state => {
    return state.stories
  },
  contents: state => id => {
    const index = state.stories.findIndex((element) => {
      return element.id === id
    })
    if (index >= 0) {
      return state.stories[index].contents
    } else {
      return ''
    }
  }
}

const actions = {}

const mutations = {
  setStories: (state, { stories }) => {
    state.stories = stories
  },
  addStory: (state, { story }) => {
    state.append(story)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
