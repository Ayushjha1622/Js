let src = {
    age:12,
    wt:68,
    ht:180
};

let dest = {};
// cloning using iteration
for(let key in src){
    let newKey = key;
    let newValue = src[key];
    // insert newkey and value in dest and create a clone 
    dest[newKey] = newValue;
}

src.age=90;
console.log("src: ",src);
console.log("src: ",dest);

// using spread operator


// let dest = {...src};
// let dest = Object.assign({}, src);
// let src2 ={
//     value:101,
//     name:"Rahul"
// }


// using assign 


// let dest = Object.assign({},src,src2);
// src.age=90;
// console.log("src: ", src);
// console.log("dest: ", dest);
// // console.log(obj)
// // obj.color = "white";
// // console.log(obj);
