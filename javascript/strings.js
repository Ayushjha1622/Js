

const name = "ayush";
const repoCount = 50;

// // Using template literals
// console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String('ayush')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "   hitesh    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://ayush.com/ayush%20jha"

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));





