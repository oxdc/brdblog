<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import loadConfig from '@/uitls/loadConfig'

export default {
  name: 'app',
  mounted () {
    loadConfig()
  }
}
</script>

<style>
</style>
