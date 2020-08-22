// Create a moment.js for current date at planner head - assign to currentday id 
// moment(); 
$("#currentDay").text(moment().format('dddd' + ', ' + 'MMMM Do YYYY'));

console.log(moment().format());

// Our Work Day Schedule only accounts for the hours between 9am - 5pm. 
// We need to have a 24 hours running clock, but only utilizing the hours between 9am-5pm. 
// moment().startOf('day')= 12am +9hrs 
// 9am will be initial variable, each proceeding will be manipulated with .add to add +1 hour

//variable for start of day (12am) + 9 hours 
var startOfDay = moment().startOf('date').add(9, 'hours'); 

console.log(startOfDay); 

//local storage nightmare goes here ????
//store input text to local storage, make retrievable upon refresh 

localStorage.getItem(); 

localStorage.setItem(); 


//calender times starting at 9am, +1, appended to appropriate span class 
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

//function to add classes per current time. 

//current time
currentTime = moment(); 
    console.log(currentTime);

//function will take each time variable and compare to current time to assign past, present, future
function timeView() {

    //conditional to assign class outcome dependent on time 
    //9am = start of day + 9hours, 9 pointing at data-hour in html

    //had to declare current time as defined to hours for present class to display
    currentTime = currentTime.startOf('hour');

    cal9am = moment().startOf('date').add(9, 'hours');
    console.log(cal9am);
    // past/present/future class appending to .time-color, depending on t.o.d. 

    //if current time is after 9am, this will be in past
     if (currentTime.isAfter(cal9am)) {
         $(".time-color9").addClass("past");
    //if current time is the same as 9am hour, then present 
     } else if (currentTime.isSame(cal9am)) {
         $(".time-color9").addClass("present");
    //if current time is before 9am, this will show future 
     } else if (currentTime.isBefore(cal9am)) {
         $(".time-color9").addClass("future");
     };

    //+10 hours to start of day
    cal10am = moment().startOf('date').add(10, 'hours');

     if (currentTime.isAfter(cal10am)) {
        $(".time-color10").addClass("past");
    } else if (currentTime.isSame(cal10am)) {
        $(".time-color10").addClass("present");
    } else if (currentTime.isBefore(cal10am)) {
        $(".time-color10").addClass("future");
    };

    //+11 hours to start of day
    cal11am = moment().startOf('date').add(11, 'hours');

    if (currentTime.isAfter(cal11am)) {
        $(".time-color11").addClass("past");
    } else if (currentTime.isSame(cal11am)) {
        $(".time-color11").addClass("present");
    } else if (currentTime.isBefore(cal11am)) {
        $(".time-color11").addClass("future");
    };

    //+12 hours to start of day 
    cal12pm = moment().startOf('date').add(12, 'hours');

    if (currentTime.isAfter(cal12pm)) {
        $(".time-color12").addClass("past");
    } else if (currentTime.isSame(cal12pm)) {
        $(".time-color12").addClass("present");
    } else if (currentTime.isBefore(cal12pm)) {
        $(".time-color12").addClass("future");
    };

    //+13 hours to start of day
    cal1pm = moment().startOf('date').add(13, 'hours');

    if (currentTime.isAfter(cal1pm)) {
        $(".time-color1").addClass("past");
    } else if (currentTime.isSame(cal1pm)) {
        $(".time-color1").addClass("present");
    } else if (currentTime.isBefore(cal1pm)) {
        $(".time-color1").addClass("future");
    };

    //+14 hours to start of day
    cal2pm = moment().startOf('date').add(14, 'hours');

    if (currentTime.isAfter(cal2pm)) {
        $(".time-color2").addClass("past");
    } else if (currentTime.isSame(cal2pm)) {
        $(".time-color2").addClass("present");
    } else if (currentTime.isBefore(cal2pm)) {
        $(".time-color2").addClass("future");
    };

    //+15 hours to start of day 
    cal3pm = moment().startOf('date').add(15, 'hours');

    if (currentTime.isAfter(cal3pm)) {
        $(".time-color3").addClass("past");
    } else if (currentTime.isSame(cal3pm)) {
        $(".time-color3").addClass("present");
    } else if (currentTime.isBefore(cal3pm)) {
        $(".time-color3").addClass("future");
    };

    //+16 hours to start of day 
    cal4pm = moment().startOf('date').add(16, 'hours');

    if (currentTime.isAfter(cal4pm)) {
        $(".time-color4").addClass("past");
    } else if (currentTime.isSame(cal4pm)) {
        $(".time-color4").addClass("present");
    } else if (currentTime.isBefore(cal4pm)) {
        $(".time-color4").addClass("future");
    };
    
    //5pm = start of day + 17 hours on 24 hour (military) clock 
    cal5pm = moment().startOf('date').add(17, 'hours'); 

    if (currentTime.isAfter(cal5pm)) {
        $(".time-color5").addClass("past");
    } else if (currentTime.isSame(cal5pm)) {
        $(".time-color5").addClass("present");
    } else if (currentTime.isBefore(cal5pm)) {
        $(".time-color5").addClass("future");
    };

}

timeView();