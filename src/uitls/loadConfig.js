import { loadJson } from './miscellaneous'
import store from '../store'

export default function loadConfig() {
  loadJson('./config.json', (file) => {
    var data = JSON.parse(file)
    try {
      store.commit('setBlogTitle', {
        blogTitle: data.meta.blogTitle
      })
      store.commit('setUsername', {
        username: data.meta.username
      })
    } catch (error) {
      // error
    }
  })
  loadJson('./stories/index.json', (file) => {
    var data = JSON.parse(file)
    try {
      store.commit('setStories', {
        stories: data.stories
      })
    } catch (error) {
      // error
    }
  })
}
