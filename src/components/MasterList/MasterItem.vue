<template>
  <TimelineItem>
    <div class="timeline-item-time">
      {{ timeStr }}
    </div>
    <Card :bordered="false" class="timeline-article" @click.native="onClick">
      <p slot="title"> {{ title }} </p>
      <p class="timeline-contents"> {{ contents.substring(0, 500) + ' ...' }} </p>
    </Card>
  </TimelineItem>
</template>

<script>
export default {
  name: 'MasterItem',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Untitled'
    },
    contents: {
      type: String,
      default: 'Oops ! It\'s empty ! What\'s wrong ?'
    },
    time: {
      type: Date,
      default: () => new Date(0)
    }
  },
  computed: {
    timeStr: {
      get () {
        return this.time.toDateString()
      }
    }
  },
  methods: {
    onClick () {
      this.$router.push({
        name: 'master-content',
        params: {
          id: this.id,
          title: this.title
        }
      })
    }
  }
}
</script>

<style scoped>
.timeline-item-time{
  color: gray;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
}

.timeline-article {
  margin: 20px;
}

.timeline-contents {
  overflow: hidden;
}
</style>

