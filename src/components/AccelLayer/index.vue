<template>
  <div class="accel-layer"
       ref="root"
  >
    <div class="accel-layer__container"
         :style="getStyles"
    >

      <div class="debug">
        <pre ref="debug"></pre>

        {{getStyles}}
      </div>

    </div>
    <slot>

    </slot>
  </div>
</template>

<script>
  import _get from 'lodash/get'
  import _throttle from 'lodash/throttle'

  export default {
    data() {
      return {
        x: null,
        y: null,
        beta: null,
        gamma: null,
        k: .1,
      }
    },
    mounted: function () {
      window.addEventListener("deviceorientation", (e) => {
        requestAnimationFrame(() => {
          this.handleOrientation(e);
        });
      });
      window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
          this.handleOrientation(e);
        });
      });
    },
    methods: {
      handleOrientation: function (e) {
        const types = {
          mousemove: this.mouseConnector,
          deviceorientation: this.orientationConnector,
          none: console.warn
        };
        const handler = _get(types, e.type, types.none);
        handler(e);
      },

      mouseConnector: function (e) {
        this.x = Math.floor(e.clientX / Math.max(document.documentElement.clientWidth, window.innerWidth) * 100);
        this.y = Math.floor(e.clientY / Math.max(document.documentElement.clientHeight, window.innerHeight) * 100);
        this.$refs.debug.innerText = `${this.x} / ${this.y}`;
      },

      orientationConnector: function (e) {
        this.beta = e.beta;
        this.gamma = e.gamma;

        this.$refs.debug.innerText = `
  alpha ↺ 0|360   : ${Math.round(e.alpha) }
  beta ⇅  -180|180: ${Math.round(e.beta)}
  gamma ⇆ -90|90  : ${Math.round(e.gamma)}
  translateY(${e.beta}deg)
           `;
      }
    },
    computed: {
      getStyles: function () {

        if (this.x !== null && this.y !== null) {
          const x = ((this.x - 50) / 50) * 90 * this.k * -1;
          const y = ((this.y - 50) / 50) * 90 * this.k * -1;
          return `transform: rotateX(${y}deg) rotateY(${x}deg)`
        } else if (this.beta !== null && this.gamma !== null) {
          const x = this.beta;
          const y = this.gamma * -1;
          return `transform: rotateX(${x}deg) rotateY(${y}deg)`
        }
        return `background-color: red; transform: rotateX(0deg) rotateY(0deg)`;
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
