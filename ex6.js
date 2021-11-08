function reverse(a){
    let result = [];
    for(let i = 0; i < a.length; i++){
       
        if(a[i]===0){
            result[i]=1;
        }
        else{
            result[i] = 0;
        }
    }
    return result;
}
console.log(reverse([1,0,1,0,1]));