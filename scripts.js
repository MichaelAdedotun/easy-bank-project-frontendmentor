const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


open.addEventListener("click",(e) => {
    e.preventDefault();
    modal.classList.add('show-modal');
    open.style.display = 'none';
    close.style.display = 'inline';
})

close.addEventListener("click",(e) => {
    e.preventDefault();
    modal.classList.remove('show-modal');
    open.style.display = 'inline';
    close.style.display = 'none';
})
