<template>
  <header class="kldn-header">
    <div class="kldn-header__bg">
      <Background/>
    </div>
    <div class="kldn-header__name">
      <span class="kldn-header__name-part">Kirill</span>
      <span class="kldn-header__name-part">Koldunskii</span>
    </div>
    <div class="kldn-header__description">
      Experienced <AppearingText text="frontend developer"></AppearingText> passionate about <AppearingText text="(web)design"></AppearingText>
    </div>
    <!--<ul>-->
    <!--<li>-->
    <!--<router-link to="/photo">Photo</router-link>-->
    <!--</li>-->
    <!--</ul>-->
  </header>
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
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
