<template>
  <div class="kldn-content-block">
    <div class="kldn-content-block__title">
      {{title}}
    </div>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="styl" src="./index.styl"></style>
