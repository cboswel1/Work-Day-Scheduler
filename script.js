// Create a moment.js for current date at planner head - assign to currentday id 
moment(Date); 
$("#currentDay").text(moment().format('dddd' + ', ' + 'MMMM Do YYYY'));

console.log(moment().format());