<template>
  <master-empty-base>
    <div class="error-page-container">
    <div class="error-code-label-container">
      <div class="error-code-label">
        404
      </div>
      <Divider />
      <div class="error-msg">
        Oops! We are getting lost ...
      </div>
    </div>
    </div>
  </master-empty-base>
</template>

<script>
import MasterEmptyBase from '@/views/Base/MasterEmptyBase'

export default {
  name: 'Error404',
  components: {
    'master-empty-base': MasterEmptyBase
  }
}
</script>

<style scoped>
.error-page-container {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.error-code-label-container {
  text-align: center;
  padding: 100px 10% 400px;
}

.error-code-label {
  font-size: 10em;
  font-weight: bolder;
  font-family: cursive;
}

.error-msg {
  font-size: 2em;
  font-family: fantasy;
  text-transform: uppercase;
}
</style>
