const changeStylesBtn = document.querySelector('#changeStyles');
const header = document.querySelector('h1');
const paragraphs = document.querySelectorAll('#myDiv p');
const myList = document.querySelector('#myList');
const span = document.querySelector('span');

changeStylesBtn.onclick = () => {
  header.classList.toggle('bg-green');
  paragraphs[0].classList.toggle('fw-bold');
  paragraphs[1].classList.toggle('red-text');
  paragraphs[2].classList.toggle('underline');
  paragraphs[3].classList.toggle('fs-italic');
  myList.classList.toggle('inline-list');
  span.classList.toggle('hidden');
}