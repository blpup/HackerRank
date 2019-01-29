function processData(input) {
    let splitByEnter = input.split('\n');
    let inputs = splitByEnter[1].split(' ');
    inputs = inputs.map((n) => parseInt(n));
    let numbers = splitByEnter[2].split(' ');
    numbers = numbers.map((n) => parseInt(n));
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < numbers.length; i++){
        numerator += inputs[i] * numbers[i];
        denominator += numbers[i];
    }
    console.log((numerator / denominator).toFixed(1));
} 
