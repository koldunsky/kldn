<template>
  <div class="kldn-bg">
    <AccelLayer
      class="kldn-bg__accel"
      :gyroRelative="false"
    >

      <div
        class="kldn-bg__img"
        :style="{'background-image': 'url(' + bgImg+ ')'}"
      >
      </div>
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
        bgImg: 'https://pp.userapi.com/c840720/v840720613/82276/8HLPTg27VSI.jpg'
      }
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
