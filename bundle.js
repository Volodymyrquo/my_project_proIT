
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
const {
  body
} = document;
const h1 = document.createElement('h1');
h1.innerHTML = 'Hello World!';
h1.style.color = 'blue';
body.appendChild(h1);
