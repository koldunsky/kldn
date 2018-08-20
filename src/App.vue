<template>
  <div id="app">
    <GhostGrid/>
    <div class="kldn-page">
      <router-view/>
    </div>
    <div class="kldn-footer">
      <div class="kldn-footer__ruller"
           :class="{
          'kldn-footer__ruller_visible': overScroll.current > 0 || overScroll.record > 0
        }">
        <span class="kldn-footer__ruller-value">{{overScroll.current}}px</span>
        <span class="kldn-footer__ruller-title">below this page</span>
      </div>
      <div
        class="kldn-footer__ruller"
        :class="{
          'kldn-footer__ruller_visible': overScroll.record > 0
        }"
      >
        <span class="kldn-footer__ruller-title">your record:</span>
        <span class="kldn-footer__ruller-value">{{overScroll.record}}px</span>
      </div>
      <div class="kldn-footer__ruller-bar" :style="{width: `${20 + overScroll.current}px` }"></div>
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
    data() {
      return {
        overScroll: {
          current: 0,
          record: 0,
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', (e) => {
        const pageH = this.$el.clientHeight - document.body.clientHeight;
        const scroll = document.body.scrollTop;
        this.overScroll.current = scroll - pageH;
        this.overScroll.record = Math.max(this.overScroll.record, scroll - pageH);
      })
    }
  }
</script>

<style lang="styl" src="./core/styl/app.styl"></style>
