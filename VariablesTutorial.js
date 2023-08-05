// Value cannot be changed once declared.
const a = 10;
a = 50;
console.log(a);

// Can redeclare global scoped variable
var d = 20
var e = d * 2;
var d = 30
console.log(d)

// Cannot redeclare block scoped variable
let b = 20
let c = b * 2;
// let b=30
console.log(b)


// Depicting global scope of variable "number"
var number = 50

function print() {
    var square = number * number
    console.log(square)
}

console.log(number)

print()


