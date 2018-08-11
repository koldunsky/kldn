function whichAnimationEvent() {
  let t;
  const el = document.createElement("fakeelement");

  const animations = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}

window.animationEvent = whichAnimationEvent();
