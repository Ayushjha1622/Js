// // let obj = {name: "love","full name": "Ayush jha",
// //     greet: function(){
// //         console.log("hello");
// //     }
// // };

// // console.log(obj);
// // obj.greet();



// // ARRAYS

// let arr = [1,2,3];
// console.log(arr);


// let brr = new Array('love',1,true);

// brr.push('ayush');  // add new item
// brr.pop();          // delete from right
// brr.shift();        // remove first item
// brr.unshift('raj'); // add first item
// brr.push(20000000);
// brr.push(200000);
// brr.push(2000);
// brr.push(200);

// console.log(brr.slice(2,4));  // from 2 to 3
// brr.splice(1,2,'kunal');  // from 1 index remove 2 indexes and put kunal there

// console.log(brr);    

// // console.log(typeof(arr));


// // console.log(brr[2]);


// let arr=[1,2,3,4,5,6,7,8,9]


// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]**2;
   
// }
// console.log(arr);


let arr = [1,2,3,4,5,6,7,8,9];

arr.map((number,index) => {
    console.log(number);
    console.log(index);
})
let ansArray = arr.map((number) =>{
    return number*number;
})

console.log(ansArray);


// let arr = [10,23,4,5,6,7,34,67];
// let evenArray=arr.filter((number) => {
//     // if (number % 2 ===0) {
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number % 2 === 0;
//  });

// console.log(evenArray);



// let arr = [1,2,'love','kunal',null];
// let ans = arr.filter((value) => {
//     // if (typeof(value)==='string') {
//     //     return true;
//     // }
//     if (typeof(value)==='number') {
//         return true;
//     }

// else{
//     return false;
// }
// });

// console.log(ans);


// let arr = [10,20,30,40,50];
// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// },0);
// console.log(ans);



let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(9));

arr.forEach((value, index) => {
    console.log(arr.length);
    console.log("number: ", value, "Index: ", index);
})





