var isBirth = true;
var naming = 'Alex';
var aging = 40;
function logBrtMsg(isBirth, naming, aging) {
    if (isBirth) {
        console.log("Congrats ".concat(isBirth, ", age: ").concat(aging));
    }
}
logBrtMsg(isBirth, naming, aging);
