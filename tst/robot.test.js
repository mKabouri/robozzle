import { robot_init,step,move,right,left,throw_error ,apply_inst,match,get__direction,get__x,get__y,execution_limits,robot_state} from '../src/robot.js';
import * as Puzzle from '../src/puzzle.js';
import { make_context } from '../src/interpreter.js';

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
    robot: { x: 10, y: 6, direction: 2 }
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
    robot: { x: 10, y: 4, direction: 0 }
};


let aPuzzle5= {
    board: ['bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb',
            'bbbbbbbbbbbbbbbb'],
    robot: { x: 5, y: 6, direction: 1 }
};

function change_direction(robot, new_direction) {
    robot.direction = new_direction;
}


describe('robot tests suite', () => {

    test('Testing robot_init', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        expect(puzzle.robot.x).toBe(5);
        expect(puzzle.robot.y).toBe(6);
        expect(puzzle.robot.direction).toBe(3);
    });

    test('Testing get__direction', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        expect(get__direction(puzzle)).toBe("NORTH");

    });

    test('Testing get__x', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        expect(get__x(puzzle)).toBe(5);

    });

    test('Testing get__y', () => {

        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        expect(get__y(puzzle)).toBe(6);

    });

    test('Testing move', () => {

        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        move(puzzle);
        expect(get__x(puzzle)).toBe(4);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(3);

        change_direction(puzzle.robot, 0);
        move(puzzle);

        expect(get__x(puzzle)).toBe(4);
        expect(get__y(puzzle)).toBe(7);
        expect(puzzle.robot.direction).toBe(0);

        change_direction(puzzle.robot, 2);
        move(puzzle);
        expect(get__x(puzzle)).toBe(4);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(2);

        change_direction(puzzle.robot, 1);
        move(puzzle);
        expect(get__x(puzzle)).toBe(5);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(1);

    });

    test('Testing LEFT', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 0));
        left(puzzle);
        expect(get__x(puzzle)).toBe(5);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(3);
        left(puzzle);
        expect(get__x(puzzle)).toBe(5);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(2);
    });

    test('Testing right', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        right(puzzle);
        expect(get__x(puzzle)).toBe(5);
        expect(get__y(puzzle)).toBe(6);
        expect(puzzle.robot.direction).toBe(0);
    });

    test('robot_state', () => {
        let puzzle = Puzzle.make_puzzle("world",robot_init(5, 6, 3));
        expect(robot_state(puzzle)).toBe(puzzle.robot);
    });
});



describe('execution_limits suite', () => {

    test('Program max size error', () => {

        let puzzle=aPuzzle3;

        let F1 = [left, move];
        let F2 = [left, move];
        let F3 = [left, move];
        let F4 = [left, move];
        let F5 = [left, move];
        let F6 = [left, move];

        let b_F1 = {'func': F1, 'color': 'b'};
        let b_F2 = {'func': F2, 'color': 'b'};
        let b_F3 = {'func': F3, 'color': 'b'};
        let b_F4 = {'func': F4, 'color': 'b'};
        let b_F5 = {'func': F5, 'color': 'b'};
        let b_F6 = {'func': F6, 'color': 'b'};

        let program = [b_F1, b_F2, b_F3,b_F4,b_F5,b_F6];
        let context=make_context(program);
        expect(() => {
            execution_limits(puzzle,context,throw_error);
          }).toThrow("Program max size is 5");
        expect(context.nb_call_func).toBe(0);
        
    });

    test('function match ', () => {

        let F1 = [left, move];
        let F2 = [left];
    
        let b_F1 = {'func': F1, 'color': 'b'};
        let b_F2 = {'func': F2, 'color': 'b'};
        
        expect(match(b_F1,'b')).toBe(true);
        expect(match(b_F2,'g')).toBe(false);
        expect(match(b_F2,'Gr')).toBe(false);
    });

});


describe('Step function test suite', () => {

    test('Apply instruction function testing', () => {

        let puzzle=aPuzzle3;

        let b_move = {'func': move, 'color': 'b'};
    
        let false_move = {'func': 0, 'color': 'B'};

        expect(() => {
            apply_inst(puzzle,false_move,throw_error);
          }).toThrow("Unknown instruction error");
        
        apply_inst(puzzle,b_move,throw_error);
    });

    test('Out of ground error', () => {

        let puzzle=aPuzzle2;

        let F1 = [{'func': move, 'color': 'b'},{'func': move, 'color': 'b'}, {'func': move, 'color': 'b'}];
        let F2 = [];
    

        let b_F1 = {'func': F1, 'color': 'b'};
        let b_F2 = {'func': F2, 'color': 'b'};
        let program = [b_F1,b_F2];
        let context=make_context(program);

        step(puzzle,context,throw_error);
        step(puzzle,context,throw_error);
        step(puzzle,context,throw_error);
        expect(() => {
            step(puzzle,context,throw_error);
          }).toThrow("Out of ground error");
        
    });

    test('Stack overflow error', () => {

        let puzzle=aPuzzle5;
        
        let b_right = {'func': right, 'color': 'b'};

        let F2 = [];
        let b_F2 = {'func': F2, 'color': 'b'};
        let F1 = [b_right];
        
        let b_F1 = {'func': F1, 'color': 'b'};
        
        for(let i = 0; i < 200; i++) {
            b_F2.func = [b_F1];
        }
        
        let program = [b_F1, b_F2];
        let context=make_context(program);
        
        for (let i=0;i<150;i++){
            step(puzzle,context,throw_error);
        }
        expect(() => {
            step(puzzle,context,throw_error);
          }).toThrow("Stack overflow error");
        });


});
