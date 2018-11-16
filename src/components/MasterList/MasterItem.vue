<template>
  <TimelineItem class="timeline-item" @click.native="onClick">
    <div>
      <div class="timeline-item-title">
        {{ title }}
      </div>
      <div class="timeline-item-time">
        {{ timeStr }}
      </div>
    </div>
    <div>
      <p class="timeline-item-contents"> {{ contents.substring(0, 500) + ' ...' }} </p>
    </div>
    <div class="timeline-item-readmore">
      Read more ...
    </div>
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
      this.$router.push('/story?id=' + this.id + '&title=' + this.title)
    }
  }
}
</script>

<style scoped>
.timeline-item {
  margin-bottom: 20px;
  cursor: pointer;
}

.timeline-item-title {
  display: inline-block;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin: 0px 10px;
}

.timeline-item-time {
  display: inline-block;
  margin: 0px 5%;
}

.timeline-item-contents {
  color: black;
  margin: 10px;
  font-size: 13px;
  overflow: hidden;
}

.timeline-item-readmore {
  margin: 10px;
  text-decoration: underline;
}

.timeline-item-readmore:hover {
  color: #2d8cf0;
}
</style>

