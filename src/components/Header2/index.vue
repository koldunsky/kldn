<template>
  <div class="kldn-header">
    <video
      class="kldn-header__video-bg"
      :class="{
        'kldn-header__video-bg_is-loaded': video.isLoaded
      }"
      :src="videoSrc"
      :autoplay="true"
      :controls="false"
      playsinline="true"
      muted="true"
      ref="video"
    >
    </video>
    <ul class="kldn-words">
      <li class="kldn-words-line">
        <p class="kldn-words-line__content">Experienced</p>
      </li>
      <li class="kldn-words-line">
        <p class="kldn-words-line__content">{{currentSlogan[0]}}</p>
      </li>
      <li class="kldn-words-line">
        <p class="kldn-words-line__content">passionate about</p>
      </li>
      <li class="kldn-words-line">
        <p class="kldn-words-line__content">{{currentSlogan[1]}}</p>
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
        videoSrc:  '',
        videoDummySrc: require('../../assets/videoBg/Waving/video.mp4'),
        video: {
          isLoaded: false,
        },
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
      // Change slogan
      setTimeout(() => {
        setInterval(() => {
          this.step = this.step === this.slogans.length - 1 ? 0 : this.step + 1;
        }, 10000);
      }, 5000);

      // Play video
      // this.$refs.video.play();
      const {video} = this.$refs;
      console.dir(video);
      window.onload = () => {
        video.oncanplay = () => {
          console.info('video loaded');
          this.video.isLoaded = true;
          setTimeout(()=> {
//            video.play();
          }, 6000);
        };
        setTimeout(() => {
          this.videoSrc = this.videoDummySrc;
        }, 3000);
      };
    },
    computed: {
      currentSlogan: function () {
        return this.slogans[this.step]
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
