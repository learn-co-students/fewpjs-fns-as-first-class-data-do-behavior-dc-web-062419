/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = strTime => {
  let time = parseInt(strTime, 10);
  if (time < 12) return 'Good Morning';
  if (time < 17) return 'Good Afternoon';
  return 'Good Evening';
};
/* Write your implementation of displayMessage() */

const displayMessage = greeting => {
  document.getElementById('greeting').innerText = greeting;
};
