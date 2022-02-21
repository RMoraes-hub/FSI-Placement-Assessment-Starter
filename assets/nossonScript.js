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
let upButtonGB = document.querySelector("#add-gb")
let downButtonGB = document.querySelector("#minus-gb")


// register listeners for when buttons are clicked for the gingerbread//

downButtonGB.addEventListener("click", function(){
   if (gb <= 0){
      window.alert('You cannot have negative!!!')
      return
   }
   gb = gb - 1
   let quantityText = document.getElementById('qty-gb')
   quantityText.innerHTML = gb
})

upButtonGB.addEventListener("click", function(){
   gb = gb + 1
   let quantityText = document.getElementById('qty-gb')
   quantityText.innerHTML = gb
})

//reference the buttons for chocolate chips //

let upButtonCC = document.querySelector("#minus-cc")
let downButtonCC = document.querySelector("#add-cc")

// register listeners for when buttons are clicked for chocolate chips//

downButtonCC.addEventListener("click", function(){
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