<template>
  <div class="accel-layer"
       ref="root"
  >
    <label>
      <input type="checkbox" v-model="isRelative">
      isRelative: {{isRelative}}
    </label>

    <div class="accel-layer__container"
         :style="getStyles"
    >

      <div class="debug">
        <pre ref="debug">
          {{debugText}}
        </pre>

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
        lastPosition: null,
        beta: null,
        gamma: null,
        lastOrientation: null,
        k: .1,
        isRelative: false,
        debugText: '',
      }
    },
    mounted: function () {
      window.addEventListener("deviceorientation", _throttle(this.handleOrientation, 100));
      window.addEventListener('mousemove', _throttle(this.handleOrientation, 100));
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
        if(this.isRelative) {
          if(this.lastPosition === null) {
            this.lastPosition = e;
          }

          const lastX = this.lastPosition.clientX;
          const lastY = this.lastPosition.clientY;
          const w = Math.max(document.documentElement.clientWidth, window.innerWidth) * 100;
          const h = Math.max(document.documentElement.clientHeight, window.innerHeight) * 100;
          this.x = (e.clientX / w) - (lastX / w);
          this.y = (e.clientY / h) - (lastY / h);
        } else {
          this.x = Math.floor(e.clientX / Math.max(document.documentElement.clientWidth, window.innerWidth) * 100);
          this.y = Math.floor(e.clientY / Math.max(document.documentElement.clientHeight, window.innerHeight) * 100);
        }
        this.lastPosition = e;
        this.debugText = `${this.x} / ${this.y}`;
      },

      orientationConnector: function (e) {
        if(this.isRelative) {
          if(this.lastOrientation === null) {
            this.lastOrientation = e;
          }
          const localK = 3;
          // beta
          const {beta} = this.lastOrientation;
          this.beta = (e.beta - beta) * localK;

          // gamma
          const {gamma} = this.lastOrientation;
          this.gamma = (e.gamma - gamma) * localK;
        } else {
          this.beta = e.beta;
          this.gamma = e.gamma;
        }

        this.lastOrientation = e;

        this.debugText = `
  alpha ↺ 0|360   : ${Math.round(e.alpha)}
  beta ⇅  -180|180: ${Math.round(e.beta)}
  gamma ⇆ -90|90  : ${Math.round(e.gamma)}
  ${this.beta}
  ${this.gamma}
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
