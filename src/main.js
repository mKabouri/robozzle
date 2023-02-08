import * as  Robot from './robot.js';
import * as Inter from './interpreter.js';
import { puzzles , solutions } from '../tst/puzzles.js';

// returns the index of a function  in the program

let moves = {'l':Robot.left, 'm':Robot.move, 'r':Robot.right};

function convert_to_instruction(src) {
    
    return {'func':moves[src['func']],'color':src['color']};
}

let aPuzzle = puzzles[process.argv[2]];
let solve = solutions[process.argv[3]];

solve.program[0].func=solve.program[0].func.map(x => convert_to_instruction(x));
solve.program[1].func=solve.program[1].func.map(x => convert_to_instruction(x));


let context = Inter.make_context(solve.program);

Inter.execute_and_print(aPuzzle, context, Robot.throw_error);

