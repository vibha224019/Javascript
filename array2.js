const marvel_hero=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];
const allHero=["gcdhgce","wjhfwg"];
// marvel_hero.push(dc_heros);

// console.log(marvel_hero);
// console.log(marvel_hero[3]);

// const allHeros=marvel_hero.concat(dc_heros,allHero);
// console.log(allHeros);

//spread operator

// const all_new_heros=[...marvel_hero,...dc_heros];
// console.log(all_new_heros);

//difference between concate method and spread operator is that conact method can't concate object 
//rether it can concat only arrays.

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Vibha"));
console.log(Array.from("Vibha")); //it converts its parameter into array
//outout of the above line is ["v","i","b","h","a"]

console.log(Array.from({name:"vibha"})); //it returns the empty array because it cant convert in array directly
//it got confused whether the array should be formed of key or values


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); //it returns the array [100,200,300]