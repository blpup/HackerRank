function processData(input) {
    let total = 0;
    input = input.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    input = input[1].split(' ').map(arTemp => parseInt(arTemp, 10));
    total = input.reduce((a, b) => parseInt(a) + parseInt(b));


    let mean = total / input.length;
    console.log(mean);

    input.sort((a, b) => a - b);
    let median = 0;
    if (input.length % 2 == 0) {
        median = (input[input.length/2] + input[(input.length/2) -1])/2
    } else {
        median = (input[Math.floor(input.length / 2)]) / 2;
    };
    console.log(median);

    let items = [];
    let current = 0;
    let maxCount = 0;
    input.forEach(function (i) {
        if (current == 0)
            current = i;
        if (i == current) {
            maxCount += 1;
        } else {
            items.push({ current, maxCount });
            current = i;
            maxCount = 1;
        };

    });
    items.sort((a, b) => b.maxCount - a.maxCount || a.current - b.current);
    console.log(items[0].current)
} 
