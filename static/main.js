$(document).ready(initialize);

function initialize() {
  $('#btn1').click(doStuff);
  $('#btn2').click(timer);
  $('#btn3').click(clear);
  $('#btn4').click(numbers);
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`
}

function doStuff() {
  $('h1').css('color', 'red');
  $('h2').css('background-color', 'blue');
  $('h3').text('Cool');
  $('h3').toggleClass('awesome');
  $('#alpha').toggleClass('cool');
  let txt = $('#txt1').val();
  console.log('txt:', txt);
  $('h1').css('background-color',txt);
  $('body').css('background-color', randomColor());
}
let id;
function timer() {
  id = setInterval(function(){
    $('body').css('background-color', randomColor());
  }, 100);
}

function clear() {
  clearInterval(id);
}

function numbers() {
  $(`#numbers`).empty();
  for (let i = 0; i < 20; i++){
    let r = Math.random();
    $(`#numbers`).append(`<li>${r}</li>`);
  }

}
