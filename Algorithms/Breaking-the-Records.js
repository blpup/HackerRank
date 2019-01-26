// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let scoreMax = scores[0];
    let scoreMaxTimes = 0;
    let scoreMin = scores[0];
    let scoreMinTimes = 0;
    scores.forEach(function (i) {
        console.log(i)
        if (i > scoreMax) {
            scoreMax = i;
            scoreMaxTimes++;
        }
        if(i < scoreMin){
            scoreMin = i;
            scoreMinTimes++;
        }
    });
    return [scoreMaxTimes, scoreMinTimes]
}
