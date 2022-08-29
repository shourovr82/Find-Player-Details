const loadPlayer = () => {
  const srv = document.body.style.backgroundColor = '#444';
  const searchField = document.getElementById('search-field').value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchField}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}

const displayPlayer = (player) => {
  const playerContainer = document.getElementById('player-container');
  playerContainer.innerHTML = '';
  player.forEach(person => {
    const playerDiv = document.createElement('div');
    playerDiv.innerHTML = `
  
<div class="card mb-3 shadow-lg">
  <img src="${person.strThumb ? person.strThumb : 'https://i.ibb.co/x7DKpVr/c40d90e90734115506d5162bb887b62d-2.png'}" class="card-img-top" style="max-height:35rem;">
  <div class="card-body">
    <h5 class="card-title text-uppercase">NAME : ${person.strPlayer}</h5>
    <p class="card-text">${person.strDescriptionEN ? person.strDescriptionEN.slice(0, 250) : 'Not Available'}</p>
    <div class="d-flex justify-content-between">
    <p class="card-text"><small class="text-muted">Birth Place: ${person.strBirthLocation}</small></p>
    <p class="card-text"><small class="text-muted">Player Height: ${person.strHeight ? person.strHeight : 'Not available'}</small></p>
    </div>
  </div>
</div>
  `;
    playerContainer.appendChild(playerDiv)
  });
}




