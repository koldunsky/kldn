<template>
  <div class="kldn-page-photo">
    <div class="kldn-page-photo__feed">
      <div class="kldn-page-photo__collection">
        <img :src="dummy" alt="">
      </div>
      <div class="kldn-page-photo__collection">
        <img :src="dummy" alt="">
      </div>
      <div class="kldn-page-photo__collection">
        <img :src="dummy" alt="">
      </div>
      <div class="kldn-page-photo__collection">
        <img :src="dummy" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dummy: require('../../assets/bg.jpg')
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
