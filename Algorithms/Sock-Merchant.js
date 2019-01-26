// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let count = 0;
    let number = 0;
    let all = [];
    let grabAll = 0;
    ar.forEach(function (n, idx, arr) {
        if (number == 0)
            number = n;
        if (n == number) {
            count += 1;
        } else {
            all.push({ number, count });
            count = 0;
            count += 1;
            number = n;
        }
        if (idx === arr.length - 1) {
            all.push({ number, count });
        }
    });
    all.forEach(function (i) {
        grabAll += Math.floor((i.count/2));
    })
    return grabAll
}
