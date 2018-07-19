<template>
  <div class="accel-layer"
       ref="root"
  >
    <!--<label style="position: fixed; bottom: 50%; right: 50%; z-index: 555; color: greenyellow">-->
      <!--<input type="checkbox" v-model="isRelative">-->
      <!--isRelative: {{isRelative}}-->
    <!--</label>-->

    <div class="accel-layer__container"
         :style="getStyles"
    >

      <!--<div class="debug">-->
      <!--<pre ref="debug">-->
      <!--{{debugText}}-->
      <!--</pre>-->

        <!--{{getStyles}}-->
      <!--</div>-->

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
      }
    },
    data() {
      return {
        x: null,
        y: null,
        lastPosition: null,
        beta: null,
        gamma: null,
        lastOrientation: null,
        isRelative: false,
        debugText: '',
        mouseMoveEvent: null,
    }
    },
    mounted: function () {
      window.addEventListener('deviceorientation', _throttle(this.orientationConnector, 100, {
        trailing: false,
      }));
      this.$refs.root.addEventListener('mouseenter', this.onMouseEnter);
      this.$refs.root.addEventListener('mouseleave', this.onMouseLeave);
    },
    methods: {
      onMouseMove: function (e) {
        const {root} = this.$refs;

        const rect = root.getBoundingClientRect();

        const percentByX = (e.clientX - rect.x) / rect.width * 100;
        const percentByY = (e.clientY - rect.y) / rect.height * 100;

        this.x = Math.floor(percentByX);
        this.y = Math.floor(percentByY);
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
        if (this.isRelative) {
          if (this.lastOrientation === null) {
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
