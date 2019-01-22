function getCount(objects) {
    let counter = 0;

    objects.forEach(function (a) {
        if (a.x == a.y) {
            counter++
        }
    })
    return counter;
}
