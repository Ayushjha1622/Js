// const myNums = [1,2,3,4,5,6,7,8,9,]

// // const newNums = myNums.map( (num) => num + 10 )

// const newNums = myNums.map( (num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)

// console.log(newNums);


// const myNums = [1,2,3]

// // const myTotal = myNums.reduce(function(acc,currVal){
// //     console.log(`acc: ${acc} and currVal: ${currVal}` );
    
// //     return acc + currVal
// // },0)
// const myTotal = myNums.reduce( (acc,curr)  => acc+curr,0 )
// console.log(myTotal);

const shoppingCart = [
    {
    itemName: "js course",
    price: 3000
    },
    {
    itemName: "app dev course",
    price: 30000
    },
    {
    itemName: "data science course",
    price: 45000
    },
    {
    itemName: "full stack course",
    price: 60000
    },
]

let priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(priceToPay);


