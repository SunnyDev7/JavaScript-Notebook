const Sunny = {
    firstName: "Sunny",
    lastName: "xyz",

    getInfo: function(){
        console.log(`
            FN is ${this.firstName}
            LN is ${this.lastName}
        `)
    }
};

const dj = {
    firstName: "ABC",
    lastName: "LMNO"
}


var djInfo = Sunny.getInfo.bind(dj)
djInfo()

// Sunny.getInfo.call(dj)
