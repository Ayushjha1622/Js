const marvel_heroes = ["thor", "spiderman", "Ironman"]
const DC_heroes = ["batman", "superman", "wonderwoman"]

// marvel_heroes.push(DC_heroes)


// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(DC_heroes)
// console.log(allHeroes);


// const allHeroes = [...marvel_heroes, ...DC_heroes]
// console.log(allHeroes);


const another_array = [1,2,3,[4,5,6],7,[5,6,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.isArray({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));




