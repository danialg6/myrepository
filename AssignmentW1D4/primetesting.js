function testPrime(number){
    for(let i=0;i<=number;i++){
        if(number%i===0){
            return false
        }
    }
    return true;
}
console.log("expect true for 5 "+testPrime(5));
console.log("expect true for 55 "+testPrime(55));