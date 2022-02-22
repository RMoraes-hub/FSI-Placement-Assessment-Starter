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
let upButtonGG = document.querySelector("#add-gb")
let downButtonGG = document.querySelector("#minus-gb")

// register listeners for when buttons are clicked for the gingerbread//

downButtonGG.addEventListener("click", function(){
if (gb <= 0){
   window.alert('You cannot have a negative count!')
   return }
gb = gb - 1
let quantityText = document.getElementById('qty-gb')
quantityText.innerHTML = gb
document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})

upButtonGG.addEventListener("click", function(){
   window.alert("up button clicked")
   gb = gb + 1
   let quantityText = document.getElementById ("qty-gb")
   quantityText.innerHTML = gb
   document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})

//reference the buttons for chocolate chips //

let upButtonCC = document.querySelector("#add-cc")
let downButtonCC = document.querySelector("#minus-cc")

// register listeners for when buttons are clicked for chocolate chips//

downButtonCC.addEventListener("click", function(){
  
   if (cc <= 0) {
    window.alert ("You cannot have a negative count!")
    return }
    cc = cc - 1
   let quantityText = document.getElementById ("qty-cc")
   quantityText.innerHTML = cc
   document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})

upButtonCC.addEventListener("click", function(){
   window.alert("up button clicked")
   cc = cc + 1
   let quantityText = document.getElementById ("qty-cc")
   quantityText.innerHTML = cc
   document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})

//reference the buttons for Sugar sprinkles //

let upButtonSS = document.querySelector("#add-sugar")
let downButtonSS = document.querySelector("#minus-sugar")


// register listeners for when buttons are clicked for chocolate chips//

downButtonSS.addEventListener ("click", function (){
   if (sugar <= 0) { 
      window.alert ("You cannot go negative!") 
      return  }
      sugar = sugar - 1
      let quantityText = document.getElementById ("qty-sugar")
      quantityText.innerHTML = sugar
      document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})

upButtonSS.addEventListener ("click",function (){
   window.alert ("up button clicked")
   sugar = sugar + 1
   let quantityText =document.getElementById ("qty-sugar")
   quantityText.innerHTML = sugar
   document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
})


//Add the toal number of orders//

/*   All trials and errots 
<tfoot>
                    <tr>
                        <th>Total</th>
                        <th id="qty-total">0</th>
                    </tr
                    
    var.addNumberr(  function add (gb,cc,sugar)
                    {
                         var.addNumberr(  function addNumbers()

      var gb = document.getElementById("qty-gb").value;
      var cc = document.getElementById("qty-cc").value;
      var sugar = document.getElementById ("qty-sugar").value;
      var added = parseInt(gb) + parseInt(cc) + parseInt ("sugar");           
      var.addNumbers
      function.add ("gb", "cc", "sugar") {let.result = gb + cc+ sugar}
      */ 
     
     document.getElementById("qty-total").innerHTML =+ gb + cc + sugar
   
      
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons