const dogs = [
  { name: "snikers", age: 2 },
  { name: "hugo", age: 8 },
];

var p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Styled
console.log("%c I am Groo ", "font-size:40px; background:grey");

// warning
console.warn("0pen");

// Error
console.error("It is wrong");

// Info
console.info("Alchol is reason of sins");

// testing  (şərt səh olanda konsolda görsənir)
console.assert(1 === 2, "that is wrong");
console.assert(p.classList.contains("ouch"), "that is wrong");

// clear
//console.clear()

// DOM Elements
console.log(p);
console.dir(p); // property sin göstərəcək

// Grouping together
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name} is ${dog.age * 2} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
