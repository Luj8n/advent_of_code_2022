import fs from "fs";

const text = fs.readFileSync("2/input.txt").toString();

const things = text
  .trim()
  .split("\n")
  .map((x) => x.split(" "));

// toLose
const beats = {
  A: "Z",
  B: "X",
  C: "Y",
};

const toWin = {
  A: "Y",
  B: "Z",
  C: "X",
};

const same = {
  A: "X",
  B: "Y",
  C: "Z",
};

const values = {
  X: 1,
  Y: 2,
  Z: 3,
  K: -1000,
};

let sum = 0;

// things.forEach(([a, b]) => {
//   if (b == same[a]) {
//     sum += 3;
//   } else if (b != beats[a]) {
//     sum += 6;
//   }

//   sum += values[b];
// });

things.forEach(([a, b]) => {
  let x = "K";
  if (b == "X") {
    // lose
    x = beats[a];
  } else if (b == "Y") {
    // draw
    sum += 3;
    x = same[a];
  } else {
    // win
    sum += 6;
    x = toWin[a];
  }

  sum += values[x];
});

console.log(sum);
