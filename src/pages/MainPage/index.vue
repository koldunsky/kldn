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
            I do <Link rel="nofollow noopener" href="https://www.instagram.com/kasha.lab">design and modify</Link> wristwatches for fun.
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
            {{daysOfDev()}} of web development experience. 1&nbsp;incredible hour
            of&nbsp;<Link href="https://www.youtube.com/watch?&v=1H-z8opCp_Q">
            presenting</Link> at <Link href="http://frontendconf.ru/moscow-rit/2018/abstracts/3379">RIT++</Link> (yeah, that's me).
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
              'Mobile first responsive/adaptive layout',
              'Webpage performance optimisation',
              'Code quality',
              'Product quality',
              'Unit-,Integration-,E2E testing',
              'UI libraries architecture',
              'A11y',
              'SEO',
              'Constantly learning new stuff and improving processes',
            ]
          },
          {
            title: 'Technical Skills',
            text: [
              'Typrescript/Javascript',
              'GraphQL, REST, XHR, AJAX',
              'React, Vue, Flutter',
              'All kind of CSS (scc-in-js, Taiwind, pre/post processors, etc.)',
              'HTML + HTML5 (video API, localstorage, etc.)',
              'VR/AR (A-Frame)',
              'SVG, Canvas',
              'CI/CD: Docker, Kubernetes, Jenkins, Gitlab CI, etc.',
            ]
          }
        ]
      }
    },
    methods: {
      daysOfDev: function () {
        const date1 = new Date(2013, 2, 21);
        const date2 = new Date();
        console.info(date1, date2);
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());

//        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) / 365)); //full years
//        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365)); // months
//        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365 / 30)); // months
//        console.info(Math.floor(timeDiff / (1000 * 3600 * 24) % 365 % 30)); // days
        const conjunctioned = (amount, somewhat) => {
          return ` and ${amount}\xa0fascinating ${somewhat} `;
        };

        let days = Math.floor(timeDiff / (1000 * 3600 * 24) % 365 % 30);
        if(days === 0) {
          days = '';
        } else if(days === 1) {
          days = conjunctioned(days, 'day');
        } else {
          days = conjunctioned(days, 'days');
        }

        let months = Math.floor(timeDiff / (1000 * 3600 * 24) % 365 / 30);
        if (months === 0) {
          months = '';
        } else if(months === 1) {
          months = days === '' ? conjunctioned(months, 'month') : `, ${months}\xa0month `;
        } else {
          months = days === '' ? conjunctioned(months, 'months') : `, ${months}\xa0months `;
        }

        //  days
        return `${Math.floor(timeDiff / (1000 * 3600 * 24) / 365)}  years${months}${days}`
      },
    },
  }
</script>

<style lang="stylus" src="./index.styl">

</style>
