let lcm = (n1, n2) => {
    //Find the gcd first 
   
    let gcd = function(a, b) {
        if (!b) {
          return a;
        }
      
        return gcd(b, a % b);
      }
    //then calculate the lcm
    return (n1 * n2) / gcd;
  }