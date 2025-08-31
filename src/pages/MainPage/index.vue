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
            <ul>
              <li>I am proud owner of 8000 stickers.</li>
              <li>I do <Link rel="nofollow noopener" href="https://www.instagram.com/kasha.lab">design and modify</Link> wristwatches for fun.</li>
              <li>I regularly use all four of my film cameras.</li>
              <li>I once broke both arms in one epic bike fall.</li>
              <li>Master of artistic whistling.</li>
              <li>My tent weights less that 800 grams.</li>
            </ul>
          </ContentBlock>
        </div>
        <div
          class="kldn-main-page__cv-block"
        >
          <ContentBlock
            title="Not such interesting facts"
          >
            <ul>
              <li>
                {{daysOfDev()}} of software development experience.
              </li>
              <li>
                1&nbsp;incredible hour of&nbsp;<Link href="https://www.youtube.com/watch?&v=1H-z8opCp_Q">
                presenting</Link> at <Link href="http://frontendconf.ru/moscow-rit/2018/abstracts/3379">RIT++</Link> (yeah, that's me).
              </li>
              <li>
                1&nbsp;PWA (Progressive Web App) designed and built from scratch with UX and code quality in mind — <Link href="https://kolenki.app/">kolenki.app</Link> [<Link href="https://github.com/koldunsky/kolenki">github repo</Link>]
              </li>
            </ul>
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
              'Typescript/Javascript development',
              'Keen eye on UI/UX details',
              'Scalable solutions architecture',
              'Webpage performance optimisation',
              'Code quality',
              'Unit-, Integration-, E2E testing',
              'UI libraries architecture',
              'A11y',
              'SEO',
              'Constantly learning new stuff and improving processes',
            ]
          },
          {
            title: 'Technical Skills',
            text: [
              'Typescript/Javascript',
              'React, Next.js, Vue.js, Flutter',
              'Node.js, Express, Strapi',
              'CI/CD: Gitlab CI, Docker, Kubernetes, Jenkins, etc.',
              'GraphQL, REST, Websockets',
              'All kind of styling (Tailwind, Styled components, plain CSS, SCSS etc.)',
              'VR/AR (A-Frame)',
              'SVG, Canvas',
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
