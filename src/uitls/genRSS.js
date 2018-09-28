import RSS from 'rss'
import store from '../store'

export default function generateRSS() {
  var baseurl = window.location.protocol + '//' + window.location.host
  if (window.location.port) {
    baseurl += ':' + window.location.port
  }

  var feed = new RSS({
    title: store.getters.blogTitle,
    description: store.getters.description,
    feed_url: baseurl + '/#/rss.xml',
    site_url: baseurl + '/#/home',
    image_url: baseurl + '/icon.png',
    docs: baseurl + '/#/rss/docs.html',
    managingEditor: store.getters.username,
    webMaster: store.getters.username,
    copyright: store.getters.copyYear + ' @ ' + store.getters.username,
    language: store.getters.lang,
    categories: store.getters.categories,
    pubDate: (new Date(store.getters.pubDate)).toDateString(),
    ttl: '60'
  });

  var stories = store.getters.stories

  for (var story of stories) {
    feed.item({
      title: story.title,
      description: story.contents,
      url: baseurl + '/#/story?id=' + story.id + '&title=' + story.title,
      date: (new Date(story.time)).toDateString()
    })
  }

  var xml = feed.xml({
    indent: true
  })
  return xml
}