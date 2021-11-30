const uno = () => {
    console.log("I am one")
}

const dos = () => {
    setTimeout(() => {
        console.log("I am two")
    }, 5000)
}

const tres = () => {
    console.log("I am three")
}

uno()
dos() //5sec
tres()



