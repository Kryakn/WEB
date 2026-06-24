let heading = document.getElementById("h");

let p = document.getElementsByClassName("para");

console.log(heading);

console.log(p);

let p1 = document.querySelector(".para");

console.log(p1);

let p2 = document.querySelectorAll(".para");

console.log(p2);

heading.innerText = "Welcome";

// p1.innerText="<b>p1</b>";

p1.innerHTML = "<b>p1</b>";

heading.style.color = "aqua";

heading.style.backgroundColor = "black";



let h = document.createElement("h2");

h.innerText = "hello";

h.style.color = "blue";

document.body.appendChild(h);
// h.remove();


let b = document.getElementById("bt");

b.addEventListener("click", function (event) {
    b.style.background = "aqua";
    b.style.color = "pink";
    console.log("button is clicked");
    console.log(event.target);

});

b.addEventListener("mouseover", function () {
    console.log("Mouse Entered");
});
