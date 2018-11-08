<template>
  <div>
    <div class="comment-item-line comment-item-hidden" v-show="hidden" @click="onShow">
      <div class="comment-item-comment">
        <Divider>
          <span class="comment-item-hidden-text">Hidden</span>
        </Divider>
      </div>
    </div>
    <div class="comment-item-line" v-show="!hidden">
      <Avatar 
       :style="{
          background: avatarBackground,
          color: avatarColor
        }">
      {{ name[0] }}
      </Avatar>
      <span class="comment-item-inline-block comment-item-title comment-item-link"> {{ name }}</span>
      <Icon v-if="parentName" type="md-arrow-dropright" size="16" class="comment-item-inline-block"/>
      <span v-if="parentName" class="comment-item-inline-block comment-item-title comment-item-link"> {{ parentName }}</span>
      <span class="comment-item-inline-block comment-item-link"> {{ timestampStr }} </span>
      <Tooltip content="Reply" placement="top">
        <Button
         type="text"
         shape="circle"
         icon="md-text"
         size="large"
         class="comment-item-btn-primary"
         @click="onReply">
        </Button>
      </Tooltip>
      <Tooltip max-width="350" placement="top">
        <Button
         type="text"
         shape="circle"
         icon="md-finger-print"
         size="large"
         class="comment-item-btn-primary">
        </Button>
        <div slot="content">
            <p class="comment-finger-print-label">Finger print</p>
            <p class="comment-finger-print">{{ convertedFingerPrint[0] }}</p>
            <p class="comment-finger-print">{{ convertedFingerPrint[1] }}</p>
        </div>
      </Tooltip>
      <Tooltip content="Hide" placement="top">
        <Button
         type="text"
         shape="circle"
         icon="md-eye-off"
         size="large"
         class="comment-item-btn-hidden"
         @click="onHide">
        </Button>
      </Tooltip>
      <Tooltip content="Delete / Block" placement="top">
        <Button
         type="text"
         shape="circle"
         icon="md-close"
         size="large"
         class="comment-item-btn-hidden">
        </Button>
      </Tooltip>
    </div>
    <div class="comment-item-line" v-show="!hidden">
      <div class="comment-item-comment">
        <div class="comment-item-info" v-show="email && website">
          <Icon type="md-mail" />
          <span class="comment-item-inline-block" v-show="email">{{ email }}</span>
          <Icon type="md-link" />
          <a class="comment-item-inline-block" v-show="website">{{ website }}</a>
        </div>
        <quill-editor
         :disabled="true"
         :options="editorOption"
         @ready="onReady"
         class="comment-item-context">
        </quill-editor>
        <div class="comment-item-vote">
          <Tooltip content="Like" placement="top">
            <Button
             type="text"
             icon="md-thumbs-up"
             size="large"
             class="comment-item-vote-up"
             @click="onLike">
             {{ parseInt(like) }}
            </Button>
          </Tooltip>
          <Tooltip content="Dislike" placement="top">
            <Button
             type="text"
             icon="md-thumbs-down"
             size="large"
             class="comment-item-vote-down"
             @click="onDislike">
             {{ parseInt(dislike) }}
            </Button>
          </Tooltip>
        </div>
        <div class="comment-item-child">
          <comment-item
           v-for="item in childList"
           :key="item.id"
           :id="item.id"
           :name="item.name"
           :timestamp="new Date(parseInt(item.timestamp))"
           :comments="item.comments"
           :like="item.like"
           :dislike="item.dislike"
           :fingerPrint="item.fingerPrint"
           :email="item.email"
           :website="item.website"
           :childList="item.childList"
           :parentName="name"
           @update-list="onProUpdate"
           @reply="onProReply">
          </comment-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { invertColor } from '@/uitls/miscellaneous'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'User'
    },
    parentName: {
      type: String,
      default: ''
    },
    timestamp: {
      type: Date,
      default: () => new Date(0)
    },
    comments: {
      type: String,
      default: '{"ops":[{"insert":"\n"}]}'
    },
    like: {
      type: Number,
      default: 0
    },
    dislike: {
      type: Number,
      default: 0
    },
    fingerPrint: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    },
    childList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      hidden: false
    }
  },
  name: 'CommentItem',
  computed: {
    editorOption: {
      get () {
        return {
          theme: 'snow',
          modules: {
            formula: true,
            toolbar: false
          },
          placeholder: 'Empty',
          readOnly: true
        }
      }
    },
    timestampStr: {
      get () {
        var hours = this.timestamp.getHours().toString()
        var minutes = this.timestamp.getMinutes().toString()
        var seconds = this.timestamp.getSeconds().toString()
        function formatTime (rawStr) {
          return rawStr.length == 1 ?'0' + rawStr : rawStr
        }
        hours = formatTime(hours)
        minutes = formatTime(minutes)
        seconds = formatTime(seconds)
        return this.timestamp.toDateString() +
          ' ' +
          hours +
          ':' +
          minutes +
          ':' +
          seconds
      }
    },
    convertedFingerPrint: {
      get () {
        if (this.fingerPrint) {
          var hashList = this.fingerPrint.match(/(.{1,4})/g)
          return [hashList.slice(0, 8).join('-'), hashList.slice(8, 16).join('-')]
        } else {
          return ['not available', '']
        }
      }
    },
    avatarBackground: {
      get () {
        return this.fingerPrint ?
            '#' + this.fingerPrint.substring(0, 6) :
            ''
      }
    },
    avatarColor: {
      get () {
        return invertColor(this.avatarBackground)
      }
    }
  },
  methods: {
    onReady (quill) {
      var contents = JSON.parse(this.comments)
      if (contents) {
        quill.setContents(contents.ops)
      }
    },
    onReply () {
      this.$emit('reply', this.name, this.id)
    },
    onProUpdate () {
      this.$emit('update-list')
    },
    onProReply (name, id) {
      this.$emit('reply', name, id)
    },
    onLike () {
      if (window.socket) {
        window.socket.emit('like', { id: this.id })
        this.$emit('update-list')
      }
    },
    onDislike () {
      if (window.socket) {
        window.socket.emit('dislike', { id: this.id })
        this.$emit('update-list')
      }
    },
    onHide () {
      this.hidden = true
    },
    onShow () {
      this.hidden = false
    }
  }
}
</script>

