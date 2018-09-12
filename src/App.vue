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
  import {addClass} from './utility/js/classesManipulation'
  import _debounce from 'lodash/debounce'

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
          sum: 0,
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', () => {
        const pxlsBelow = this.getPxlsBelow();
        this.overScroll.current = pxlsBelow;
        this.overScroll.record = Math.max(this.overScroll.record, pxlsBelow);
        if(pxlsBelow > 100) {
          this.setComicSans();
        }
      });
      window.addEventListener('scroll', _debounce(() => {
        this.overScroll.sum += this.getPxlsBelow();
      }, 300));
    },
    methods: {
      setComicSans() {
        addClass(document.querySelector('html'), '_font_comic-sans')
      },
      getPxlsBelow() {
        const pageH = this.$el.clientHeight - document.body.clientHeight;
        const scroll = document.body.scrollTop;
        console.info(pageH, scroll);
        let pxlsBelow = scroll - pageH;
        return  pxlsBelow < 0 ? 0 : pxlsBelow;
      }
    }
  }
</script>

<style lang="styl" src="./core/styl/app.styl"></style>
