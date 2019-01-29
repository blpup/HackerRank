function processData(input) {
    let newInput = input.split('\n');
    newInput = newInput[1].split(" ");
    newInput = newInput.map(n => parseInt(n));
    newInput = newInput.sort((a, b) => a - b);
    let len = newInput.length;
    let leftQTile, rightQTile = [];
    if (len % 2 == 0) {
        leftQTile = newInput.slice(0, Math.floor(newInput.length / 2));
         rightQTile = newInput.slice(Math.floor(newInput.length / 2), newInput.length);
    } else {
         leftQTile = newInput.slice(0, Math.floor(newInput.length / 2));
         rightQTile = newInput.slice(Math.floor(newInput.length / 2)+1, newInput.length);
    }

    giveQTile(leftQTile);
    giveQTile(newInput);
    giveQTile(rightQTile);
} 
function giveQTile(arr) {
    let newInput = arr;
    let len = arr.length;

    if (len % 2 == 0) {
        console.log((newInput[len / 2] + newInput[(len / 2)-1]) / 2)
    } else {
        console.log(newInput[Math.floor(len / 2)]);
    }
};
