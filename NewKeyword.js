//Functional approach of defining objects

var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`)
    };
};

var Sunny = new User("Sunny", 2)
var Payal = new User("Payal", 2)
var jhapu = new User("jhapu", 2)


console.log(Sunny)
console.log(Payal)
console.log(jhapu)