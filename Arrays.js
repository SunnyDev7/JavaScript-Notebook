var countries = ["a", "b", "c"]

//var states = new Array("A", "B", "C")

//pop() // removes last value
//push() // adds last value
//unshift() //adds value to first place
//shift() //removes first element from array 
//indexof() //shows index of an element


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// countries.splice(1, 2, "x")
// console.log(countries)


//for of
for(const p of countries){
    console.log(p)
}



//forEach
//Map
//Filter


//Reduce
const numbers = [1,-1,2,3]

let sum = 0;
for(let n of numbers)
    sum += n;

console.log(n);

numbers.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
})
