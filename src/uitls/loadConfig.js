import { loadJson } from './miscellaneous'
import store from '../store'
import io from 'socket.io-client'

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
      store.commit('setComments', {
        enableComments: data.meta.enableComments
      })
      store.commit('setCommentsServer', {
        commentsServer: data.meta.commentsServer
      })
      store.commit('setCommentsPort', {
        commentsPort: data.meta.commentsPort
      })
      var socket = io.connect(data.meta.commentsServer + ':' + data.meta.commentsPort)
      window.socket = socket
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
