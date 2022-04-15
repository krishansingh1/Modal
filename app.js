const open = document.querySelector('.btn');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');

open.addEventListener('click', () => {
    console.log(modal.classList);
    modal.classList.add('open-modal')
})

close.addEventListener('click', () => {
  modal.classList.remove('open-modal')
})