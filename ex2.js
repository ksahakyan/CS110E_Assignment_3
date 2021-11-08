function Prime(x) {
        let sqrtNum = Math.floor(Math.sqrt(x));
   
        if ( x <= 1) {
           return false
        }
        for ( let i = 2; i <= sqrtNum; i++ ) {
            if( x % i === 0) {
                return false;
            }
       
        }
        return true
    }
    function primesBtw(x, y) {
    let result = [];
    for ( let i = x; i <= y; i++) {
        if( Prime(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(primesBtw(3, 9))