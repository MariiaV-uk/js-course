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

if (celoe = true){
    var otvet = "Целое";
}else{
    var otvet = "Дробное";
}

console.log(otvet);

var chislo = + chislo;

if (chislo > 0){
    var otvet2 = "Положительное";
} else if (chislo < 0){
    var otvet2 = "Отрицательное";
} else if (chislo == 0){
    var otvet2 = "0";
}
 
console.log(otvet2);

//Home 2

var array = [")", "Lol", "emanresu", "olleH"];
var sm = array[0];
var ans = array.slice(2).reverse();
var a = ans[0].split("").reverse().join("");
var b = ans[1].split("").reverse().join("");
var answer = a+" "+b+" "+sm;

console.log(answer);


var names = [
  { name: 'Tetiana', mark: 4.8, diploma: true}, 
  { name: 'Andrew', mark: 5.0, diploma: false}, 
  { name: 'Maria', mark: 3.6, diploma: true},
  { name: 'Margo', mark: 4.8, diploma: false},
  { name: 'Sergey', mark: 4.9, diploma: false},
  { name: 'Alex', mark: 4.9, diploma: false},
  { name: 'Anatoly', mark: 4.9, diploma: true}]

  function comparisonFunc(user1, user2) { 
      if (user1.mark  > user2.mark) { 
          return -1;
        } else if (user1.mark == user2.mark) {
             if (user1.diploma > user2.diploma) {
                  return -1;
                } else if (user1.diploma == user2.diploma) {
                    if (user1.name > user2.name) {
                         return -1;
                       } else {
                            return 1;
                        }
                    }
                }
            }

   var answer2 = names.sort(comparisonFunc).splice(0,5);

   console.log(answer2);
   

   var someArr = ["el-1", "el-2", "el-3", "el-8", "el-5"];

   function transformArr (arr) {
       for(var index in arr) {
           var el = arr[index];
           arr[index] = el.split('-').join(':') + ')' + ' (' + (+index+1) + ')';
               }
               return arr.join();
   }
  
  var answer3 = transformArr (someArr);
   console.log(answer3);

  


