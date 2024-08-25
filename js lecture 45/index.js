// SayMyName("ayush");


// function SayMyName(finalName) {
//     console.log(finalName);
    
// }




// console.log(age);
// var age = 25;


// console.log(age);  let aur cons pe variable hoisting nhi hoti
// let age = 256;

     
// sa yHello();     function expression par nhi hota
// let sayHello=function(){
//     console.log("hello ji");
    
// }


// const obj1 = new human();   class hoisting bhi possible nhi hai
// class human {
    
// }

// function greetMe(greet, fullName){
//     console.log("hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("greeting for the day");
// }

// greetMe(greet, "ayush");

const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }


];

let first = arr[0];
let ans = first(5,10);
console.log(ans); 

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);


let obj = {
    age:25,
    wt:36,
    ht:180,
    greet: ()=>{
        console.log("hello");
    }
}

console.log(obj.age);
obj.greet();