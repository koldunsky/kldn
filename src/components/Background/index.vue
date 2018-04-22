<template>
  <AccelLayer>
    <div class="kldn-bg">
      <div
        class="kldn-bg__img"
        :style="{'background-image': 'url(' + bgImg+ ')'}"
      >
      </div>
      <div class="kldn-bg__overlay">
      </div>
    </div>
  </AccelLayer>
</template>

<script>
  import AccelLayer from '../AccelLayer/index.vue';
  export default {
    components: {
      AccelLayer
    },
    data() {
      return {
//        bgImg: require('../../assets/bg.jpg')
        bgImg: ''
      }
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
