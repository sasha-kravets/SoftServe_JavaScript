const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('cities');
const selectedInfo = document.getElementById('selectedInfo');

const cities = {
  ger: ['Berlin', 'Hamburg', 'Munich'],
  usa: ['New York', 'Washington', 'Boston', 'Chicago'],
  ukr: ['Kyiv', 'Lviv', 'Kharkiv']
};

// create the city selector with options on page load
createCitySelect();

countrySelect.addEventListener('change', () => {
  updateCitySelect();
  updateSelectedInfo();
});

citySelect.addEventListener('change', () => {
  updateSelectedInfo();
});

function createCitySelect() {
  const selectedCountry = countrySelect.value;
  const selectedCities = cities[selectedCountry] || [];

  // Clear the city selector before updating
  citySelect.innerHTML = '';

  // Add new city options
  selectedCities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });

  updateSelectedInfo();
}

function updateCitySelect() {
  createCitySelect();
}

function updateSelectedInfo() {
  const selectedCountry = countrySelect.options[countrySelect.selectedIndex].textContent;
  const selectedCity = citySelect.value;
  selectedInfo.textContent = `${selectedCountry}, ${selectedCity}`;
}