<template>
  <div class="kldn-header">
    <div class="kldn-header__video">
      <img :src="video.current.start" alt="" class="kldn-header__video-poster">
      <video
        class="kldn-header__video-bg"
        :class="{
        'kldn-header__video-bg_is-loaded': video.isLoaded
      }"
        :src="video.current.src"
        :autoplay="true"
        :controls="false"
        :playsinline="true"
        :muted="true"
        ref="videoEl"
      >
      </video>
    </div>
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
  import shuffleArray from '../../core/js/utility/shuffleArray'
  import slogans from './slogans'

  import layoutController from '../../core/js/layoutController'

  import Background from '../../components/Background/index'
  import AppearingText from '../../components/AppearingText/index'
  import requireMedia from './requireMedia'


  export default {
    components: {
      Background,
      AppearingText,
    },
    data() {
      return {
        sloganStep: 0,
        video: {
          isLoaded: false,
          current:
            {
              name: '',
              src: ''
            },
          collection: [
            ...requireMedia()
          ]
        },
        slogans: [
          ['frontend developer', '(web)design'],
          ...shuffleArray(slogans)
        ]
      }
    },
    mounted() {
      // Change slogan
      setTimeout(() => {
        setInterval(() => {
          this.sloganStep = this.sloganStep === this.slogans.length - 1 ? 0 : this.sloganStep + 1;
        }, 5000);
      }, 0);

      // Play video
      const {videoEl} = this.$refs;

      window.onload = () => {
        videoEl.oncanplay = () => {
          this.video.isLoaded = true;
          try{
            this.$refs.videoEl.muted = true;
            this.$refs.videoEl.play();
          } catch(e) {
            console.error(e);
            this.$refs.videoEl.controls = true;
          }
        };
        // Add current video
        const videoIndex = this.getVideoIndex();
        console.info('this.video.collection: ', this.video.collection);
        this.video.current = this.video.collection[videoIndex][layoutController.device];
        console.info(this.video.current);
        setTimeout(() => {
          this.video.current.src = this.video.current.video;
        }, 100);
      };
    },
    computed: {
      currentSlogan: function () {
        return this.slogans[this.sloganStep]
      }
    },
    methods: {
      getVideoIndex: function () {
        let index = Math.round(Math.random() * (this.video.collection.length -1));
        let prevIndex;
        if('localStorage' in window) {
          prevIndex = parseInt(window.localStorage.getItem('previousVideo'), 10);
        }

        if(prevIndex === index) {
          index++;
        }

        if(__DEV__) {
          console.info(index);
        }

        if('localStorage' in window) {
          window.localStorage.setItem('previousVideo', index);
        }
        return index;
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
