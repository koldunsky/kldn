<template>
  <div class="kldn-contacts">
    <div
      class="kldn-contacts__contact"
      v-for="c in contacts"
      :key="c.text+c.link"
    >
      <Link
        :href="c.link"
        :target="'_blank'"
      >
      {{c.text}}
      </Link>
    </div>
  </div>
</template>

<script>
  import Link from '../../components/Link/index.vue';

  export default {
    components: {Link},
    data() {
      return {
        contacts: [
          {
            text: 'koldunsky@gmail.com',
            link: 'mailto:koldunsky@gmail.com'
          },
          {
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/kirill-koldunskii-3799b9169/'
          },
        ]
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
