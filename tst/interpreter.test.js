import {left, right, move} from '../src/robot.js';
//import {puzzles} from './puzzles.js';
import {make_context, find_function} from '../src/interpreter.js';

describe('functions and instructions tests suite', () => {
    test('searching for a function in a program', () => {
        let F1 = [{'func': move, 'color': 'b'},{'func': move, 'color': 'b'}, {'func': move, 'color': 'b'}];
        let F2 = [];
    

        let b_F1 = {'func': F1, 'color': 'b'};
        let b_F2 = {'func': F2, 'color': 'b'};

        let program=[b_F1,b_F2];

        expect(find_function(program, b_F1)).toBe(0);
        expect(find_function(program, b_F2)).toBe(1);
    });


    test('make context function', () => {

        let F1 = [{'func': move, 'color': 'b'},{'func': move, 'color': 'b'}, {'func': move, 'color': 'b'}];
        let F2 = [];
    

        let b_F1 = {'func': F1, 'color': 'b'};
        let b_F2 = {'func': F2, 'color': 'b'};

        let program=[b_F1,b_F2];
        let context=make_context(program);

        expect(context.Pc).toStrictEqual([0,0]);
        expect(context.program).toStrictEqual(program);
        expect(context.s).toStrictEqual({"last": -1, "stack": []});
        expect(context.nb_steps).toBe(0);
        expect(context.nb_call_func).toBe(0);

    });

    test('test find function', () => {

        let F1 = [left, move];
        let F2 = [left, right];
        let F3 = [F1];

        let program = [F1, F2, F3];

        expect(find_function(program,F1)).toBe(0);
        expect(find_function(program,F2)).toBe(1);
        expect(find_function(program,F3)).toBe(2);
      


    });



    
});
