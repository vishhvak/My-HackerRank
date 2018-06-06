function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        let l = s[i];
        if (l == 'a' || l == 'e' || l == 'i' || l == 'o' || l == 'u')
            console.log(l);
    }
    for (var j = 0; j < s.length; j++) {
        let c = s[j];
        if (c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u')
            console.log(c);
    }
}

function main() {
    const s = 'javascriptloops';
    vowelsAndConsonants(s);
}