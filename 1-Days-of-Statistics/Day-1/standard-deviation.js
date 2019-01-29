function processData(input) {
    let inputSplitSpace = input.split('\n');
    let numbers = inputSplitSpace[1];
    numbers = numbers.split(' ');
    numbers = numbers.map(n => parseInt(n));
    let numLength = numbers.length;
    let mean = calculateMean(numbers);
    numbers = numbers.map((n) => (Math.pow(n - mean, 2)));
    numbers = numbers.reduce((f, b) => f + b);
    console.log((Math.sqrt(numbers / numLength).toFixed(1)))
} 
function calculateMean(arr) {
    let numerator = 0;
    let denominator = arr.length;

    for (let i = 0; i < denominator; i++){
        numerator += arr[i];
    }

    return numerator/denominator;
}
