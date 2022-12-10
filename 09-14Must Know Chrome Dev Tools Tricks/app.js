const dogs = [
    {name:"snikers", age:2},
    {name:'hugo',age:8}
];

var p = document.querySelector('p')


function makeGreen() {
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
}


// Regular
  console.log("Hello")

// Styled
   console.log('%c I am Groo ', 
   'font-size:40px; background:grey')

// warning
   console.warn('0pen')

// Error
   console.error("It is wrong")

// Info
   console.info("Alchol is reason of sins")

// testing  (şərt səh olanda konsolda görsənir)
   console.assert(1===2, "that is wrong")
   console.assert(p.classList.contains('ouch'),"that is wrong")

// clear
   //console.clear()

// DOM Elements
   console.log(p)
   console.dir(p) // property sin göstərəcək

// Grouping together
   

