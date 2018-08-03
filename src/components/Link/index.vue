<template>
  <a class="kldn-link" :href="href" :target="target">
    <slot>
    </slot>
  </a>
</template>

<script>
  export default {
    props: {
      href: {
        type: String,
        required: true,
      },
      target: {
        type: String,
        default: '_self'
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
