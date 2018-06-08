/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
    var arr = s.split("");
    var rev = arr.reverse();
    var revs = arr.join("");
    console.log(revs);
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}

function main() {
    const s = "1234"; //or Number(1234)
    reverseString(s);
}