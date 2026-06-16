//Using Array Literal
let fruits = ["apple","banana","mango"];
//Using constructor
let fruit = new Array("Apple","Banana","Mango","Strawberry");

console.log(fruits);
console.log(fruit);

//Accessing elements
console.log(fruits[2]);


//for length
console.log(fruits.length);


//for entering element from last
fruits.push("Watermelon");
console.log(fruits);


//for deleting element from last
fruits.pop("Watermelon");
console.log(fruits);


//for entering elements from starting
fruits.unshift("Watermelon");
console.log(fruits);


//for removing element from starting
fruits.shift("Watermelon");
console.log(fruits);


// for knowing element is present in the array or not
console.log(fruits.includes("mango"));//true
console.log(fruits.includes("Watermelon"));//false


//for knowing the index of an element
console.log(fruits.indexOf("mango"));


//sare elemnts ko string bnane ke liye/ sare elements join kara dete hai jisse join krana hota hai
console.log(fruits.join(""));
console.log(fruits.join("-"));


//for knowing the element in the range
console.log(fruits.slice(1,3));// right bound excluded

console.log(fruits.splice(1,4));//element till bound means bound included,it also deletes element

console.log(fruits);

//normal foe loop
fruits = ["apple","banana","mango"];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log();//for spaces

// for of loop
for(let i of fruits){
    console.log(i);
}

console.log();//for spaces

//for Each loop
fruits.forEach(function(i){
    console.log(i);
})

// Advance array methods
let a=[1,2,3,4,5,6,7,8,9,10]
//Map(it applies conditions on every element)
const double = a.map(function(x){
    return x*2;
});

console.log();

//Can be written
const demoDouble=a.map(x=>x*2);

console.log(double);

console.log();

console.log(demoDouble);

//Filter ( It checks condition which element pases the condition and which one is not , and which one passes the condition will get in new array)
const even = a.filter(function(x){
    return x%2==0;
});
// Can be written 
const Even = a.filter(x=>x%2==0);
console.log(even);

console.log();

console.log(Even);

//Reduce ( It converts all element in one varriable)
const sum = a.reduce(function(sum,x){
    return sum+x;
},0);

console.log();

// Can be written
const sum1 = a.reduce((sum,x)=>sum+x,0);
console.log(sum1);

// IN reduce function commonly we give the intial values as zero or any but in case if we didnt give an any intial value it takes the first element of array(default) and traverse in array wil sytart from 1st index.

// Find (It Finds element in array)
const found=a.find(function(x){
    return x>3;
});

console.log();

const DemoFound = a.find(x=>x>3);

console.log(found);
console.log();
console.log(DemoFound);

//Some ( It tells condition is satisfied or not by the elements)
const f=a.some(function(x){
    return x>3;
});

console.log();

const DF = a.some(x=>x>3);

console.log(f);
console.log();
console.log(DF);

//every( it is as same as some but it requires the condition which is fullfilled by every and each element)

const d=a.every(function(x){
    return x>5;
});

console.log();

const D = a.every(x=>x>5);

console.log(d);
console.log();
console.log(D);

