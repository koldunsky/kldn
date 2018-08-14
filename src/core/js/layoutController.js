import _map from 'lodash/map';
import _mapValues from 'lodash/mapValues';
import _each from 'lodash/each';
import _first from 'lodash/first';

import {addClass, removeClass} from './utility/classesMunipulation';

class LayoutController {
  constructor() {
    this.breakpoints = {
      phone: 320,
      tablet: 600,
      desktop: 1200,
    };

    this.matches = { // https://developer.mozilla.org/ru/docs/Web/API/Window/matchMedia
      // Тут объект с теми же ключами, что и this.breakpoints
      // Отличие в том, что тут хранятся Boolean значения
      // true будет, если текущее разрешение больше, чем звачение этого же свойства в this.breakpoints
    };
    this.device = 'phone';
    this.isMobile = true;
    this.isTouch = false;

    this.updateDeviceClass();

    document.addEventListener('DOMContentLoaded', this.updateDeviceClass);

    window.addEventListener('resize', this.updateDeviceClass);
  }

  updateDeviceClass = () => {
    this._updateMatches();
    this._updateTouchSupport();

    const sortedBreakpoints = (_map(this.breakpoints, (v, key) => [key, v])).sort((a, b) => a[1] - b[1]);
    const oldDevice = this.device;
    this.isMobile = !this.matches.tablet;

    _each(sortedBreakpoints, (v) => {
      if (this.matches[v[0]]) {
        this.device = v[0];
      }
    });

    // fallback to 'phone' on sub-phone widths
    this.device = this.device ? this.device : _first(sortedBreakpoints)[0];
    if (!!oldDevice && oldDevice !== this.device) {
      this.emitDeviceChange();
    }
  };

  emitDeviceChange = () => {
    const event = new CustomEvent('deviceChanged', {
      detail: {
        device: this.device,
      },
    });

    document.dispatchEvent(event);
  };

  _updateMatches = () => {
    this.matches = _mapValues(this.breakpoints, (bp)=> window.matchMedia(`(min-width: ${bp}px)`).matches);
  };

  _updateTouchSupport = () => {
    let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints>0) || (navigator.msMaxTouchPoints>0);
    const html = document.querySelector('html');

    if (!touchsupport) { // browser doesn't support touch
      addClass(html, 'no-touch');
      this.isTouch = false;
    } else { // browser supports touch
      removeClass(html, 'no-touch');
      this.isTouch = true;
    }
  }
}

const lc = new LayoutController();
if(__DEV__) {
  window.lc = lc;
}
export default lc;
