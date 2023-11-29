const API_URL = 'https://randomuser.me/api/';

async function fetchUserData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

function renderUserData(user) {
  console.log(user);
  return `
            <div class="container mt-5">
              <div class="card" style="width: 18rem;">
                <img src="${user.picture.large}" class="card-img-top" alt="User Avatar" id="userAvatar">
                <div class="card-body">
                  <h5 class="card-title" id="userName">${user.name.first} ${user.name.last}</h5>
                  <p class="card-text" id="userAge">Age: ${user.dob.age}</p>
                  <p class="card-text" id="userGender">Gender: ${user.gender}</p>
                  <p class="card-text" id="userCountry">Country: ${user.location.country}</p>
                  <p class="card-text" id="userLogin">Login: ${user.login.username}</p>
                  <p class="card-text" id="userPassword">Password: ${user.login.password}</p>
                  <p class="card-text" id="userEmail">Email: ${user.email}</p>
                </div>
              </div>
            </div>
          `;
}

async function main() {
  const userData = await fetchUserData();
  const userInfoContainer = document.getElementById('user-info');
  userInfoContainer.innerHTML = renderUserData(userData);
}

main();