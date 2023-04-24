<template><a class="kldn-link" :href="href" target="_blank" rel="noopener noreferrer"><slot></slot></a></template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true,
      },
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
