function reverseNum(num) {
    return parseFloat((((num.toString()).split('')).reverse()).join('')) * Math.sign(num)
}
num = 3200
console.log(reverseNum(num))