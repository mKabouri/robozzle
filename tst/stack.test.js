import {empty_stack, stack__is_empty, stack, unstack} from '../src/stack.js';
describe('stack functions', () => {
    test('empty stack is empty', () => {
            let s = empty_stack();
            expect(stack__is_empty(s)).toBe(true);
        
    });

    test('stacking a new Pc in the stack yields last by one', () => {
        let s = empty_stack();
        let Pc = [0,2];
        stack(s, Pc);
        expect(s.last).toBe(0);

    });

    test('stacking a new Pc in the stack is found back', () => {
        let s = empty_stack();
        stack(s, [0,2]);
        stack(s, [1,0]);
        expect(s.stack[s.last]).toStrictEqual([1,0]);
    });

    test('unstacking an element from a stack decreases last', () => {
        let s = empty_stack();
        stack(s, [0,2]);
        stack(s, [1,0]);
        expect(s.last).toBe(1);
        unstack(s);
        expect(s.last).toBe(0);

    });

});
