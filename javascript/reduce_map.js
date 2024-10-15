// const coding = ["js","py","c","cpp"]

// const values =  coding.forEach((item) => {
//     console.log(item);
//     return item
    
// })

// console.log(values);


// const myNums = [1,2,3,4,5,6,7] 
// // const newNums = myNums.filter( (num) => num > 4 )
// // const newNums = myNums.filter( (num) => {
// //      return num > 4
// // })

// const newNums = []
// myNums.for( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishDate: "1925",
        edition: "1st"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publishDate: "1949",
        edition: "1st"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publishDate: "1960",
        edition: "1st"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publishDate: "1951",
        edition: "1st"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publishDate: "",
        edition: "1st"
    },
    {
        title: "Moby-Dick",
        genre: "Adventure",
        publishDate: "1851",
        edition: "1st"
    },
    {
        title: "Brave New World",
        genre: "Science Fiction",
        publishDate: "1932",
        edition: "1st"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishDate: "1937",
        edition: "1st"
    },
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        publishDate: "1869",
        edition: "1st"
    },
    {
        title: "Crime and Punishment",
        genre: "Psychological Fiction",
        publishDate: "1866",
        edition: "1st"
    }
];


let userBooks = books.filter( (bk) => bk.genre === 'Fiction')

 userBooks = books.filter( (bk) => { return bk.publishDate > 1850  && bk.genre === "Fiction"})

console.log(userBooks);


