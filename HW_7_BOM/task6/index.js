function displayWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const resizeInfo = document.getElementById('resize-info');
  resizeInfo.textContent = `Width: ${width}px, Height: ${height}px`;
}

displayWindowSize();
window.addEventListener('resize', displayWindowSize);