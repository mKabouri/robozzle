import * as Puzzle from '../src/puzzle.js';
import * as Robot from '../src/robot.js';

let aPuzzle2 = {
    board: [ '                ',
             '                ',
             '                ',
             '         bB     ',
             '        bB      ',
             '       bB       ',
             '      bB        ',
             '     bB         ',
             '    Bb          ',
             '   Bb           ',
             '    bbb         ',
             '                ' ],
    robot: { x: 10, y: 6, direction: 2 },
};


let aPuzzle3 = {
    board: [ '                ',
             '                ',
             '        bbb     ',
             '        b b     ',
             '      bbb B     ',
             '      b         ',
             '      bbb       ',
             '        b       ',
             '      bbb       ',
             '      b         ',
             '    bbb         ',
             '                ' ],
    robot: { x: 10, y: 4, direction: 0 },
};

/////////////////////////////////////////////////
describe('Puzzle implementation tests', () => {
    
    test('Testing make_puzzle', () => {
        
        let robot = Robot.robot_init(10, 6, 2);
        let first_test = Puzzle.make_puzzle(aPuzzle2.board, robot);
        expect(first_test.board).toBe(aPuzzle2.board);
        expect(first_test.robot).toBe(robot);

        let second_robot = Robot.robot_init(10, 4, 0);
        let second_test = Puzzle.make_puzzle(aPuzzle3.board, second_robot);
        expect(second_test.board).toBe(aPuzzle3.board);
        expect(second_test.robot).toBe(second_robot);
    });
    
    test('Testing get__cell_content', () => {
        
        let first_test = Puzzle.get__cell_content(aPuzzle2, 5, 9);
        expect(first_test).toBe(' ');

        let second_test = Puzzle.get__cell_content(aPuzzle2, 10, 6);
        expect(second_test).toBe('b');
    });         

    test('Testing is_valid_position', () => {

        expect(Puzzle.is_valid_position(aPuzzle2, 5, 9)).toBe(false);
        expect(Puzzle.is_valid_position(aPuzzle3, 3, 5)).toBe(false);
    }); 

    test('Testing get_robot__symbol', () => {

        expect(Puzzle.get_robot__symbol(aPuzzle2)).toBe("<");
        expect(Puzzle.get_robot__symbol(aPuzzle3)).toBe(">");
    });


});