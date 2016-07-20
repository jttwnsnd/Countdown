// Get current time in millisecondss since 1970 (UNIX Epoch)
var rioStart = new Date('August, 5, 2016 19:00').getTime();
var rogueOneStart = new Date('December 16, 2016 18:00').getTime();

// Various time units in seconds
var secondsInAMinute = 60;
var secondsInAHour = secondsInAMinute * 60;
var secondsInADay = secondsInAHour * 24;
var secondsInAWeek = secondsInADay * 7;

// Get various DOM elements in bars for Rio
var weeksDigitRio = document.getElementsByClassName('weeks-number')[0]; //elements in an array with same class name.
var daysDigitRio = document.getElementsByClassName('days-number')[0];
var hoursDigitRio = document.getElementsByClassName('hours-number')[0];
var minutesDigitRio = document.getElementsByClassName('minutes-number')[0];
var secondsDigitRio = document.getElementsByClassName('seconds-number')[0];

// Get various DOM elements in bars for Rogue
var weeksDigitRogue = document.getElementsByClassName('weeks-rogue')[0]; //elements in an array with same class name.
var daysDigitRogue = document.getElementsByClassName('days-rogue')[0];
var hoursDigitRogue = document.getElementsByClassName('hours-rogue')[0];
var minutesDigitRogue = document.getElementsByClassName('minutes-rogue')[0];
var secondsDigitRogue = document.getElementsByClassName('seconds-rogue')[0];

var rioWrapper = document.getElementById('rio-wrapper');
var rogueWrapper = document.getElementById('rogue-wrapper');

// update function for Rogue One clock
function updateRogue (){
	var now = Date.now();
	// Time in seconds between current moment and start of Rio 2016
	var getTimeTillRogue = (rogueOneStart - now)/1000;

	// get various units of time til event
	var seconds = Math.floor(getTimeTillRogue % 60)
	var minutes = Math.floor((getTimeTillRogue / secondsInAMinute) % 60);
	var hours = Math.floor((getTimeTillRogue / secondsInAHour) % 24);
	var days = Math.floor((getTimeTillRogue / secondsInADay) % 7);
	var weeks = Math.floor((getTimeTillRogue / secondsInAWeek) % 52);

	// set the HTML of various unit with given amount
	secondsDigitRogue.innerHTML = seconds;
	minutesDigitRogue.innerHTML = minutes;
	hoursDigitRogue.innerHTML = hours;
	daysDigitRogue.innerHTML = days;
	weeksDigitRogue.innerHTML = weeks;
}

// update function for Rio clock
function updateRio(){
	var now = Date.now();
	// Time in seconds between current moment and start of Rio 2016
	var getTimeTillRio = (rioStart - now)/1000;

	// get various units of time til event
	var seconds = Math.floor(getTimeTillRio % 60)
	var minutes = Math.floor((getTimeTillRio / secondsInAMinute) % 60);
	var hours = Math.floor(((getTimeTillRio / 60) / 60) % 24);
	var days = Math.floor((((getTimeTillRio / 60) / 60) / 24) % 7);
	var weeks = Math.floor((((getTimeTillRio / 60) / 60) / 24 / 7) % 52);

	// set the HTML of various unit with given amount
	secondsDigitRio.innerHTML = seconds;
	minutesDigitRio.innerHTML = minutes;
	hoursDigitRio.innerHTML = hours;
	daysDigitRio.innerHTML = days;
	weeksDigitRio.innerHTML = weeks;
}

// which will run our function every 1000 milliseconds (1 sec)
setInterval(updateRio, 1000);
setInterval(updateRogue, 1000);




