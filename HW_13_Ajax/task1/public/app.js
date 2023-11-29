const voteButton = document.getElementById('voteButton');

voteButton.addEventListener('click', function () {
  castVote();
});

function castVote() {
  fetch('/vote', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      voteButton.textContent = `Your vote is accepted: ${data.date}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}