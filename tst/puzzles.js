import fs from 'fs';

let puzzles = JSON.parse(fs.readFileSync("../tst/inputs/puzzles/puzzles.json"));
let solutions = JSON.parse(fs.readFileSync("../tst/inputs/programs/solve_puzzles.json"));

export {puzzles,solutions};
