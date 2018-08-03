<template>
  <div class="kldn-main-page">
    <Header/>
    <Contacts/>
    <div class="kldn-main-page__cv-container">
      <div class="kldn-main-page__cv-grid">
        <div class="kldn-main-page__cv-block">
          <ContentBlock
            title="Summary"
          >
            So what?
            import Background from '../../components/Background/index'
            import Header from '../../components/Header/index.vue'
            import ContentBlock from '../../components/ContentBlock/index.vue'
            import Background from '../../components/Background/index'
            import Header from '../../components/Header/index.vue'
            import ContentBlock from '../../components/ContentBlock/index.vue'
          </ContentBlock>
        </div>
        <div class="kldn-main-page__cv-block">
          <ContentBlock
            title="Areas of Expertise"
          >
            So what?
          </ContentBlock>
          <ContentBlock
            title="Technical Skills"
          >
            So what?
          </ContentBlock>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from '../../components/Header/index.vue'
  import ContentBlock from '../../components/ContentBlock/index.vue'
  import Contacts from '../../components/Contacts/index.vue'

  export default {
    components: {
      Header,
      ContentBlock,
      Contacts
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
