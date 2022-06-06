// Code that requires the DOM be loaded should not be run until the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')
  exampleForm.addEventListener('submit', function(event) {
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]
    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if (!isNaN(userNumber)) {
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''

    //forEach method
    //establish array with variable name
    let arrayOne = [1, 2, 3];
    const inputFieldOne = document.querySelector('#example-form .input-one')
    const userInputOne = inputFieldOne.value
    //create ES6 forEach method function
    arrayOne.forEach(function(value, key) {
      //function to add value following previous value in array then change output to result
      const methodOne = arrayOne.reduce((accumulator, currentElement) => accumulator + currentElement);
      document.querySelector('#example-form .output-one').innerHTML = methodOne
    })

    //map method
    //establish array and variable name
    let arrayTwo = [5, 6, 7];
    //create ES6 map method function
    let arrayThree = arrayTwo.map(function(value) {
      //function to return each value in array time 15 and then console log the result
      return value * 15
    });
    //display result of map method function in console log.
    console.log(arrayThree)

    //every method
    //establish array and variable name
    let arrayFour = [9, 10, 11];
    //capture input field
    let inputThree = document.querySelector('#example-form .input-three').value
    //create ES6 every method function
    arrayFour.every(function(value) {
      const methodThree = arrayThree.reduce((accumulator, currentElement) => accumulator / currentElement);
      //display results of function in output field.
      document.querySelector('#example-form .output-three').innerHTML = methodThree;
    })

    //filter method
    //establish array and variable name
    let arrayFive = [10, 11, 12];
    //create ES6 filter method function that returns values in array greater than 11.
    let arraySix = arrayFive.filter(function(value) {
      return value > 11;
    })
    console.log(arraySix)

    //arrow method
    //establish array with variable name
    let arraySeven = [20, 30, 40];
    //creating variable in which find method function will employ arrow method
    let over30 = arraySeven.find(value => value > 30);
    //displaying result of arrow method within find function.
    console.log(over30);

  })
})
