// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    arr = arr.sort((a, b) => a - b);
    let count = 0;
    let number = 0;
    let testArray = []

    arr.forEach(function (n, idx, array) {
        if (number == 0) {
            number = n;
        };
        if (number == n) {
            count += 1;
        } else {
            testArray.push({count,number})
               
        
            number = n;
            count = 0;
            count += 1;
        }
        if (idx === array.length - 1) {
            testArray.push({ count, number })
        }
    })
    
    testArray = testArray.sort((a, b) => b.count - a.count || a.number - b.number)
    console.log(testArray)
    return testArray[0].number;
}
