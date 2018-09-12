<template>
  <div class="kldn-header">
    <div class="kldn-header__video">
      <img :src="video.current.start" alt="" class="kldn-header__video-poster">
      <video
        v-if="true"
        class="kldn-header__video-bg"
        :class="{
        'kldn-header__video-bg_is-loaded': video.isLoaded
      }"
        :src="video.current.src"
        :autoplay="true"
        :controls="false"
        :playsinline="true"
        :inline="true"
        preload="auto"
        muted
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
  import Vue from 'vue'

  import shuffleArray from '../../core/js/utility/shuffleArray'
  import slogans from './slogans'

  import layoutController from '../../core/js/layoutController'

  import Background from '../../components/Background/index'
  import AppearingText from '../../components/AppearingText/index'
  import requireMedia from './requireMedia'
  import triggerEvent from '../../core/js/utility/triggerEvent';

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
      window.onload = () => {
        // Change slogan
        setTimeout(() => {
          setInterval(() => {
            this.sloganStep = this.sloganStep === this.slogans.length - 1 ? 0 : this.sloganStep + 1;
          }, 5000);
        }, 2000);
        // Set video
        const videoIndex = this.getVideoIndex();
        this.video.current = this.video.collection[videoIndex][layoutController.device];
        // Start video
        this.startVideo();
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
      },
      startVideo() {
        this.video.current.src = this.video.current.video;
        Vue.nextTick(()=> {
          console.info('nextTick');
          // Play video
          const {videoEl} = this.$refs;
          //for mobile chrome
          document.addEventListener('click', function () {
            videoEl.play();
          });
          videoEl.oncanplay = () => {
            this.video.isLoaded = true;
          };
        });
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
