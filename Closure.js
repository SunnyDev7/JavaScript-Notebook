// global context

function init(){
    var firstName = "Sunny"

    function sayFirstName(){
        console.log(firstName)
    }
    return sayFirstName; //refrencing it only and not calling it.
}

var value = init(); //refrence

value();
