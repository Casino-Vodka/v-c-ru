(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    var onCachePage = window.location.pathname.indexOf('/public/cache/') !== -1;
    if (!onCachePage) return;

    var toIndex = function(anchor){
      return window.location.origin + '../index.html' + anchor;
    };

    var links = document.querySelectorAll('a[href]');
    links.forEach(function(link){
      var href = link.getAttribute('href') || '';

      if (href === 'index.html/index.html' || href === '../index.html' || href === 'vodka-deposit' || href === '../../index.html') {
        link.setAttribute('href', toIndex('#vodka-deposit'));
      }
      if (href === 'index.html/index.html' || href === '../index.html' || href === 'vodka-withdrawal'|| href === '../../index.html') {
        link.setAttribute('href', toIndex('#vodka-withdrawal'));
      }
    });
  });
})();
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  if ((currentPath === "../vivod.html" || currentPath === "../deposit.html") 
      && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    window.location.href = currentPath;
  }
});