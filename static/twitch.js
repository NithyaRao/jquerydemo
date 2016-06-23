$(document).ready(init);

function init() {
  $('#fetch').click(fetch);
}

function fetch() {
  $.ajax({
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'get',
    dataType: 'json',
    success: function(rsp) {
      console.log('data:', rsp);
      let games = rsp.top;
      games.forEach(g => {
        let name = g.game.name;
        let art = g.game.box.medium;
        $('#games').append(`<div><p>${name}</p><img src="${art}"></div>`);
      });
    }
  });
}
