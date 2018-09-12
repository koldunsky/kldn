/**
 *
 * @param name {String} - имя события
 * @param data - то, что пойдет в event.detail
 * @param target {HTMLElement} - Если не указан элемент событие сработает на document
 * @param options {Object} - Любые опции, которые пойдут вторым аргументом в new CustomEvent()
 */

export default function triggerEvent(name, data, target = document, options) {
  const event = new CustomEvent(name, {
    detail: data,
    bubbles: true,
    ...options,
  });
  target.dispatchEvent(event);
}
