function reverseNum(number) {
    return parseFloat((((number.toString()).split('')).reverse()).join('')) * Math.sign(number)
}
number = 3200
console.log(reverseNum(number))