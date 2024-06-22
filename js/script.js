//when the page loads, show a button that the user clicks
//when the button is clicked, show a prompt for first name, last name and age
//we will store the three vaue to an object
//print data object values to the brwoser window

const gatherBtn = document.querySelector('#gather-btn');

function gatherInfo() {
   let firstName, lastName, age;
   let ask = true
   
   
   while (ask) {
      firstName = prompt('Please enter your first name');
      if() {
         console.log('hello');
         continue;
      }
      else {
         console.log(firstName);
      }
      /*
      lastName = prompt('Please enter your last name');
      if(!lastName) {
         continue;
      }
      age =prompt('Pleasae enter your age');
      if(!age) {
         continue;
      }
      */
      ask = false;
     }
   }
/*
  while (!firstName || !lastName || !age) {
   firstName = prompt('Please enter your first name');
   lastName = prompt('Please enter your last name');
   age =prompt('Pleasae enter your age');
  }
}
//this would loop until all three values are input
*/


   gatherBtn.addEventListener('click', gatherInfo);

  /*
  
   console.log(firstName);
   }
   if (!firstName || !lastName || !age) {
      alert('You must fill out all values');
      return gatherInfo();
   }
   gatherBtn.addEventListener('click', gatherInfo);
*/










///console.log(gatherBtn.innerText);
///console.log(h1.innerText);


//to make an action after clicking the button
/*
function gatherInfo() {
console.log ('clicked');
}

gatherBtn.addEventListener('click', gatherInfo);

*/