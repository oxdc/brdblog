<template>
  <div class="comment-form-container noselect">
    <div v-if="!disabled">
      <div class="comment-form-title">
        <Icon type="md-create" />
        Leave your comment
      </div>
      <Form :model="form" :label-width="80">
        <FormItem label="Name">
          <i-input
           v-model="form.name"
           placeholder="Enter your name ..."
           style="max-width: 200px;"
           clearable>
          </i-input>
          <label class="comment-tail-label" style="color: #ed4014;"> * (Required) </label>
        </FormItem>
        <FormItem label="Passphrase">
          <i-input
           v-model="form.passphrase"
           placeholder="Enter your passphrase ..."
           type="password"
           style="max-width: 200px;"
           clearable>
          </i-input>
          <label class="comment-tail-label" style="color: #2d8cf0;"> (Optional) </label>
        </FormItem>
        <FormItem label="Email">
          <i-input
           v-model="form.email"
           placeholder="Enter your Email ..."
           style="max-width: 300px;"
           clearable>
          </i-input>
          <label class="comment-tail-label" style="color: #2d8cf0;"> (Optional) </label>
        </FormItem>
        <FormItem label="Personal Site">
          <i-input
           v-model="form.website"
           placeholder="Enter your website ..."
           style="max-width: 300px;"
           clearable>
          </i-input>
          <label class="comment-tail-label" style="color: #2d8cf0;"> (Optional) </label>
        </FormItem>
      </Form>
      <Divider />
      <div class="comment-finger-print-container">
        <div class="comment-finger-print-label">
          <Icon type="md-finger-print" :size="25"/>
          Digital finger print:
        </div>
        <div class="comment-finger-print">
          {{ fingerPrint[0] }}
        </div>
        <div class="comment-finger-print">
          {{ fingerPrint[1] }}
        </div>
      </div>
      <Divider />
      <div label-position="right" class="comment-editor">
        <div class="comment-editor-toolbar-container">
          <tool-bar id="comment-editor-toolbar"></tool-bar>
        </div>
        <quill-editor :options="editorOption">
        </quill-editor>
      </div>
      <div class="comment-submit-container">
        <Button class="comment-btn">Clear</Button>
        <Button type="primary" class="comment-btn">Submit</Button>
      </div>
    </div>
    <div v-if="disabled" class="comment-empty-label">Comments are disabled for this story.</div>
  </div>
</template>

<script>
import { sha256 } from 'js-sha256'
import Toolbar from '@/components/Comments/Toolbar'

export default {
  name: 'CommentForm',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'tool-bar': Toolbar
  },
  data () {
    return {
      form: {
        name: '',
        passphrase: '',
        email: '',
        website: ''
      }
    }
  },
  computed: {
    editorOption: {
      get () {
        return {
          theme: 'snow',
          modules: {
            formula: true,
            toolbar: {
              container: '#comment-editor-toolbar'
            }
          },
          placeholder: 'Share whatever you like ...'
        }
      }
    },
    fingerPrint: {
      get () {
        if (this.form.passphrase && this.form.name) {
          var hash = sha256.hmac(this.form.passphrase, this.form.name)
          var hashList = hash.match(/(.{1,4})/g)
          return [hashList.slice(0, 8).join('-'), hashList.slice(8, 16).join('-')]
        } else {
          return ['not available', '']
        }
      }
    }
  }
}
</script>

<style scoped>
.comment-form-container {
  margin: 40px 10% 10px;
}

.comment-form-title {
  font-size: 20px;
  font-weight: bolder;
  margin: 30px 0px;
}

.comment-tail-label {
  margin: 0px 20px;
}

.comment-editor {
  border: 1px solid #dcdee2;
  padding: 10px 0px;
  border-radius: 4px;
  min-height: 300px;
}

.comment-editor-toolbar-container {
  border-bottom: solid 1px #dcdee2 !important;
  margin-bottom: 10px;
}

.comment-submit-container {
  display: flex;
  justify-content: flex-end;
  margin: 20px 10px;
}

.comment-btn {
  margin: 0px 5px;
}

.comment-finger-print-container {
  color: #2b85e4;
  font-size: 15px;
}

.comment-finger-print {
  word-break: break-all;
  text-transform: uppercase;
  padding: 10px auto;
  text-align: center;
  font-family: monospace;
}

@media (max-width: 800px) {
  .comment-finger-print-label {
    margin-bottom: 10px;
  }
}

@media (min-width: 800px) {
  .comment-finger-print-label {
    position: relative;
    height: 0px;
  }
}

.comment-empty-label {
  font-size: 14px;
  font-style: italic;
  text-align: center;
}
</style>
