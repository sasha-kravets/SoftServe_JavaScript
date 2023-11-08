const dropdown = document.getElementById('dropdown');
const deleteBtn = document.getElementById('deleteBtn');

deleteBtn.addEventListener('click', () => {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  if (selectedOption) {
    dropdown.remove(dropdown.selectedIndex);
  }
});