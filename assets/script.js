// HINT: You can delete this console.log after you no longer need it!


console.log('JavaScript code has loaded!')
window.alert ("Java Script code has loaded")

// First, tell us your name
let yourName = "Rosana Moraes" // HINT: Replace this with your own name!


// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

//reference the buttons for gingerbread//
let upButtonGG = document.querySelector("#minus-gb")
let downButtonGG = document.querySelector("#add-gb")





// register listeners for when buttons are clicked for the gingerbread//

downButtonGG.addEventListener("click", function(){
  // <td id="qty-gb">0</td>//
  // assign a new value to an HTML elemnt
  /*var myTable = document.getElementById('myTable');
myTable.rows[0].cells[1].innerHTML = 'Hello';*/

  document.getElementById("qtty-gb").innerHTML = (1);

})

upButtonGG.addEventListener("click", function(){
   window.alert("up button clicked")
   totalQuantity = totalQuantity + 1
   quantityText.textContent = "Quantity: "+ totalQuantity
})

//reference the buttons for chocolate chips //

let upButtonCC = document.querySelector("#minus-cc")
let downButtonCC = document.querySelector("#add-cc")

// register listeners for when buttons are clicked for chocolate chips//

downButton.addEventListener("click", function(){
   //window.alert("down button clicked")
   //if it is 0 we don't want to go negative
   if (totalQuantity > 0 ){
       totalQuantity = totalQuantity - 1
       quantityText.textContent = "Quantity: "+ totalQuantity
   }
})

upButton.addEventListener("click", function(){
   window.alert("up button clicked")
   totalQuantity = totalQuantity + 1
   quantityText.textContent = "Quantity: "+ totalQuantity

}
})

//reference the buttons for Sugar sprinkles //

let upButtonSS = document.querySelector("#minus-sugar")
let downButtonSS = document.querySelector("#add-sugar")

// register listeners for when buttons are clicked for chocolate chips//

downButton.addEventListener("click", function(){
   //window.alert("down button clicked")
   //if it is 0 we don't want to go negative
   if (totalQuantity > 0 ){
       totalQuantity = totalQuantity - 1
       quantityText.textContent = "Quantity: "+ totalQuantity
   }
})

upButton.addEventListener("click", function(){
   window.alert("up button clicked")
   totalQuantity = totalQuantity + 1
   quantityText.textContent = "Quantity: "+ totalQuantity

}
})




// selecting the element with an id of credit


const credit = document.querySelector('#credit')

  
       


// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons