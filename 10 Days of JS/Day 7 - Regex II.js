function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^Mr\.[A-za-z]+$|^Mrs\.[A-za-z]+$|^Ms\.[A-za-z]+$|^Dr\.[A-za-z]+$|^Er\.[A-za-z]+$/
    /*
     * Do not remove the return statement
     */
    return re;
}

function main() {
    const re = regexVar();
    const s = 'Er.Dr.'
    
    console.log(!!s.match(re));
}