const list = document.querySelector('#list');
const showContentBtn = document.querySelector('#showContent');
showContentBtn.onclick = () => {
  showListContent(list)
}

function showListContent(list) {
  const items = list.querySelectorAll('li');
  const result = [
    items[0].textContent,
    items[items.length - 1].textContent,
    items[1].textContent,
    items[3].textContent,
    items[2].textContent
  ]

  for (let itemContent of result) {
    alert(itemContent)
  }
}