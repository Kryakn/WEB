//An object stores data and key value pairs. An object is an real world entity.
let stu ={
    name:"A0",age:21,city:"Indore"
};
console.log(stu);


//accessing the object
//Dot notation
console.log(stu.name);

//bracket notation
console.log(stu["age"]);

//adding key and value
stu.phone = 9827;
console.log(stu);

//update key and value
stu.age=25;
console.log(stu);

//delete key and value
delete stu.phone;
console.log(stu);

//object methods : object me andar function
let obj={
    name:"Aryan",
    greet(){
        console.log("Hello");

    }
}
obj.greet();

//for knowing the key and value of the object
for(key in stu){
    console.log(key,stu[key]);
}

//object under object
let person={
    name:"Ayan",
    age:25,
    address:{
        city:"silicon",
        place:"Palash Parishar",
    }
};
console.log(person);

//array of objects
let array = [a={name:"a"},b={name:"b"},c={name:"c"}];
console.log(array);

//for accessing object under object
console.log(person.address.city);//dot
console.log(person["address"]["city"]);//bracket
console.log(array[0].name);//indexing

//ES6
//template literals
let n = "Naman";
console.log("hello"+n);
//shorthandnotation
console.log(`hello ${n} kesa hai`);

//default parameter
function meet(name="Guest"){
    console.log(`hello ${name}`);
}
meet("Rashmika");

function meet1(name="Guest"){
    console.log(`hello ${name}`);
}
meet1("");

//array destructor
let [x,y] = [10,20]
console.log(x);
console.log(y);

let rgb = {
    color:"white",type:"dark"
};
//object destructor
let {color,type} = rgb;
console.log(rgb.color);
console.log(rgb.type);

//spread operator
let m1 = [1,2,3,4,5];
let m2 = [...m1];
console.log(m2);

//rest operator
let nums=1;
function sum(...nums){
    nums++;
    return nums;
}
console.log(sum(nums));

//enhanced object literals
let name2="Krishna";
let student2={
    name2
}
console.log(student2);