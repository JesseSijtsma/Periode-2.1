const btn = document.getElementById('btn');
let flat = document.querySelector('.patch')

const slide = () => {
  flat.classList.toggle('patch--slide-out')
}

btn.addEventListener('click', slide);
