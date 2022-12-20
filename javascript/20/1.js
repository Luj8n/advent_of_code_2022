import fs from "fs";

const numbers = fs
  .readFileSync("20/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

console.log(numbers);
