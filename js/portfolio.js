const filterButtons = document.querySelectorAll('[data-filter]');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const filterCount = document.querySelector('.filter-count');
const emptyMessage = document.querySelector('.empty-filter');

if (filterButtons.length && portfolioItems.length) {
  const applyFilter = (category) => {
    let visible = 0;
    portfolioItems.forEach((card) => {
      const show = category === 'all' || card.dataset.category === category;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (filterCount) filterCount.textContent = `${visible} demonstration ${visible === 1 ? 'concept' : 'concepts'} shown`;
    if (emptyMessage) emptyMessage.hidden = visible !== 0;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('is-selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      applyFilter(button.dataset.filter);
    });
  });
  applyFilter('all');
}
