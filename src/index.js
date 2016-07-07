import $ from 'jquery';
import './style.scss';

// set the counter
let counter;
counter = 1;

// function to increment counter
function increment() {
  $('#main').html(`You\'ve been on this page for ${counter} seconds.`);
  counter++;
}

$('#main').html('Here we go!');
setInterval(increment, 1000);
