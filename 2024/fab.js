var readline = require('readline-sync');
var n = readline.question("plsase input an intger ");

console.log(Fab(n));

function Fab(n){
    if(n <= 1){
        return 1;
    }
    else
    return Fab(n-1) + Fab(n-2);
}
//384401000 ans=42//