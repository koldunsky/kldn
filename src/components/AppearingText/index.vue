<template>
  <div class="kldn-atext">
    {{text}}
  </div>
</template>

<script>
  import {addClass, removeClass} from '../../utility/js/classesManipulation';

  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      timeout: {
        type: Number,
        default: 3000,
      }
    },
    mounted: function () {
      this.hide();
      setTimeout(() => {
        this.show();
      }, 4000);
    },
    methods: {
      show: function () {
        addClass(this.$el, 'kldn-atext_show');
//        removeClass(this.$el, 'kldn-atext_hide');
        this.$el.addEventListener(window.animationEvent, () => {
          removeClass(this.$el, 'kldn-atext_show');
        }, {
          once: true,
        });
      },
      hide: function () {
        addClass(this.$el, 'kldn-atext_hide');
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
