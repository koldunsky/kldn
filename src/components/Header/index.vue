<template>
  <header class="kldn-header">
    <div class="kldn-header__name">
      {{name}}
    </div>
    <ul>
      <li>
        <router-link to="/photo">Photo</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        name: 'koldunsky'
//        name: 'kld'
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
