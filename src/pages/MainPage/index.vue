<template>
  <div class="kldn-main-page">
    <Header2/>
    <Contacts/>
    <div class="kldn-main-page__cv-container">
      <div class="kldn-main-page__cv-grid">
        <div
          class="kldn-main-page__cv-block"
          v-for="b in blocks"
        >
          <ContentBlock
            :title="b.title"
          >
            <template v-if="Array.isArray(b.text)">
              <ul>
                <li v-for="t in b.text">
                  {{t}}
                </li>
              </ul>
            </template>
            <template v-else>
              {{b.text}}
            </template>
          </ContentBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header2 from '../../components/Header2/index.vue'
  import ContentBlock from '../../components/ContentBlock/index.vue'
  import Contacts from '../../components/Contacts/index.vue'

  export default {
    components: {
      Header2,
      ContentBlock,
      Contacts
    },
    data() {
      return {
        blocks: [
          {
            title: 'Interesting facts about me',
            text: 'Fact'
          },
          {
            title: 'Not such interesting facts',
            text: 'Track'
          },
          {
            title: 'Areas of Expertise',
            text: [
              'Web-design development',
              'UI/UX development and optimisation',
              'UI brand kits',
              'Reusable components',
              'Mobile first responsive/adaptive layout',
              'Website load speed improving',
            ]
          },
          {
            title: 'Technical Skills',
            text: [
              'JS(ES6+, Babel)',
              'CSS(SCSS, Stylus)',
              'HTML + HTML5(video API, localstorage, etc.)',
              'React/Redux, Vue/Vuex',
              'Webpack, gulp',
              'Pug, Twig, Moustache, Hanlebars',
              'SVG, Canvas',
              'AJAX',
            ]
          }
        ]
      }
    },
    methods: {
      getAge: function () { // birthday is a date
        const ageDifMs = Date.now() - new Date(1990, 4, 13).getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
    }
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
