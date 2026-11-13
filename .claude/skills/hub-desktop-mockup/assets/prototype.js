/* Hub prototype runtime. Copy next to hub.css and load it at the end of every page:
     <script src="prototype.js"></script>
   It makes static mockups usable in a browser:
   - fit to window: scales the 1920x1030 .window down to the viewport (never up)
   - navigation:    any element with data-href="other-page.html" opens that page
   - collapsibles:  clicking a collapsible bar opens/closes it
   - jump nav:      clicking a link opens its collapsible and scrolls to it
   - selection:     clicking a list tile, tree node, segment, tab pill or grid row selects it
   Add page-specific behaviour (swapping content from a data object, inline editing, ...)
   in a small inline <script> after this one. Add data-static to an element to opt it
   out of the selection behaviour. */
(function () {
  var win = document.querySelector('.window');
  if (win) {
    document.documentElement.style.overflow = 'hidden';
    var fit = function () {
      var s = Math.min(1, window.innerWidth / 1920, window.innerHeight / 1030);
      win.style.transformOrigin = '0 0';
      win.style.transform = s < 1 ? 'scale(' + s + ')' : '';
    };
    window.addEventListener('resize', fit);
    fit();
  }

  function selectOne(el, cls, group) {
    if (el.closest('[data-static]')) return;
    var scope = el.parentElement;
    Array.prototype.forEach.call(scope.querySelectorAll(group), function (x) {
      if (x.parentElement === scope) x.classList.remove(cls);
    });
    el.classList.add(cls);
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    var link = t.closest('[data-href]');
    if (link) { window.location.href = link.getAttribute('data-href'); return; }

    var bar = t.closest('.collapsible-bar');
    if (bar && !t.closest('.collapsible-tools')) { bar.parentElement.classList.toggle('is-open'); return; }

    var jump = t.closest('.jump-nav a');
    if (jump) {
      e.preventDefault();
      var name = jump.textContent.trim();
      Array.prototype.forEach.call(document.querySelectorAll('.collapsible'), function (c) {
        var b = c.querySelector('.collapsible-bar');
        if (b && b.textContent.trim().indexOf(name) === 0) { c.classList.add('is-open'); c.scrollIntoView({ block: 'start' }); }
      });
      selectOne(jump, 'is-current', 'a');
      return;
    }

    var pick = [['.list-tile', 'is-active'], ['.tree-node', 'is-selected'], ['.segment', 'is-active'],
                ['.tab-pill', 'is-active'], ['.file-chip', 'is-selected'], ['.menu-item', 'is-selected']];
    for (var i = 0; i < pick.length; i++) {
      var el = t.closest(pick[i][0]);
      if (el) { selectOne(el, pick[i][1], pick[i][0]); return; }
    }

    var row = t.closest('table.data-grid tbody tr');
    if (row && !t.closest('.checkbox') && !row.classList.contains('is-new')) { selectOne(row, 'is-selected', 'tr'); return; }

    var box = t.closest('.checkbox, .radio');
    if (box && !box.closest('.is-readonly') && !box.closest('[data-static]')) {
      if (box.classList.contains('radio')) {
        var group = box.closest('.option-group');
        if (group) Array.prototype.forEach.call(group.querySelectorAll('.radio'), function (r) { r.classList.remove('is-checked'); });
        box.classList.add('is-checked');
      } else {
        box.classList.toggle('is-checked');
      }
    }
  });

  // Clicking an option's text toggles its control
  document.addEventListener('click', function (e) {
    var o = e.target.closest('.option');
    if (o && !e.target.closest('.checkbox, .radio')) {
      var c = o.querySelector('.checkbox, .radio');
      if (c) c.click();
    }
  });
})();
