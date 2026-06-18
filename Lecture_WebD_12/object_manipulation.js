//transformation of objects
//merging objects
let obj1={
    a:1
}
let obj2={
    b:2
}
let merged = {...obj1,...obj2};
console.log(merged);

//object.keys()
//object ki sari keys return karega
console.log(Object.keys(obj1));

//object.values()
//object ki values return krega
console.log(Object.values(obj1));

//object enteries
console.log(Object.entries(obj1));

//object.assign()
let copy=Object.assign({},obj1);
console.log(copy);

//shallow copy (Dependent Copy)
let copy1= {...obj1};
console.log(copy1);

//in operartor
console.log("c" in obj1);

//hasownproperty
console.log(obj1.hasOwnProperty("c"));

//object freeze
//kuch bhio change nhi karega
Object.freeze(obj1);
obj1.a=3;
console.log(obj1);

//object seal
//update hoga pr add delete nhi hoga
Object.seal(obj2);
obj2.b=4;
console.log(obj2);

//Deep copy (Independent copy)
const abf = structuredClone(obj2);
console.log(abf);
