function Prime(x) {
    let sqrtNum = Math.floor(Math.sqrt(x)); //x under square root and takes the integer part
    if ( x <= 1) {
        return false
    }
    for ( let i = 2; i <= sqrtNum; i++ ) {
        if ( x % i === 0) {
            return false;
        }
    }
    return true
}
console.log(Prime(6));