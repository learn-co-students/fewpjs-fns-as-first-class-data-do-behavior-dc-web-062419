/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let hour = parseInt(time, 10)
  if (hour < 12) {
    return "Good Morning"
  }
  else if (hour > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(tiempo) {
  document.getElementById('greeting').innerText = tiempo;
}