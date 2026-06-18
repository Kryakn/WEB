//A sequence of character
//let str = "Aryan";

let str = "Aryan";

//length = size of string
console.log(str.length);

//to uppercase
console.log(str.toUpperCase());

//tolowercase
console.log(str.toLowerCase());

//trim = remove spaces form left and right side but not in the middle.
let g = "naman    ";
console.log(g.trim());

//includes
let a = "Javascript is not awesome";
console.log(a.includes("is"));

//startwith
console.log(a.startsWith("J"));

//endwith
console.log(a.endsWith("a"));

//indexof it will return the index of "n"
console.log(a.indexOf("not"));

//lastindexof it will return the index of "e"
console.log(a.lastIndexOf("me"));
console.log(a.length);

//slice it returns the elements in the range.
console.log(a.slice(2,19));

//substring
console.log(a.substring(1,5));

//replace
console.log(a.replace("not"," "))

//replace all
console.log(a.replaceAll("a",""));

//split it convert string into array
console.log(a.split(" "));