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
        enableComments: data.comments.enableComments
      })
      store.commit('setCommentsServer', {
        commentsServer: data.comments.commentsServer
      })
      store.commit('setCommentsPort', {
        commentsPort: data.comments.commentsPort
      })
      store.commit('setFrontType', {
        frontType: data.frontPage.type
      })
      store.commit('setFrontStory', {
        story: data.frontPage.frontStory
      })
      var socket = io.connect(
        (data.comments.tls ? 'https://' : 'http://') +
        data.comments.commentsServer + ':' +
        data.comments.commentsPort
      )
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
  loadJson('./galleries/index.json', (file) => {
    var data = JSON.parse(file)
    try {
      store.commit('setFrontImgs', {
        imgs: data.images
      })
    } catch (error) {
      // error
    }
  })
}
