//Standard way of writing a function
var a = 10
var b = 20
function myFunction(p1, p2) {
    return p1 * p2;
}
console.log(myFunction(a, b))


// Better way of writing a function
var a = 10
var b = 20
myFunction=(p1, p2)=> {
    return p1 * p2;
}
console.log(myFunction(a, b))