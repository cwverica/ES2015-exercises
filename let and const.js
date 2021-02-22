var PI = 3.14;

if (2!=2){
PI = 42; // stop me from doing this!
} // stopped you

/* Write an ES2015 Version */
const PI = 3.14;


// What is the difference between var and let?
// Var's scope is the entire function. and it gets 'hoisted'. Let's scope is 
// confined to the codeblock it is declared in. Also, var can be redeclared,
// running the risk of overwriting already existing objects. a Let variable can 
// only be declared once per codeblock.


// What is the difference between var and const?
// Var is completely fluid, as described above. Const is fixed. It cannot be 
// redeclared nor can it be reassigned. Also, Const's scope is the same as Let,
// restriced to the codeblock in which it is declared.


// What is the difference between let and const?
// let can be reassigned, Const cannot.


// What is hoisting?
// Hoisting occurs when the compiler reads through the entire script first, 
// and it "hoists" all of the var declarations to the top of their scope.
// It does not "hoist" the assignment/definition, just the declaration.