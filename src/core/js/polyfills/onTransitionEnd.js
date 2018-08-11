// Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEvent(){
  let t;
  const  el = document.createElement("fakeelement");

  const transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

window.transitionEvent = whichTransitionEvent();
