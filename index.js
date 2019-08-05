/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  var timeHour = timeString.split(":")[0];
  var time = parseInt(timeHour);
  if (time < 12) {
    return "Good Morning";
  }
  else if (time < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
