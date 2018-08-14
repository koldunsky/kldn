<template>
  <div class="kldn-main-page">
    <Header2/>
    <Contacts/>
    <div class="kldn-main-page__cv-container">
      <div class="kldn-main-page__cv-grid">
        <div
          class="kldn-main-page__cv-block"
        >
          <ContentBlock
            title="Interesting facts about me"
          >
            I am proud owner of 8000 stickers.
            I regularly use all four of my cameras and one astronomic binocular.
            I once broke both arms in one epic bike fall.
            Master of artistic whistling. My tent weights less that 800 grams.
          </ContentBlock>
        </div>
        <div
          class="kldn-main-page__cv-block"
        >
          <ContentBlock
            title="Not such interesting facts"
          >
            {{daysOfDev().y}} years, {{daysOfDev().m}} months and {{daysOfDev().d}} fascinating days of web development experience. 1 incredible hour of
            <Link href="https://www.youtube.com/watch?&v=1H-z8opCp_Q">
            reporting</Link> at
            <Link href="http://frontendconf.ru/moscow-rit/2018/abstracts/3379">
            RIT++</Link>. 1 year as a team leader at
            <Link href="http://kodix.ru" target="_blank">
            Kodix</Link>.
          </ContentBlock>
        </div>
        <template
          v-for="b in blocks">

          <div
            class="kldn-main-page__cv-block"
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
        </template>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Header2 from '../../components/Header2/index.vue'
  import ContentBlock from '../../components/ContentBlock/index.vue'
  import Contacts from '../../components/Contacts/index.vue'
  import Link from '../../components/Link/index.vue'

  export default {
    components: {
      Header2,
      ContentBlock,
      Contacts,
      Link,
    },
    data() {
      return {
        blocks: [
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
              'REST, XHR, AJAX',
              'React/Redux, Vue/Vuex',
              'Webpack, gulp',
              'Pug, Twig, Moustache, Hanlebars',
              'SVG, Canvas',
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
      },
      daysOfDev: function () {
        const date1 = new Date(2013, 2, 21);
        const date2 = new Date();
        console.info(date1, date2);
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());

        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) / 365)); //full years
        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365)); // months
        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365 / 30)); // months
        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365 % 30)); // days
        return {
          y: Math.floor(timeDiff / (1000 * 3600 * 24) / 365),
          m: Math.floor(timeDiff / (1000 * 3600 * 24) % 365 / 30),
          d: Math.floor(timeDiff / (1000 * 3600 * 24) % 365 % 30),
        }
      },
    },
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
