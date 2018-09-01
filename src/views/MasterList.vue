<template>
  <master-base :title="'Stories'">
    <Timeline pending class="timeline" v-show="stories.length > 0">
      <master-item
       v-for="item in stories"
       :key="item.id"
       :id="item.id"
       :title="item.title"
       :contents="item.contents"
       :time="item.time"
       closable>
      </master-item>
      <TimelineItem><a href="#">More</a></TimelineItem>
    </Timeline>
    <Page
     :total="stories.length"
     prev-text="< Previous"
     next-text="Next >"
     class="page-selector"
     v-show="stories.length > 0"/>
    <div class="empty-msg" v-show="stories.length == 0">
      It's empty now, go ahead and write something amazing!
    </div>
  </master-base>
</template>

<script>
import MasterBase from '@/views/MasterBase'
import MasterItem from '@/components/MasterList/MasterItem'

export default {
  name: 'MasterList',
  components: {
    'master-base': MasterBase,
    'master-item': MasterItem
  },
  computed: {
    stories: {
      get () {
        return this.$store.getters.stories
      }
    }
  }
}
</script>

<style scoped>
.timeline {
  margin: 60px 10% 30px;
}

.page-selector {
  text-align: center;
}

.empty-msg {
  color: gray;
  font-size: 20px;
  font-style: italic;
  font-family: serif;
  padding: 30px;
  text-align: center;
}
</style>

