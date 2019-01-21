function vowelsAndConsonants(s) {
    s = s.split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    s.forEach(function (l) {
        if (vowels.indexOf(l.toLowerCase()) >= 0)
            console.log(l);
    });
    s.forEach(function (l) {
        if (vowels.indexOf(l.toLowerCase()) < 0)
            console.log(l);
    });
}
