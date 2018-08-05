<template>
  <div class="kldn-bg">
    <AccelLayer
      class="kldn-bg__accel"
      :gyroRelative="false"
    >

      <div
        class="kldn-bg__img"
        :style="{'background-image': 'url(' + image.desktop+ ')'}"
      >
      </div>
      <!--<picture-->
        <!--class="kldn-bg__img"-->
      <!--&gt;-->
        <!--<source-->
          <!--:srcset="image.mobile"-->
          <!--media="(max-width: 600px)">-->
        <!--<source-->
          <!--:srcset="image.tablet"-->
          <!--media="(min-width: 601px) and (max-width: 1200px)">-->
        <!--<source-->
          <!--:srcset="image.desktop"-->
          <!--media="(min-width: 1201px) and (max-width: 1800px)">-->
        <!--<source-->
          <!--:srcset="image.desktop"-->
          <!--media="(min-width: 1801px)">-->
        <!--<img :src="image.desktop" alt="">-->
      <!--</picture>-->
    </AccelLayer>

    <AccelLayer
      class="kldn-bg__overlay-accel"
      :gyroRelative="false"
    >
      <div class="kldn-bg__overlay">
      </div>
    </AccelLayer>
  </div>
</template>

<script>
  import AccelLayer from '../AccelLayer/index.vue';

  export default {
    components: {
      AccelLayer
    },
    data() {
      return {
//        bgImg: require('../../assets/cam.jpg')
        image: {
          mobile: require('../../assets/kldn_bg_320x2.png'),
          tablet: require('../../assets/kldn_bg_1280.png'),
          desktop: require('../../assets/kldn_bg_1280.png'),
        },
      }
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