<style scoped>
.comment-item-inline-block {
  vertical-align: middle;
  margin: 0px 10px;
}

.comment-item-title {
  font-size: 16px;
}

.comment-item-link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.comment-item-comment {
  padding-left: 15px;
  margin-left: 15px;
  border-left: 1px solid #cccccc;
}

.comment-item-context {
  font-size: 14px;
  word-break: break-word;
  overflow: hidden;
}

.comment-item-vote {
  padding: 0px 0px 10px 10px;
}

.comment-item-vote-up {
  color: #19be6b;
}

.comment-item-vote-down {
  color: #c5c8ce;
}

.comment-item-vote-clicked {
  color: #2db7f5;
}

.comment-item-line {
  margin: 10px 0px;
}

.comment-item-line > .ivu-tooltip .comment-item-btn-hidden,
.comment-item-line > .ivu-tooltip .comment-item-btn-primary {
  color: transparent;
}

.comment-item-line:hover > .ivu-tooltip .comment-item-btn-hidden {
  color: #c5c8ce;
}

.comment-item-line:hover > .ivu-tooltip .comment-item-btn-primary {
  color: #2d8cf0;
}

.comment-finger-print-label {
  font-style: italic;
}

.comment-finger-print {
  word-break: break-all;
  text-transform: uppercase;
  padding: 10px auto;
  text-align: center;
  font-family: monospace;
}

.comment-item-info {
  margin: 5px;
}

.comment-item-info > * {
  color: gray !important;
}

.comment-item-hidden {
  cursor: pointer;
}

.comment-item-hidden-text {
  color: gray !important;
  font-size: 14px !important;
  font-style: italic !important;
  font-family: serif !important;
}
</style>
