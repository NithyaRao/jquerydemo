$(document).ready(init);
function init() {
  $('#new').click(newgame);
  $('#toss').click(flip);
}

function randomnum(){
  let r = Math.floor(Math.random() * 2);
  return `${r}`
}
function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      update(rsp);
    }
  });
}

function flip(){
  const toss = randomnum();
  const id = $('#id').text();
  $.ajax({
    url: `/games/${id}/flip`,
    method: 'put',
    dataType: 'json',
    data: { toss } ,
    success: function(rsp){
      update(rsp);
    }
  });
}

function update(game) {
  $('#person').text(game.name);
  $('#id').text(game._id);
  $('#heads').text(game.heads);
  $('#tails').text(game.tails);
  console.log('rsp:', game);
}
