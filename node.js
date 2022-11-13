const fs = require("fs");
data = fs.readFileSync("ajay.txt");
const org = data.toString();
console.log(org);
