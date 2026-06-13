let x=10;
let y=12;
function add(x,y){
    return x+y;
}
console.log(add(10,12));
console.log(add("10",5));

// function greet(){
//     console.log("Welcome to my heaven");
// }
// greet();

// const gret=function(){
//     console.log("hello");
// };
// gret();

// function greet(name){
//     return ("hello"+name);
// }
// // function user(a){
// //     console.log(a("Aryan"));
// // }
// // user(zoro);

// function user(add){
//     console.log(add);

// }
// user(add(10,5))
// user(greet("Aryan"));

const numbers = [1,2,3,4];
// const t=function t(num){
//     return num*3;
// }
// const tripletdemo=numbers.map(t);
// const triplet = numbers.map(function(num){
//     return num*3;
// })

// console.log(triplet);
// console.log(tripletdemo);

const even = numbers.filter(function(num){
    return num%2!=0;
})
console.log(even);

// const total = numbers.reduce(function(sum,num){
//     return sum+num;
// },0);
// console.log(total);

const total = numbers.reduce(function(sum,num){
    return sum*num;
 },);
 console.log(total);

 //arrow function


const multi=(m,n) =>m*n;
console.log(multi(5,6));

const doubled = numbers.map(num=>num*2);
console.log(doubled);