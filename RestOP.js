// its is used during function arguements

function sumTwo(...args){
    let sum = 0;
    for( const arg of args){
        sum = sum + arg
    }
    return sum
}

console.log(sumTwo(2,3,1,4,6))