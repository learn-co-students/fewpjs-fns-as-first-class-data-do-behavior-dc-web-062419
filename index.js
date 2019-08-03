/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let num = time.split(':');
  let newNum = num.join('');
  let number = parseInt(newNum);
  if (number < 1200) {
    return "Good Morning"
  } 
  
  if (1700 < number) {
    return 'Good Evening'
  }

  return 'Good Afternoon'
}


function displayMessage(blurb) {
 let element = document.querySelector('#greeting');
 element.innerText = blurb;
}
