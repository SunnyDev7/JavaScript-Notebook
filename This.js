//For all regular function calls, "this" keyword points to window or global object

console.log(this) //empty

function a(){ //regular fun call
    console.log(this)
}

a()

const cat = { //non-regular
    name: "meow",
    food: "fish",
    action: function(){
        console.log(this)
    }
}

cat.action()


const dog = {
    name: "bhow bhow",
    food: "milk",
    action: function a (){
        function b (){
            console.log(this) //global
        }
    }
}

dog.action()