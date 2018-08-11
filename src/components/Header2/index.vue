<template>
  <div class="kldn-header">
    <ul class="Words">
      <li class="Words-line">
        <p class="Words-line__content">Experienced</p>
      </li>
      <li class="Words-line">
        <p class="Words-line__content">{{currentSlogan[0]}}</p>
      </li>
      <li class="Words-line">
        <p class="Words-line__content">passionate about</p>
      </li>
      <li class="Words-line">
        <p class="Words-line__content">{{currentSlogan[1]}}</p>
      </li>
    </ul>
    <div class="kldn-header__name">
      <div class="kldn-header__name-part">Ruslan</div>
      <div class="kldn-header__name-part">Koldunsky</div>
    </div>
  </div>
</template>

<script>
  import Background from '../../components/Background/index'
  import AppearingText from '../../components/AppearingText/index'
  export default {
    components: {
      Background,
      AppearingText,
    },
    data() {
      return {
        step: 0,
        slogans: [
          ['frontend developer', '(web)design'],
          ['vacuum cleaner', 'your socks'],
          ['peach', 'watermelon'],
          ['Ross', 'divorce'],
          ['joker', 'batsy'],
          ['Scaramouche', 'fandango'],
          ['Peter', 'pan'],
          ['Jango', 'freedom'],
          ['Kaneda', 'Tetsuo'],
          ['asphalt', 'your knees'],
          ['Mulder', 'believe'],
          ['train', 'railroad'],
          ['umbrella', 'rain'],
          ['ninja', 'shuriken'],
        ]
      }
    },
    mounted() {
      setTimeout(() => {
        setInterval(() => {
          this.step = this.step === this.slogans.length - 1 ? 0 : this.step + 1;
        }, 10000);
      }, 5000);
    },
    computed: {
      currentSlogan: function () {
        return this.slogans[this.step]
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
