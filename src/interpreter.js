import { print_puzzle } from './puzzle.js';
import { execution_limits, step } from './robot.js';
import * as Stack from './stack.js';


function add_sentinel(Function, sentinel) {
    let length = Function.func.length;
    Function.func[length] = sentinel;
}


//This function build a context.
function make_context(program) {
    program.map((func, i) => {
        if( i === program.length - 1) {
            add_sentinel(func, {'func': -2});
        }
        else {
//	    console.log(func);
            add_sentinel(func, {'func': -1});
        }
    });
    
    return {
        'program': program,
        's': Stack.empty_stack(),
        'Pc': [0, 0],
        'nb_steps': 0,
        'nb_call_func': 0
           };
}

//find a function 'fct' in a program.
function find_function(program, fct) {

    function find_function_rec (program, fct, idx) {    
    
        if (program[idx] === fct) {
            return idx;
        }
        else {
            return find_function_rec(program, fct, idx+1);
            }
    }
    return find_function_rec(program, fct, 0);
}

//returns zero in limit cases or if the program was executed.
function is_over(puzzle, context,error_function) {

    if (context.Pc[0] === -1 && context.Pc[1] === -1)
    {
        return 1;            
    }
    return execution_limits(puzzle, context,error_function);
}

//Execute a program on a puzzle and print robot movement.
function execute_and_print(puzzle, context,error_function) {

    console.log(print_puzzle(puzzle));
    while(!is_over(puzzle, context,error_function)) {
        step(puzzle, context,error_function);
        console.log(print_puzzle(puzzle));
    }
}

export {make_context, find_function, is_over, execute_and_print};
