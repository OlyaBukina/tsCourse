// First task

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

const add = (num1: number, num2: number) => {
  return num1 + num2;
};
button?.addEventListener("click", () => {
  console.log(add(+input1.value, +input2.value));
});

// Second task

let age: number;
age = 50;
let firstName: string;
firstName = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number): number => {
  return 100 + a;
};
callback(10);

let anything: any;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

enum Status {
  "LOADING",
  "READY",
}
const page = {
  status: Status.LOADING,
};
if (page.status === Status.LOADING) {
  console.log("Page is loading...");
}
if (page.status === Status.READY) {
  console.log("Page is ready!");
}

let union: string | number;

let literal: "enable" | "disable";

// Functions types

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type pageData = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: pageData = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: pageData = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
