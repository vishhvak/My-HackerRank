/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var length = a;
    var width = b;
    var area = a*b;
    var perimeter = 2*(a+b);
    var rect = {length, width, area, perimeter};
    return rect;
}

function main() {
    const a = 5;
    const b = 4;
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}