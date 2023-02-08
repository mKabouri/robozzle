import * as S from './stack.js';
import * as Puzzle from './puzzle.js';
import * as Inter from './interpreter.js';



/**
*  initializes a robot in the position of coordinates `(x, y)`
*  and a direction `direction`.
*  For direction, we take the convention below:
*          For east ---> 0
*          For south ---> 1
*          For west ---> 2
*          For north ---> 3
*/
let directions = { 'EAST': 0, 'SOUTH': 1, 'WEST': 2, 'NORTH': 3 };


export function robot_init(x, y, direction) {
    return { "x": x, "y": y, "direction": direction };
}


export function get__direction(puzzle) {
    return Object.keys(directions)[puzzle.robot['direction']];
}


export function get__x(puzzle) {
    return puzzle.robot.x;
}

export function get__y(puzzle) {
    return puzzle.robot.y;
}

export function move(puzzle) {
    let d = puzzle.robot.direction;
    puzzle.robot.y += ((1 - d) % 2) * (1 - d % 2);
    puzzle.robot.x += ((2 - d) % 3) * (d % 2);
}

export function left(puzzle) {
    puzzle.robot.direction === 0 ? puzzle.robot.direction = 3 : puzzle.robot.direction -= 1;
}

export function right(puzzle) {
    puzzle.robot.direction === 3 ? puzzle.robot.direction = 0 : puzzle.robot.direction += 1;
}

export function robot_state(puzzle) {
    return puzzle.robot;
}

/**
* context = {program, Pc, stack, nb_steps, nb_call_func} the context 
* where nb_steps is the number of steps in a program, 
* nb_call_func is the number of function calls and
* Pc "Programme counter" refers to the current position.
*/

//This function makes error_functions on the limits of the projects

export function throw_error(message){
    throw new Error(message);
}

export function execution_limits(puzzle, context,error_function) {
    
    if (context.program.length > 5) {
        error_function("Program max size is 5");
        return 1;
    }
    else if (context.nb_steps === 1000) {
        
        error_function("Infinite loop error");
        return 1;
    }
    else if (context.nb_call_func === 50) {
        
        error_function("Stack overflow error");
        return 1;
    }
    else if (!Puzzle.is_valid_position(puzzle, puzzle.robot.x, puzzle.robot.y)) {
        
        error_function("Out of ground error");
        return 1;
    }
    return 0;
}

export function apply_inst(puzzle, inst,error_function) {
    if (inst.func !== move && inst.func !== left && inst.func !== right && inst.func !== -1 && inst.func !== -2)  {
        error_function("Unknown instruction error");
        return ;
    }
    inst.func(puzzle);
}

export function match(F, color) {
    return  F.color === 'Gr' || F.color === color;
}


export function step(puzzle, context,error_function) {
    

    if (context.Pc[0] === -1) {
	return;
    }
    
    execution_limits(puzzle, context,error_function);
    
    let fct_indx = context.Pc[0];
    let inst_indx = context.Pc[1];
    let func = context.program[fct_indx];
    let inst = context.program[fct_indx].func[inst_indx];
    let cell_content = Puzzle.get__cell_content(puzzle, puzzle.robot.x, puzzle.robot.y);
    
    if( (context.Pc[1] === 0 && match(func, cell_content)) || context.Pc[1] !== 0 ) {
    
        if (typeof inst.func === 'function') {
            if( match(inst, cell_content) ) {
                
                apply_inst(puzzle, inst,error_function);
            }
            context.Pc = [fct_indx, inst_indx + 1];
            context.nb_steps++;
        }
        else if ( inst.func === -1 ) {

            context.Pc = [fct_indx + 1, 0];   
        }
            
        else if (inst.func === -2) {
            if (S.stack__is_empty(context.s)) {
                context.Pc = [-1, -1];
                console.log("Program finished and this is the result of the execution of your program:");
            }    
            else {
                context.Pc = S.unstack(context.s);
            }
        }
        
        else {
            if( match(inst, cell_content) ) {
                context.Pc = [fct_indx, inst_indx+1];
                S.stack(context.s, context.Pc);
                context.Pc[0] = Inter.find_function(context.program, inst);
                context.Pc[1] = 0;
                context.nb_steps++;
                context.nb_call_func++;
            }
            else {
                context.Pc = [fct_indx, inst_indx + 1];
            }
        }
        
    }
    else {
        if(context.Pc[0] === context.program.length - 1) {
            if (S.stack__is_empty(context.s)) {
                context.Pc = [-1, -1];
                console.log("Program finished and this is the result of the execution of your program:");
            }
            else {
                context.Pc = S.unstack(context.s);
            }
        }
        else {
            console.log(context.Pc,' not executed');
            context.Pc = [fct_indx + 1, 0];
        }
    }
}
