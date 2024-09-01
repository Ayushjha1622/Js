
function getAge(){
    return 190;
}

function utility(name="love",age=getAge()){
    console.log(name," ",age);
}

utility();
// function SayName(myName = "prabhe deva") {
//     console.log("my name is: ", myName);
// }
// SayName();
// function SayName(fName="uday",lName=fName.toUpperCase()) {
//     console.log("my name is: ", fName,lName);
// }
// SayName();

// function solve(value = "rahul") {
//     console.log("hello ji ->",value);
// }
// solve(null);
// solve(undefined);




// class Human {
//     age =13;  // public
//     #wt = 80;  // private
//     ht;
//     Age;
//      constructor(newAge, newHeight, newWeight){
//         this.#wt = newWeight;
//         this.Age = newAge;
//         this.ht = newHeight;
//     }


//     walking(){
//     console.log("I am walking",this.#wt);
//     }

//     running(){
//     console.log('I am running');
//     }

//     get FetchWeight(){
//         return this.#wt;
//     }

//     set ModifyWeight(val){
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,76);

// console.log(obj.ht);
// // console.log(obj.#wt);  not print outside of class use get and set
// obj.running();
// obj.walking();
