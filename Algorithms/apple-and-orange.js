function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let list = [];
    let legalApples = apples.filter(function (n) {
        let l = n + a;
        if (l >= s && l <= t) {
            return n;
        }
            
    });

    let legalOranges = oranges.filter(function (n) {
        let l = n + b;
        if (l >= s && l <= t) {
            return n;
        }
    });
    console.log(legalApples.length);
    console.log(legalOranges.length);
    
}
