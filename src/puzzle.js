//Initialization of a puzzle: (x, y) is a valid position in the board.
export function make_puzzle(board, robot) {

    return {
            'board': board, 
            'robot': robot
           };
}

/**
 * Defining a cell with it's position in the world and it's content.
 * For the project, we use only four colors:
 * Black, green, red, blue.
 * 
 */

let contents = {'Black': ' ', 'Red': 'r', 'Green': 'g', 'Blue': 'b',
                'star_in_red_case': 'R', 'star_in_green_case': 'G', 
                'star_in_blue_case': 'B'};

export function get__cell_content(puzzle, x, y) {

    return puzzle.board[x][y];
}
                

//Fixing Board width and height.
// const HEIGHT = 12;
// const WIDTH = 16;

/**
 * Boolean that decides if a position is valid in a world:
 * "The robot cannot access to black cell". 
*/
export function is_valid_position(puzzle, x, y) {

    return puzzle.board[x][y] !== contents['Black'];    
}

//Printing robot direction.
let robot_symbols = [">", "v", "<", "∧"];

export function get_robot__symbol(puzzle) {

    return robot_symbols[puzzle.robot.direction];
}

//Print Puzzle if robot position is valid. Alert otherwise.
export function print_puzzle(puzzle) {
    if (is_valid_position(puzzle, puzzle.robot.x, puzzle.robot.y)) { 
        let save_board_row = puzzle.board[puzzle.robot.x].slice(0, puzzle.robot.y).concat(get_robot__symbol(puzzle)).concat(puzzle.board[puzzle.robot.x].slice(puzzle.robot.y+1));
        let save_board = [].concat(puzzle.board);
        save_board[puzzle.robot.x] = save_board_row;
        return save_board;
    }
    return "Invalid robot position or program finished";
}


