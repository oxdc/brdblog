<template>
  <div>
    <div id="document-front-page" v-if="this.$store.getters.frontType == 'document'">
      <master-base :title="this.$store.getters.blogTitle">
        <quill-editor :disabled="true" :options="editorOption" @ready="onReady" class="article">
        </quill-editor>
      </master-base>
    </div>
    <div id="gallery-front-page" v-if="this.$store.getters.frontType == 'gallery'">
      <swiper :options="swiperOption" class="front-page-gallery">
        <swiper-slide
         v-for="item in frontImgs"
         :key="item.id"
         :id="item.id">
          <div
           class="front-page-img"
           :style="{
            'background-image': 'url(' + item.path + ')'
           }"
           @click="toStoryList">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import getContents from '@/uitls/getContents'
import MasterBase from '@/views/Base/MasterBase'

export default {
  name: 'MasterFrontPage',
  components: {
    'master-base': MasterBase
  },
  computed: {
    editorOption: {
      get () {
        return {
          theme: 'snow',
          scrollingContainer: '#document-body',
          modules: {
            formula: true,
            toolbar: false
          },
          placeholder: 'Oops ! It\'s empty ! What\'s wrong ?',
          readOnly: true
        }
      }
    },
    swiperOption: {
      get () {
        return {
          spaceBetween: 30,
          mousewheel: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    frontImgs: {
      get () {
        return this.$store.getters.frontImgs
      }
    }
  },
  methods: {
    onReady (quill) {
      var path = this.$store.getters.frontStory
      if (path) {
        getContents(path).then((data) => {
          var contents = JSON.parse(data.content)
          quill.setContents(contents.ops)
        })
      }
    },
    toStoryList () {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
.front-page-gallery {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}

.front-page-img {
  cursor: pointer;

  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

