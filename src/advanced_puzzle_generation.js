import * as  Robot from './robot.js';
import * as  Puzzle from './puzzle.js';

/**
 * We want to generate a board from a program 
 * and robot initial position.
 */

//Fixing board width and height.
const HEIGHT = 12;
const WIDTH = 16;

function empty_array() {

    return [];
}

//This function create an empty board.
function make_empty_board(array) {

    function empty_line(line) {
    
        if (line.length === WIDTH) {
            return line;
        }
        return empty_line(line + " ");
    }

    if (array.length === HEIGHT) {

        return array;
    }
    return make_empty_board(array.concat(empty_line("")));
}

// console.log(make_empty_board(empty_array()));

//
function insert_color_board(x, y, puzzle, func) {

    puzzle.board[x] = puzzle.board[x]
}