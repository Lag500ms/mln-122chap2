
// UI enhancement helpers (additive)
// toggle collapse using max-height class
function toggleCollapseWithAnim(bodyId){
  const el = document.getElementById(bodyId);
  if(!el) return;
  if(el.classList.contains('open')){
    el.classList.remove('open');
    el.setAttribute('aria-hidden','true');
    const btn = el.parentElement.querySelector('.collapse-toggle');
    if(btn) btn.setAttribute('aria-expanded','false');
  } else {
    el.classList.add('open');
    el.setAttribute('aria-hidden','false');
    const btn = el.parentElement.querySelector('.collapse-toggle');
    if(btn) btn.setAttribute('aria-expanded','true');
  }
}

// debounce helper
function debounce(fn, wait){
  let t;
  return function(...args){
    clearTimeout(t);
    t = setTimeout(()=> fn.apply(this,args), wait);
  };
}

// ensure IntersectionObserver exists
if(!window.IntersectionObserver){
  // simple polyfill stub (non-functional reveal but avoids errors)
  window.IntersectionObserver = function(){ this.observe = ()=>{}; this.unobserve = ()=>{}; };
}

// enhance reveal observer performance (debounced scroll handler for any extra logic)
const debouncedOnScroll = debounce(() => {
  // placeholder for any lightweight scroll-driven UI updates
  // currently we don't override existing reveal logic; keep minimal
}, 80);
window.addEventListener('scroll', debouncedOnScroll);

// expose small helpers for inline buttons (poll/quiz use existing functions)
// no destructive changes to existing quiz logic
