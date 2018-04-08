<template>
  <div class="kldn-bg">
    <div
      class="kldn-bg__img"
      :style="{'background-image': 'url(' + bgImg+ ')'}"
    >
    </div>
    <div class="kldn-bg__overlay">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bgImg: require('../../assets/bg.jpg')
      }
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
