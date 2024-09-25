// stack (primitive)  , heap ( non - primitive)

let myYoutube = "ayushjhavlogs"

let anotherName = myYoutube
anotherName = "chaiaurcode"
console.log(myYoutube);
console.log(anotherName);


let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "xyz@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);