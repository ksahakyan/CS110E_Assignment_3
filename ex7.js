function Add(a,b){
        
    let diff = Math.abs(a.length - b.length);
    if(a.length > b.length){

        for(let i = 0;i < diff; i++){
            b.unshift(0);
        }

    }
    else{

        for(let i = 0;i < diff; i++){
            a.unshift(0);
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

function reverse(a){
    let result = [];
    for(let i = 0; i < a.length; i++){
        
        if(a[i]===0)result[i]=1;

        else{
            result[i] = 0;
        }
    }
    return result;
}

function positiveToNegative(a){
    let result = reverse(a);
    result = Add(result,[1]);
    return result;
}

let number = [0,1,1,0,1];
result = positiveToNegative(number);
console.log(result);