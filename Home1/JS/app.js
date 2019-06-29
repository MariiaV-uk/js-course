var a = 5;
var b = 121;
var c = 256;
var d = 9;
var root = 4;

var koren = Math.pow (c, 1/root);
var stepen = Math.pow(d, 5);
var mnozhitel = Math.pow(9, 1/2)*b / a;

console.log(koren, stepen, mnozhitel);



var chislo = prompt("Введите число", a);

var celoe = Number.isInteger(chislo);

if ( celoe = true)
{
    var otvet = "Целое";
}else{
    var otvet = "Дробное";
}

console.log(otvet);

if (chislo > 0){
    var otvet2 = "Положительное";
} else if (chislo < 0){
    var otvet2 = "Отрицательное";
} else if (chislo == 0){
    var otvet2 = "0";
}
 
console.log(otvet2);

