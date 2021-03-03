let gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(3, 5));