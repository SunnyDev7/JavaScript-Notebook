// global context

function init(){
    var firstName = "Sunny"

    function sayFirstName(){
        console.log(firstName)
    }
    sayFirstName(); //execution contex
}

init(); //execution context
console.log(firstName) //global context
