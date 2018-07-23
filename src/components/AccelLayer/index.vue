<template>
  <div class="accel-layer"
       ref="root"
  >

    <div class="accel-layer__container"
         :style="getStyles"
    >

      <div class="debug" v-if="debug">
        <pre ref="debug">
        {{debugText}}
        </pre>

        {{getStyles}}
      </div>

      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
  import _get from 'lodash/get'
  import _throttle from 'lodash/throttle'

  export default {
    props: {
      k: {
        type: Number,
        default: .05,
      },
      globalMovement: {
        type: Boolean,
        default: true,
      },
      gyroRelative: {
        type: Boolean,
        default: true,
      },
      inverted: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        x: null,
        y: null,
        xMaxDeg: 12.5,
        yMaxDeg: 12.5,
        lastPosition: null,
        beta: null,
        gamma: null,
        lastOrientation: null,
        debugText: '',
        mouseMoveEvent: null,

        debug: false,
    }
    },
    mounted: function () {
      window.addEventListener('deviceorientation', _throttle(this.orientationConnector, 100, {
        trailing: false,
      }));
      if(this.globalMovement) {
        window.addEventListener('mousemove', _throttle(this.onMouseMove, 100));
      } else {
        this.$refs.root.addEventListener('mouseenter', this.onMouseEnter);
        this.$refs.root.addEventListener('mouseleave', this.onMouseLeave);
      }
    },
    methods: {
      onMouseMove: function (e) {
        const {root} = this.$refs;

        const rect = root.getBoundingClientRect();

        let percentByX;
        let percentByY;

        if(this.globalMovement) {
          percentByX = e.clientX / Math.max(document.documentElement.clientWidth, window.innerWidth) * 100;
          percentByY = e.clientY / Math.max(document.documentElement.clientHeight, window.innerHeight) * 100;
        } else {
          percentByX = (e.clientX - rect.x) / rect.width * 100;
          percentByY = (e.clientY - rect.y) / rect.height * 100;
        }


        this.x = this.inverted ? Math.ceil(100 - percentByX) : Math.floor(percentByX);
        this.y = this.inverted ? Math.ceil(100 - percentByY) : Math.floor(percentByY);
        this.debugText = `${this.x} / ${this.y}`;
      },

      onMouseEnter: function () {
        this.mouseMoveEvent = _throttle(
          (e) => {
            this.onMouseMove(e);
          },
          100,
          {
            trailing: false,
          });
        window.addEventListener('mousemove', this.mouseMoveEvent);
      },

      onMouseLeave: function () {
        window.removeEventListener('mousemove', this.mouseMoveEvent);
        this.resetPosition();
      },

      orientationConnector: function (e) {
        if (this.gyroRelative) {
          if (this.lastOrientation === null) {
            this.lastOrientation = e;
          }
          const localK = 1;
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
      },
      resetPosition: function () {
        this.x = null;
        this.y = null;
        this.lastPosition = null;
      }
    },
    computed: {
      getStyles: function () {
        if (this.x !== null && this.y !== null) {
          const x = ((this.x - 50) / 50) * 100 * this.k;
          const y = ((this.y - 50) / 50) * 100 * this.k * -1;
          return `transform: rotateX(${y}deg) rotateY(${x}deg)`
        } else if (this.beta !== null && this.gamma !== null) {
          function normalizeAxisValue(val, limiter) {
            const isPositive = val > 0;
            const absVal = Math.min(limiter, Math.abs(val));
            return isPositive ? absVal : absVal * -1;
          }
          const x = normalizeAxisValue(this.beta, this.xMaxDeg);
          const y = normalizeAxisValue(this.gamma * -1, this.yMaxDeg);
          return `transform: rotateX(${x}deg) rotateY(${y}deg)`
        }
        return this.debug ? '' : 'background-color: red; transform: rotateX(0deg) rotateY(0deg)';
      }
    }
  }
</script>

<style lang="styl" src="./index.styl"></style>
