function binAdd(a,b){
       
    let dif = Math.abs(a.length - b.length);
    if(a.length > b.length){

        for(let i = 0;i < dif; i++){
            b.unshift(0);
        }

    }
    else{

        for(let i = 0;i < dif; i++){
            a.unshift(0); // adds 0 character 
        }

    }

    console.log(" " + a + "\n+\n " + b);

    let result = [];
    let sum = 0;
    let i = a.length - 1;
    let carry = 0;
    while(i >= 0){
        sum = a[i] + b[i] + carry;
        if(sum > 1){
            result.unshift(sum%2);
            carry = 1;
        }
        else{
            result.unshift(sum);
            carry = 0;

        }
        i--;
    }

    return result;

}
console.log([],[])