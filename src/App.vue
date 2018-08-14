<template>
  <div id="app">
    <GhostGrid/>
    <div class="kldn-page">
      <router-view/>
    </div>
    <div class="kldn-footer">
      <div class="kldn-footer__brick">
      </div>
    </div>
  </div>
</template>

<script>
  import GhostGrid from './components/GhostGrid/index.vue'

  export default {
    name: 'App',
    components: {
      GhostGrid,
    },
    mounted() {
    }
  }
</script>

<style lang="styl" src="./core/styl/app.styl"></style>
