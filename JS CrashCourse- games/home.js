/*  console.log("hello");
  //  alert("Hey this is James");

  var b= "smoothie";
  console.log(b);

  var someNumber= 45;
  console.log(someNumber);

  

  //var age = prompt("What is your age?");

  //document.getElementById("someText").innerHTML= age;
  
  
  var num1 = 10;
  num1--;
  console.log(num1);

  console.log(num1 / 6);

  num1 += 10;
  console.log(num1);

  function fun() {
      console.log("This is a function");
  }

  fun();


  var name = prompt("What is your name?");

  function greeting(yourName) {
     
     var result = "Hello " + " " + yourName;
     console.log(result);
  }

  greeting(name);

  function sumNumbers(num1, num2){
    var result = num1 + num2 ; 
    console.log(result);
  }

  sumNumbers("Hey ", "man");  */

 /* var num = 0;

  while (num < 100) {
      num+= 1;
      console.log(num);
  } */

for (let num = 0; num <= 100; num++) {
    console.log(num);
}

let fruit="banana"
let moreFruits="banana\napple";
console.log(fruit.length);

console.log(fruit.indexOf("p"));
console.log(fruit.slice(2,6));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));


let fruits = ["banana", "apple", "orange", "pineapples"];
fruits = new Array("banana", "apple", "orange", "pineapples");

console.log(fruits[2]);

fruits[0] = "pear";
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("to string", fruits.toString());

console.log(fruits.join(" - "));
console.log(fruits.pop(), fruits);

console.log(fruits.push("blackberries"), fruits);
console.log(fruits[3]);
fruits[4] = "new fruit";
console.log(fruits)
fruits.shift();
console.log(fruits)
fruits.unshift();
console.log(fruits)
fruits.unshift("kiwi");
console.log(fruits)


let vegetables = ["asparagus", "tomato", "broccoli"];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());


let someNumbers = [5, 10, 2, 25, 3, 25, 1, 2, 5, 334, 321, 21];
console.log(someNumbers.sort(function(a,b){return a-b}));

someNumbers = [5, 4, 34, 45, 3545, 3223, 2344, 23224, 24424, 44656, 464,]
console.log(someNumbers.sort(function(a,b){return a-b}));



let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);


let student = {first: "Rafeh", 
                last: "Qazi", 
                age: 25, 
                height: 170,
                studentInfo: function(){
                    return this.first + '\n' + this.last + '\n' + this.age;
                }
            };
//console.log(student.first);
//console.log(student.last);
//console.log(student.age);
//console.log(student.height);
student.age++
console.log(student.age);

console.log(student.studentInfo());


 var age = 45

if ( (age >= 18) && (age <= 35) ) {
    status = "target demo";
    console.log(status);
} else {
    status = "not my audience";
    console.log(status);
}

switch (6) {
    case 0:
        text = "Weekend";
        break;
    case 5:
        text = "Weekend";
        break;
    case 6:
        text = "Weekend";
        break;
    default:
            text = "Weekday"
}

console.log(text);































































