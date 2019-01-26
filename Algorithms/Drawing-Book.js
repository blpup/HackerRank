/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    let leftSide = p;
    let rightSide = n - p;
    let totalFlips = 0;
    if (leftSide <= rightSide) {
        totalFlips = Math.floor(leftSide / 2);
    } else {
        if ((rightSide / 2) < 1 && (n%2) == 0) {
            totalFlips = Math.ceil(rightSide / 2);
        } else {
            totalFlips = Math.floor(rightSide / 2);
        }
        
    }
    return totalFlips;
}
