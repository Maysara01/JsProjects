let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');


let currentTime = new Date();

date.innerHTML = (currentTime.getDate() < 10 ? '0' : '') + currentTime.getDate();
day.innerHTML = currentTime.toLocaleString('en-US', {weekday: 'long'});
month.innerHTML = currentTime.toLocaleString('en-US', {month: 'long'});
year.innerHTML = currentTime.getFullYear();