const marvel_heroes = ["thor","iron man", "spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][2])

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);


// spread operator

const all_newheroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_newheroes)


const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


// data scrapping

console.log(Array.isArray("Ujjwal"))

console.log(Array.from("Ujjwal"))

console.log(Array.from({name: "ujjwal"}))  // key-value pair //interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


let score4 = 900
let score5 = 800
let score6 = 700
console.log(Array.of(score4,score5,score6))