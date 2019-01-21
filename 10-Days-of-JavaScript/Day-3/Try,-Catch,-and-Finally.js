function reverseString(s) {
    try {
        s = s.split('');
        s = s.reverse();
        s = s.join('');
        console.log(s);
    }catch (error) {
        console.log("s.split is not a function");
        console.log(s);
    }
}
