/* Progressive enhancement: articles, links and all cards work without JS. */
(() => {
  const dialog = document.querySelector('.lightbox');
  if (dialog && typeof dialog.showModal === 'function') {
    const image = dialog.querySelector('img');
    const caption = dialog.querySelector('p');
    document.querySelectorAll('[data-screenshot]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        image.src = link.href;
        image.alt = link.querySelector('img').alt;
        caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
        dialog.showModal();
      });
    });
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  }
  const filters = document.querySelector('[data-filters]');
  if (!filters) return;
  filters.hidden = false;
  const query = filters.querySelector('input');
  const category = filters.querySelector('select');
  const cards = [...document.querySelectorAll('[data-post]')];
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  const update = () => {
    const terms = normalize(query.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    cards.forEach(card => {
      const text = normalize(card.textContent);
      const matches = terms.every(term => text.includes(term)) && (!category.value || card.dataset.category === category.value);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    document.querySelector('[data-count]').textContent = `${visible} / ${cards.length} bài viết`;
    document.querySelector('[data-empty]').hidden = visible > 0;
  };
  query.addEventListener('input', update);
  category.addEventListener('change', update);
})();
