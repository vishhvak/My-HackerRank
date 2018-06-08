/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0)
        return "YES";
    else if (a == 0)
        throw new Error("Zero Error");
    else if (a < 0)
        throw new Error("Negative Error");
}

function main() {
    const n = 3;
    a = [1,0,-2];
    for (let i = 0; i < n; i++) {
        let r = a[i];
      
        try {
            console.log(isPositive(r));
        } catch (e) {
            console.log(e.message);
        }
    }
}