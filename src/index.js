import * as R from  '../src/robot.js';
import * as I from '../src/interpreter.js';
import { getRandomInt } from '../src/puzzle.js';

// 'robots.ttf' defines 16 ad-hoc icons, using codes from \uEE00 to \uEE0F :
// 0 = robot pointing east, 1 = robot pointing south, 2 = robot pointing west,
// 3 = robot pointing north, 4 = star, 5 = disk, 6 = box, 7 = flash,
// 8 = heart, 9 = broken heart, A = lock, B = open lock, C = key,
// D = droplet, E = rocket, F = empty

const icons = {
    robotEast:   { string: '\uEE00', color: 'pink' },
    robotSouth:  { string: '\uEE01', color: 'pink' },
    robotWest:   { string: '\uEE02', color: 'pink' },
    robotNorth:  { string: '\uEE03', color: 'pink' },
    star:        { string: '\uEE04', color: 'yellow' },
    disk:        { string: '\uEE05', color: 'red' },
    box:         { string: '\uEE06', color: 'red' },
    flash:       { string: '\uEE07', color: 'red' },
    heart:       { string: '\uEE08', color: 'red' },
    heartBroken: { string: '\uEE09', color: 'red' },
    lock:        { string: '\uEE0A', color: 'red' },
    lockOpen:    { string: '\uEE0B', color: 'red' },
    key:         { string: '\uEE0C', color: 'red' },
    droplet:     { string: '\uEE0D', color: 'red' },
    rocket:      { string: '\uEE0E', color: 'red' },
    empty:       { string: '\uEE0F', color: 'red' },
};


////////////////////////// Puzzles //////////////////////////////////

let aPuzzle1 = {
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


let aPuzzle2 = {
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

let puzzles=[aPuzzle1,aPuzzle2];


/////////////////////////////////////////////////

let b_move = {'func': R.move, 'color': 'b'};
let B_move = {'func': R.move, 'color': 'B'};


////////////////////////////////////////////////

let b_Right = {'func': R.right, 'color': 'b'};
let B_Right = {'func': R.right, 'color': 'B'};


////////////////////////////////////////////////

let b_left = {'func': R.left, 'color': 'b'};
let B_left = {'func': R.left, 'color': 'B'};


// ////////////////  program for aPuzzle1

let F1 = [b_move,b_move,b_left];
let F2 = [b_move,b_move,b_Right,b_move,
    b_move,b_left,b_move,b_move,b_left,
    b_move,b_move,b_Right,b_move,b_move,b_Right,b_move,b_move,b_left,
    b_move,b_move,b_Right,b_move,b_move,b_Right,b_move,b_move];

let b_F2 = {'func': F2, 'color': 'b'};
let b_F1 = {'func': F1, 'color': 'b'};

// ////////////////  program for aPuzzle2

let F11 = [b_move,b_move,b_Right,b_move,b_left,b_move,B_Right,
    B_Right,B_move,b_left,b_move,B_Right,B_move,b_left,b_move,
    b_Right,b_move,B_left,B_move,b_Right,b_move,B_left,B_move,
    b_Right,b_move,B_left,B_move,b_Right,b_move,B_left,B_move,
    b_Right,b_move];

let b_F11 = {'func': F11, 'color': 'b'};

const Program1 = [b_F1,b_F2];
const Program2 = [b_F11];

let id=getRandomInt(2);
let program=[Program2, Program1];
let aPuzzle=puzzles[id];

let C = I.make_context(program[id]);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const robotID = "robot";

function removeRobot() {

    const rCell = document.getElementById(robotID);
    rCell.removeAttribute('id');
    rCell.removeAttribute('style');
    rCell.innerText = icons.empty.string;
}

function addRobot(aBoardID, aRobot) {

    let aBoard = document.getElementById(aBoardID);
    let aCell  = aBoard.rows[aRobot.x].cells[aRobot.y];
    let anIcon = icons[Object.keys(icons)[aRobot.direction]];
    aCell.id = robotID;
    aCell.innerText = anIcon.string;
    aCell.style.color = anIcon.color;
}

function addStar(aCell) {

    aCell.innerText = icons.star.string;
    aCell.style.color = icons.star.color;
}

function fillBoard(aBoardID, aPuzzle) {

    const tbody = document.getElementById(aBoardID);
    aPuzzle.board.forEach((aLine) => {
        const newRow = tbody.insertRow();
        aLine.split('').forEach((aChar) => {
            const newCell = newRow.insertCell();
            switch (aChar) {
            case 'r': newCell.className += " red_tile"; break;
            case 'g': newCell.className += " green_tile"; break;
            case 'b': newCell.className += " blue_tile"; break;
            case 'R': newCell.className += " red_tile"; addStar(newCell); break;
            case 'G': newCell.className += " green_tile"; addStar(newCell); break;
            case 'B': newCell.className += " blue_tile"; addStar(newCell); break;
            }
        });
    });
}

function Step(aBoardID, C) {

    removeRobot();
    R.step(aPuzzle, C,alert);
    addRobot(aBoardID, aPuzzle.robot);
}

function execute_program(aBoardID, context) {

    setInterval( () => {
            Step(aBoardID, context);
    }, 100);
}

window.onload = () => {

    let aBoardID = "visualizer_board";
    fillBoard(aBoardID, aPuzzle);
    addRobot(aBoardID, aPuzzle.robot);
    document.
	getElementById("button_execute").
	addEventListener("click", () => execute_program(aBoardID, C));
    document.
	getElementById("button_step").
	addEventListener("click", () => Step(aBoardID, C));    
};
