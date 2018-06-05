/*
 * Create the function factorial here
 */
 
function factorial(x) {
    if(x>=1 && x<=10) {
        return(x*factorial(x-1));
    }
    else if(x==0)
        return(1);
}

function main() {
    const n = 5;
    console.log(factorial(n));
}