<template>
  <div class="kldn-content-block">
    <div class="kldn-content-block__title">
      {{title}}
    </div>
    <div class="kldn-content-block__content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style lang="styl" src="./index.styl"></style>
