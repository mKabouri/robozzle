Project:
========
Robozzle project

- [Projet web page](https://www.labri.fr/perso/renault/working/teaching/projets/2021-22-S6-Js-Robot.php)

Author: 
========
Atman BOZ <aboz@enseirb-matmeca.fr>

Hicham NEKT <hnekt@enseirb-matmeca.fr>

Mouhcine AHBAIZ <mahbaiz@enseirb-matmeca.fr>

Mohamed Yassine Kabouri <mkabouri@enseirb-matmeca.fr>


#Coding convention
***

Naming
------
* Functions: lower case with underscore between words

* Variable: first letter with upper case

* macro: full upper case with an underscore between the words

* objects: full lower case

braces
------
* openning accolade: to be put in the current line

* closing accolade: to be put alone in the next line

Execution
-----------
To execute a solution program on a puzzle ,go into src/ directory, then use the following commande:
	
-node main.js [name of the puzzle] [name of the solution]

Puzzles are named from puzzle1 to puzzle4 and solutions are nammed sol_puzzle1 to sol_puzzle4 .

Exemple: node main.js puzzle1 puzzle2   (this commande applies the solution of the second puzzle on the first one )

-Execute the commande 'make test' to launch the tests for the code.

-Execute the commande 'make gen' to generate the HTML page .
