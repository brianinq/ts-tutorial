"use strict";
let age = 45;
if (age < 50)
    age + 5;
const numbers = [1, 2, 3, 4, 5];
let user = [26, "Brian"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculate(income) {
    if (income < 1000)
        return income * 1.3;
    return income * 1.3;
}
console.log(calculate(12333));
//# sourceMappingURL=index.js.map