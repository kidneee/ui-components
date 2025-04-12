const modal = document.getElementById('modal');

document.getElementById('openModalBtn').addEventListener('click', () => {
  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
});

document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
});
