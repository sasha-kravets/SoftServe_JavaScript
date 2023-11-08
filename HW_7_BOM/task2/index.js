const textElement = document.getElementById('text');
const btn = document.getElementById('btn');

const changeCSS = () => {
  textElement.style.color = 'orange';
  textElement.style.fontSize = '20px';
  textElement.style.fontFamily = 'Comic Sans MS';
}

btn.addEventListener('click', changeCSS);