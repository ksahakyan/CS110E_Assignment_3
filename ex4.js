function reverseNum(number) {
    return parseFloat((((number.toString()).split('')).reverse()).join('')) * Math.sign(number)
}
number = -567
console.log(reverseNum(number))
if (reverseNum(number) === number){
    console.log("True")
}else{
    console.log("False")
};