const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.work-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.style.display = show ? 'flex' : 'none';
    });
  });
});

(function () {
  const overlay = document.getElementById('cvOverlay');
  const closeBtn = document.getElementById('closeCvBtn');

  function openCvModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeCvModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.openCvModal = openCvModal;
  window.closeCvModal = closeCvModal;

  closeBtn.addEventListener('click', closeCvModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeCvModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeCvModal();
  });

  document.querySelectorAll('[data-open-curriculo]').forEach((el) => {
    el.addEventListener('click', openCvModal);
  });
})();