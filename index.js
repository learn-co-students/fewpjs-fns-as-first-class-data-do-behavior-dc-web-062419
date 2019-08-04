/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function greet(timeString){

  let stringSplit = timeString.split(":")
  let timeHour = stringSplit[0]

 if (timeHour < 12) {
   return  "Good Morning"; }
    else if (timeHour < 18) {
     return  "Good Afternoon"
    }
    else {
    return  "Good Evening"
    }
    
  }
  
  
  function displayMessage(x){

    document.getElementById("greeting").innerText = x;
  }


