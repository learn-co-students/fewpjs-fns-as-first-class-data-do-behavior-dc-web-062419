/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
    let hours = parseInt(time.split(":")[0])
    let message
    if (hours < 13) {
        message = "Good Morning"
    } else if (hours < 18) {
        message = "Good Afternoon"
    } else {
        message = "Good Evening"
    }
    return message
}

function displayMessage(message) {
    let greeting = document.getElementById("greeting")
    greeting.innerText = message

}