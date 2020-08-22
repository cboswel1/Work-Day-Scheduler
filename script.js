// Create a moment.js for current date at planner head - assign to currentday id 
moment(Date); 
$("#currentDay").text(moment().format('dddd' + ', ' + 'MMMM Do YYYY'));

console.log(moment().format());

// Our Work Day Schedule only accounts for the hours between 9am - 5pm. 
// We need to have a 24 hours running clock, but only utilizing the hours between 9am-5pm. 
// moment().startOf('day')= 12am +9hrs 
// 9am will be initial variable, each proceeding will be manipulated with .add to add +1 hour

//variable for start of day (12am) + 9 hours 
var startOfDay = moment().startOf('day').add(9, 'hours'); 

console.log(startOfDay); 


//9am 
var cal9am = startOfDay

cal9am = startOfDay.format('hh:mm a');
console.log(cal9am);

$(".9am").text(cal9am);

//10am 
var cal10am = startOfDay.add(1, 'h'); 

cal10am = startOfDay.format('hh:mm a');
console.log(cal10am);

$(".10am").text(cal10am);

//11am
var cal11am = startOfDay.add(1, 'h'); 

cal11am = startOfDay.format('hh:mm a');
console.log(cal11am);

$(".11am").text(cal11am);

//12am
var cal12pm = startOfDay.add(1, 'h'); 

cal12pm = startOfDay.format('hh:mm a');

$(".12pm").text(cal12pm);

//1pm
var cal1pm = startOfDay.add(1, 'h'); 

cal1pm = startOfDay.format('hh:mm a');

$(".1pm").text(cal1pm);

//2pm
var cal2pm = startOfDay.add(1, 'h'); 

cal2pm = startOfDay.format('hh:mm a');

$(".2pm").text(cal2pm);

//3pm
var cal3pm = startOfDay.add(1, 'h'); 

cal3pm = startOfDay.format('hh:mm a');

$(".3pm").text(cal3pm);

//4pm
var cal4pm = startOfDay.add(1, 'h'); 

cal4pm = startOfDay.format('hh:mm a');

$(".4pm").text(cal4pm);

//5pm
var cal5pm = startOfDay.add(1, 'h'); 

cal5pm = startOfDay.format('hh:mm a');

$(".5pm").text(cal5pm);