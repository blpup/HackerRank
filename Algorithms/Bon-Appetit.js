// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    bill.splice(k,1)
    let total = bill.reduce((a, b) => a + b)
    if ((total / 2) == b) {
        console.log("Bon Appetit");
    } else {
        console.log(b- (total / 2) );
    }
}
