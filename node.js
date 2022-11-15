// const fs = require("fs");
// data = fs.readFileSync("ajay.txt");
// const org = data.toString();
// console.log(org);
let arr = [5, 2, 6, 4];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

}
console.log(arr)
