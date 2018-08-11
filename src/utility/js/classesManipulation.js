// Returns true if it is a DOM element
export function isElement(o) {
  return (
    typeof HTMLElement === 'object' ? o instanceof HTMLElement : // DOM2
      o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName==='string'
  );
}

/**
 *
 * @param {HTMLElement} el
 * @param {string} className
 */
export function addClass(el, className) {
  !isElement(el) ? console.error(`'addClass'`, 'target is not an element:', el) : null;
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

/**
 *
 * @param {HTMLElement} el
 * @param {string} className
 */
export function removeClass(el, className) {
  console.info(className);
  !isElement(el) ? console.error(`'removeClass'`, 'target is not an element:', el) : null;
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

/**
 *
 * @param {HTMLElement} el
 * @param {string} className
 */
export function hasClass(el, className) {
  !isElement(el) ? console.error(`'hasClass'`, 'target is not an element:', el) : null;
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

