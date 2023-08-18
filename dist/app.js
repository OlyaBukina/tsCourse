"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const add = (num1, num2) => {
    return num1 + num2;
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(add(+input1.value, +input2.value));
});
let age;
age = 50;
let firstName;
firstName = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
callback(10);
let anything;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const page = {
    status: Status.LOADING,
};
if (page.status === Status.LOADING) {
    console.log("Page is loading...");
}
if (page.status === Status.READY) {
    console.log("Page is ready!");
}
let union;
let literal;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=app.js.map