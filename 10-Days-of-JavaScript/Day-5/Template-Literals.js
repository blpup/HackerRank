function sides(literals, ...expressions) {
    let arr = [];
    let p = expressions[1];
    let a = expressions[0];
    let s1 = (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4
    let s2 = (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4
    arr.push(s1, s2);
    arr.sort((a, b) => a - b); 
    return arr;
}
